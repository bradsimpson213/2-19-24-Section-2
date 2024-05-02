const express = require("express")
const { Post, User, Like } = require("../db/models")
const router = express.Router()



router.get("/all", async (req, res) => {
    const allPosts = await Post.findAll({
        include: [
        { model: User },
        {
            model: User,
            as: "PostLikes",
            attributes: ["username"],
            through: {
                model: Like,
                attributes: []
            }
        }
        ]
    });
    // console.log(allPosts)
    res.json(allPosts)
})

router.get("/:id", async (req, res) => {

    const onePost = await Post.findByPk(req.params.id)

    const userData = await onePost.getUser()

    const numLikes = await Like.count({
        where: {
            postId: req.params.id
        }
    })

    const payload = {
        id: onePost.id,
        title: onePost.title,
        image: onePost.image,
        postDate: onePost.createdAt,
        username: userData.username,
        likes: numLikes
    }
    console.log(payload)
    res.json(payload)
})


// router.post("/new", async(req, res) => {
//     const { title, image, author } = req.body

//     const newPost = await Post.build({
//         title,
//         author,
//         image
//     })
//     console.log(newPost)

//     // validate
//     await newPost.validate()
    
//     await newPost.save()

//     const resPost = await Post.findByPk(newPost.id)

//     res.json(resPost)
// })

router.post("/new", async(req, res) => {
    const { title, image, author } = req.body

    const newPost = await Post.create({
        title,
        author,
        image
    })
    console.log(newPost)

    const resPost = await Post.findByPk(newPost.id)

    res.json(resPost)
})


router.put("/update/:id", async (req, res) => {
    const updatePost = await Post.findByPk(req.params.id)
    console.log(updatePost)
    const { title, image, author } = req.body

    if (title !== undefined) updatePost.title = title;
    if (author !== undefined) updatePost.author = author;
    if (image !== undefined) updatePost.image = image;

    await updatePost.save()

    res.json({
        message: `Successfully updated a post with id ${req.params.id}`,
        data: updatePost
    })
})

router.delete("/delete/:id", async (req, res) => {
    const deletePost = await Post.findByPk(req.params.id)
    console.log(deletePost)
    await deletePost.destroy()

    res.json({
        message: `Successfully deleted post with id ${req.params.id}`
    })

})

router.get("/like/:postId/:userId", async (req, res) => {
    const { postId, userId } = req.params
    
    const postToLike = await Post.findByPk(postId)

    const userAlreadyLiked = await postToLike.hasPostLike(+userId)
    console.log("LIKE-USERLIKED?", userAlreadyLiked)

    if (userAlreadyLiked) {
        res.send(`User ${userId} has already liked post ${postId}`)
    } else {
        await postToLike.addPostLike(+userId)
        res.send(`Post ${postId} has been liked by User ${userId}`)
    }
});

router.get("/unlike/:postId/:userId", async (req, res) => {
    const { postId, userId } = req.params
    const postToDislike = await Post.findByPk(postId)

    const userAlreadyLiked = await postToDislike.hasPostLike(+userId)
    console.log("LIKE-USERLIKED?", userAlreadyLiked)

    if (userAlreadyLiked) {
        await postToDislike.removePostLike(+userId)
        res.send(`Post ${postId} has been unliked by User ${userId}`)
    } else {
        res.send(`User ${userId} never liked this post, we can't unlike it!`)
    }
})





module.exports = router;
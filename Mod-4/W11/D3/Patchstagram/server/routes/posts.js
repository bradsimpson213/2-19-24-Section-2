const express = require("express")
const { Post } = require("../db/models")
const router = express.Router()



router.get("/all", async (req, res) => {
    const allPosts = await Post.findAll();
    // console.log(allPosts)
    res.json(allPosts)
})

router.get("/:id", async (req, res) => {
    // const onePost = await Post.findOne({
    //     where: {
    //         id: req.params.id
    //     }
    // })
    const onePost = await Post.findByPk(req.params.id)
    console.log(onePost)
    res.json(onePost)
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

module.exports = router;
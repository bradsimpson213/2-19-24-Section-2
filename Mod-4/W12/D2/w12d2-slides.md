<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 12` `W12D2`

---

# Week 12 Day 2

Search Features and Pagination

---

## Review from yesterday

- serving static files
- project stuff

---

## What is pagination?

Pagination is when the results of a query are broken down for use into smaller chunks, or pages. 


note: Take a look at a search feature on a website. I like to use the library of congressnote

Do our coding today in the app.js file

---

## A couple things to think about when setting up pagination

Should take in page and size query strings to determine pagination
- `http://localhost:5000/users?page=5&size=4`

When writing our queries, we use a couple properties for pagination

limit: size 
offset: size * (page - 1)

---

## We can then add our limit and offset to our query

```javascript
const users = User.findAll({ 
    limit: parseInt(req.query.size),
    offset: parseInt(req.query.size) * (parseInt(req.query.page) - 1)
})
```

---

# How do we handle these edge cases?

- page === undefined
- size === undefined

---

## If page or size are undefined:
They should be set to defaults of 1 and 5 respectively

```javascript
if (!page) page = 1;
if (!size) size = 5;
```

---

# What about these edge cases?

- page < 1
- size < 1

---

This could be done by writing a completely separate query inside a conditional, however, this is repetitive.

```javascript
// ... some query
if (page < 1 || size < 1) {
    //... write a query to happen only when this criteria is met
}
//...
```

---

Instead, we can create a pagination object and set limit and offset properties inside that object.

```javascript
const pagination = {}

if (size > 0 && page > 0) {
    pagination.limit = size;
    pagination.offset = size * (page - 1);
}
```

Then we can spread the pagination object into our query object.

```javascript
const result = await User.findAll({ ...pagination })
```

---

# 30 mins for Pagination SP

---

# Search Parameters

To avoid running into the same DRY issue we were running into with pagination, we can establish a query object and pass that into our query method
```javascript
const queryObj = {
    where: {}
};
```
We can then check that a query string has been passed in, assigning that value to the queryObj.where

```javascript
where.queryObj.username = req.query.username;


const users = User.findAll(...queryObj)
```

---

Some examples to demo this: 

- Should take in a post title query string and match partial names in the DB
- Should take in a imageId query to return only images above a certain number for the most recent images added
- Should take in a userId string to find all comments on the post associated with that particular user
    - For this one, we need to add an include: [] property to our queryObj so that we can possibly include multiple tables over time

---

# 30 mins for Search Filters SP

---

# Long Practice 
- Sums up all of our Sequelize and Express stuff. Great practice to prep for projects.
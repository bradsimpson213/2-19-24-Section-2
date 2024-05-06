<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 12` `W12D1`

---

# Week 12 Day 1
Serving Static Files & Gearing up for Project Week

---

## Week 12

- Day 1: Serving Static Files & Project Intro
- Day 2: Pagination & Search
- Day 3: CORS, XXS, CSRF
- Day 4: JWT, Passwords, Authentication
- Day 5: Project Start & Study Day

---

#  Do not ease off the gas!
 It is easy to see a less dense week like Week 12 and think it's ok to relax after the tough Weeks 10 and 11, but we need to continue to work hard. Tighten up any areas where you may be struggling, and get those fundamentals down.

---

More practical uses for Sequelize:
- Security 
  - Really just brushing the surface, but still cool to start talking about
- User Auth
  - Authentication & Authorization
- Building the project skeleton 
  - AuthMe starting on Wednesday afternoon

---

# Serving Static Files
** Create an assets directory in the demo_code directory
** Add an images, css, and scripts directory inside assets
** Add an index.css file to the css directory with some random css code

---

We use another middleware built into a method on the express object
- `app.use(express.static('assets'))`

This middleware tells Express to look in the specified directory for files to send

We can access that css file by sending a get request to "/css/index.css"

---

We can make it so that we are only serving files out of the css directory by changing out app.use
** Change express.static('assets') to be: 

- `express.static('assets/css')`

This changes what our url should look like in Postman
** URL changes from /css/index.css to /index.css

---

We can add a prefix, such as /styling, to the app.use to require that the request path starts with that for css to be served

** Add a '/styling' prefix to the app.use
** Will need to change our Postman URL from '/index.css' to '/styling/index.css'

---

# 15 mins for Serving Static Files in Express SP

---

## For the rest of today

1. Reading materials on a/A Open.
2. Go through the API documentation for the project
    - This is an incomplete version of the docs
    - Pick one, it doesn't matter which one, and look through it
    - Fill out all of the Methods and URLS using RESTful convention
    - Make note of the responses and structure

---

# FIN

--- 
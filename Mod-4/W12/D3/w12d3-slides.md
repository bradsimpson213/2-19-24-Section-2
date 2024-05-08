<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 12` `W12D3`

---

# Week 12 Day 3: Security Basics
CORS, XSS, CSURF

---

## Review from yesterday...
- pagination with query params
- search with query params


---

Today's lecture will be structured differently than you are accustomed to
The short practices are AMAZING for demoing each topic, so the lectures will be very brief, and we let the SP do most of the work

---

# CORS

- Cross-Origin Resource Sharing
- Allows other apps to send requests to our API 
    - setting an `origin` allows us to limit the sites
    - this can be a url(as a string), RegEx, or an array mix of the 2
    - `credentials` is an optional boolean flag to allow sending/receiving cookies
- **Enforced by the browser**
- CORS policies are just middleware

```javascript!
const cors = require("cors");  // we should npm insall cors

app.use(cors({
    origin: ["http://example1.com", "http://example2.com"]
}))
```


---

# 30 mins for CORS SP

---

# XSS Attacks 
- Cross-Site Scripting
- Being able to inject and execution of JavqScript into the HTML of an application
- Often used for malicious intent, but not always.
- Myspace is a great example
- React will do this for us (or Mod 5 frontend framework)

---

## This would allow for XSS

```javascript    
  tweetBody.innerHTML = tweet.body;
```

## This would prevent it

```javascript!
  const bodyText = document.createTextNode(tweet.body);
  tweetBody.appendChild(bodyText);
```

- you will see this is the practice


---

# 30 mins for XSS SP


[image]:https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/readings/csrf.png

---

# CSRF Attacks 
- Cross-Site Resource Forgery
- When someone creates their own requests and tricks another user into sending that request
- One of the most common and dangerous cyber attacks
- Pretty common for XSS and CSRF attacks to happen together, but not always
- we use cookies to prevent this, sending a cookie from the server on the first get request and then send it back on each request so the server knows the request is valid

---

## Cookie flow diagram from HW

![image](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/readings/csrf.png)


---

## CSRF Implementation

```javascript!
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(csurf({
  cookie: {
    sameSite: 'strict',
    secure: true,
    httpOnly: true
  }
}));


```

---

# 20 mins for CSRF SP

---

## Time for you to work on the First 3 Phases of Auth Me!

- If you finish today's phases of Auth Me, do NOT move on to tomorrow's phases
- It is very important that you understand what each line is doing, and you won't know what tomorrow's is doing until after lecture
- Either work through the PostgreSQL exercise (highly recommend) or get a head start on HW



<style>
    .present {
        text-align: left;
    }
</style>


---

###### tags: `Week 18` `W18D1`

---

# Week 18 Roadmap

---

### Technologies
- Today: Intro to Flask
- Tuesday: Flask routing, templating, and forms
- Wednesday: Interacting with a database via the SQLAlchemy ORM
- Thursday: Data migrations with Alembic
- Friday: review, practice assessment walkthrough


---

### Intro to Flask (Today)
- [Flask](https://flask.palletsprojects.com/)
    - Web server (like Express, but for Python)


---

### More about Flask (Tuesday)
- [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
    - Templating language
- [WTForms](https://wtforms.readthedocs.io) & [Flask-WTF](https://flask-wtf.readthedocs.io)
    - WTForms is a form validation library
    - Flask-WTF integrates WTForms with Flask

---

### SQLAlchemy & Flask-SQLAlchemy (Wednesday)
- [SQLAlchemy](https://docs.sqlalchemy.org/en/20/)
    - Object-relational mapping tool (ORM) that makes it easier to interact with our database (like Sequelize)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com) 
    - Integrates SQLAlchemy with Flask


---

### Alembic & Flask-Migrate (Thursday)
- [Alembic](https://alembic.sqlalchemy.org)
    - Database migration tool that works with SQLAlchemy
- [Flask-Migrate](https://flask-migrate.readthedocs.io)
    - Integrates Alembic with Flask

---

### Review day (Friday)
- Independent study time
- Practice assessment walkthrough
- Kahoot

---

# Getting started with Flask & SQLite3
## Week 18 Day 1

---

### Flask app setup

1. Install flask
```bash
pipenv install flask
```
2. Create a folder for your application with a `__init__.py`.
3. Import `Flask` in the `__init__.py`
```python=
from flask import Flask
```
4. Instantiate a `Flask` instance
```python=
app = Flask(__name__)
```


---

### Flask app setup

4. Add a `.flaskenv` file. This file sets publicly visible environment variables for your Flask app
```bash=
FLASK_APP=app
FLASK_ENV=development
FLASK_DEBUG=True
```
5. Install python-dotenv to load environment variables into the app configuration
```bash
pipenv install python-dotenv
```
6. Run your application!
```bash
pipenv run flask run
```

---

### Adding routes

We use the `@route` decorator to turn a function into a route that exists on our application. Whatever we `return` from the function will get sent to the browser.
```python=
@app.route("/")
def index():
    return "Welcome to our app"
```

---

### Adding a secret key (or other configuration variables)

In addition to the `.flaskenv` file which contains environment specific (not secret) information, we can use a `.env`.

This file contains environment variables we want to keep secret. Unlike `.flaskenv`, it will *not* be committed to GitHub.

```bash=
SECRET_KEY=EXTREMELYsecretstufffshhhhhhhh
```

---

### Making a Config class

Get the secret values from your `.env` and define a `Config` class which has all of the values you want to incorporate into your app.

```python=
import os

class Config():
    SECRET_KEY = os.environ.get('SECRET_KEY')
```

Then incorporate these values into your application using the the `config.from_object method`.


```python=
# in the __init__.py in the app folder
from flask import Flask
from book_app.config import Config

app = Flask(__name__)
app.config.from_object(Config)
```

---


### For the rest of today...

- No project/practice today

- Get started on homework!

- EOD @ 4:50 PM PST
    - I will talk about groups for the upcoming group project
    


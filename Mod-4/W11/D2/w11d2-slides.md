<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 11` `W11D2`

---

# Week 11 Day 2
Intro to Sequelize

---

## Review from yesterday...

- assessment
- SQL Efficiency
    - 1. Indexes
    - 2. Benchmark tests
- N + 1 Queries
- SQL Injection Attacks



---


## What is Sequelize?
Sequelize is an Object-Relational Mapping (ORM) library for Node.js. 

It allows you to interact with relational databases like SQLite3 and PostgreSQL using JavaScript/Node.js

<a href="https://sequelize.org/">Sequelize Docs</a>

---

## Getting Started.

This requires quite a bit of boilerplate code. It is important to know what this code does, but not necessary to know it line for line by heart.

Start by initializing npm in a new folder

---

## Set up a basic server

```js
// app.js
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
```

---

## Next install some packages we have seen before

- `express`
- `sqlite3`
- `dotenv`

---

## And some dev dependencies for ease of use

- `nodemon` (not necessary, but useful)
- `dotenv-cli` (needed to work with sequelize commands when connecting to DB)

---

## Now for some new packages

- `npm install sequelize`
- `npm install sequelize-cli` (allows us to work with sequelize from the command line)

---

## Then we initialize Sequelize

- `npx sequelize init`

This command creates a bunch of folders and files for us

Let's examine...

---

- We will be replacing the entirety of the config.json file

```json
// config.json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }, ...
}

```

---

- We will not be touching the models/index.js file. This file bundles up all of the stuff that Sequelize needs and exports it as the db variable.

```javascript
// /models/index.js
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
```

---

## Migrations, Models, & Seeders

- The migrations file's job is to make changes to our DB
- Seeders files are filled with our initial DB data
- Model files are class representations of our tables

---

## This is a bit messy, let's clean it up


Delete all the files we just made and create a .sequelizerc file.

Add the following:

```javascript
// .sequelizerc
const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};
```

---

## Now run `npx sequelize init` again.

Note that config now has a database.js file and models, migrations, and seeders have all been allocated to a new `db` directory.

---

## Replace everything in the config/database.js file with:
```javascript
// config/database.js
module.exports = {
  development: {
    storage: process.env.DB_FILE, // location of DB file
    dialect: "sqlite", // specify RDBMS
    seederStorage: "sequelize",
    benchmark: true, // prints execution time to terminal
    logQueryParameters: true, // logs SQL query parameters to the terminal
    typeValidation: true, // model-level data type validation
    // logging: false // prints SQL to terminal unless set to false
  },
};
```

---

### This defines the configuration for our database
- storage: Tells Sequelize where our actual DB is
- dialect: Tells Sequelize which RDBMS we are using
- benchmark: Basically just turns .timer on by default
- logQueryParameters: Allows us to see the values when we make changes to our DB
- typeValidation: Helps us enforce data types on our tables
- logging: Defaults to true and prints our SQL to the terminal

---

## Set up environment variables

Create a `.env` file and add a `PORT` variable and `DB_FILE` variable

---

## Let's try to run our migrations to make sure everything is setup correctly and to create our db
- `npx dotenv sequelize db:migrate`
  - Runs initial migration and starts a .db file

---

Steps to set up Sequelize
1. Initialize npm (npm init -y)
2. Install server dependencies and stub out app
3. Install Sequelize dependencies (sequelize, sequelize-cli)
4. Create a `.sequelizerc` file and add the boilerplate code
5. Initialize sequelize (npx sequelize init)
6. Replace boilerplate code in `config/database.js`
7. Create `.env` file
8. Run initial migration to verify functionality

---

# 15 min for Sequelize in Express SP

---

## Migrations

- For making changes to the DB STRUCTURE
- Table names = PascalCased and Plural
    - Table: Users
- Column name = camelCased
    - Column: firstName 

---

## Interacting with the CLI

- There are 2 types of commands:
  - Commands that create files
  - Commands that interact with the db
    These require us to add "dotenv" to the command

---

## Interacting with migrations in the CLI

*You can add -cli to the sequelize command, but not needed*

- Generate a new migration file
    - `npx sequelize migration:generate --name <create-name-of-table>` 

*Table name is singular in this command, sequelize handles pluralization*

---

## Interacting with migrations in the CLI

- Run all migration files that haven't been ran
    - `npx dotenv sequelize db:migrate`
- Rolls back the most recent migration
    - `npx dotenv sequelize db:migrate:undo` 
- Rolls back all migrations
    - `npx dotenv sequelize db:migrate:undo:all`

---

# Important notes

- Anytime we are running a command to interact with our db, we need Sequelize to
  see our environment variables, so we have to add the "dotenv"
- Every migration file we create has 2 parts: an "up" and a "down"
  - The "down" should always directly undo the "up"
- Migrations don't only create/edit our tables, they also act as version control for our DB
- All of our normal conditions like unique or not null are represented as key-value pairs in the column objects

---

## Models

- Class representations of each table, with built-in query methods
- Allow us to manipulate/validate data with plain JS before sending it to the database
- Model names = PascalCased and SINGULAR
  - Model: User
- CLI commands:
  - `npx sequelize model:generate --name <name> --attributes <table attributes>`

- Will use this more often than `migration:generate`

---

## Important notes

- We do not have to add an "id" attribute. Sequelize will add that for us for models that we generate.
- We will be switching from snake_case to camelCase for our column names
- Make sure that any changes we make to migrations, such as adding constraints, we need to add those changes to the model as well
- Making changes to our model does not mean we need to run any additional commands

---

# 25 min for Sequelize Models SP

---

## Seeders

- For inserting starter data into tables
- Generate a new seed file
    - `npx sequelize seed:generate --name <name>`
- Runs all seeders that haven't been ran
    - `npx dotenv sequelize db:seed:all`
- Rolls back the most recent seed file 
    - `npx dotenv sequelize db:seed:undo`
- Rolls back all seeder files 
    - `npx dotenv sequelize db:seed:undo:all`

---

## Important notes

- The seeder bulkInsert method tests against table constraints, but not against the model constraints use Model.bulkCreate instead (must import model)

- queryInterface is an object built into Sequelize and has a ton of built-in methods

- One thing that will help you out with Sequelize is envisioning the SQL that Sequelize will be creating

- The seederStorage property in our `config/database.js` file is what gives us the SequelizeData file in our DB

---

## Database reset script:

Handy for when making changes early on
```js
"dbreset": "npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all"
```

---


If we want our seeders to check against our model validations, we have to take a couple extra steps

We will be utilizing our model's built-in bulkCreate method

---

# Model.bulkCreate

Instead of bulkInsert like below, we will replace with bulkCreate

```js

// Insert into People using queryInterface.bulkInsert:
await queryInterface.bulkInsert(
  "People",
  [
    {
      name: "John Doe",
      isBetaMember: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  {}
);
```

---

First we need to import our model into the seed file:

```javascript
const { Person } = require("../db/models");
```

---

Then set up a bulkCreate statement

```javascript
await Person.bulkCreate(
  [
    {
      name: "John Doe",
      isBetaMember: false,
    },
  ],
  { validate: true }
);
```

`validate: true` allows us to enforce model level validations

---

## Basic layout

```js
    await <model>.bulkCreate([{
        <seeders>
    }], { validate: true })
```

---

# `bulkCreate` instead of `bulkInsert` is highly recommended

---

## A statement that has helped some students in the past:

All squares are rectangles, but not all rectangles are squares. Everything in our migrations goes into our model, but not everything in our model goes into migrations.

---


# 20 min for Sequelize Seeders SP

---


## Model Validations

- go on the model, on the columns we pick and choose
- like constraints, but applied at the model level
- we can write custom ones even if we need
- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/


---

### We set a validate key on our models like this

```javascript!
validate: {
    len: [2,20],
}
```

### Or we can add a custome error message 

```javascript!
validate: {
    len: {
        args: [2,20],
        msg: 'name must be between 2 and 20 characters'
    },
}
```

---

### This is something you are really going to want to get comfortable going to the docs for...


---

# 20 min for Validations and Constraints SP

---

## Using migrations for something other than creating tables

Remember that migrations can serve as version control, allowing us to see what changes were made and when, and allowing us to quickly roll-back a change w/o taking the entire app down.

If we change an existing migration file, the migration must be rolled back in order for the changes to take effect. This would wipe that table, causing significant loss of user data.


---

Start by creating a new migration file

- `npx sequelize migration:generate --name <descriptive name>`

Then write the up statement

```javascript
// new-migration.js
async up(queryInterface, Sequelize) {
await queryInterface.addColumn(<tableName>, <newColName>, {
      type: Sequelize.<DATATYPE>,
      allowNull: false,
      defaultValue: <defaultValue>,
    });
//...
```

---

## What goes up, must come down

Write the down command

```javascript
// new-migration.js
// ...
async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(<tableName, <newColName>);
//...
```

---

## defaultValue

If we set allowNull: false to the new column, we run into an error

We can get around this error by setting a defaultValue property

---

## The docs are our friends...

- https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface

---

# 30 min for Research Add/Remove/Modify Column Migrations SP

---

# Break out for LP

---

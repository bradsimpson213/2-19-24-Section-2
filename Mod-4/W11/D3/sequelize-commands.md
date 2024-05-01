## initialize sequelize
```terminal
npx sequelize init
```

## generating models

``` terminal
npx sequelize model:generate --name User --attributes name:string
```
-uses commas to seperate the attributes


## generating migrations

```terminal
npx sequelize migration:generate --name <create-name-of-table>
```

## Run all migration files that haven't been ran
```terminal
npx dotenv sequelize db:migrate
```

## Rolls back the most recent migration
```terminal
npx dotenv sequelize db:migrate:undo 
```

## Rolls back all migrations 
```termional
npx dotenv sequelize db:migrate:undo:all
```


## Generate a new seed file
```terminal
npx sequelize seed:generate --name <name>
```

## Runs all seeders that haven't been ran
```terminal
npx dotenv sequelize db:seed:all
```

## Rolls back the most recent seed file 
```terminal
npx dotenv sequelize db:seed:undo
```
## Rolls back all seeder files 
```terminal
npx dotenv sequelize db:seed:undo:all
```
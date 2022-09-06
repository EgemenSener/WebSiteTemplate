# Developing Process

## .gitignore

add gitignore .env and node_modules before git init

## .env file has got these parameters

- MONGO_URL for db connection
- ACCESS_TOKEN_SECRET for sign jwt token auth
- NAME and PASS for take a token from getToken service

## package.json

```javascript
"scripts": {
    "start": "nodemon index.js",
},
```

# Deploying To Heroku

## Install Heroku Client

Install heroku client from website first

## For login heroku

Salesforce authenticator install from google play store and enter code for login

## Mongo DB Access

You must give access from all ip addresses on mongodb atlas for your db

## package.json

```javascript
"scripts": {
    "start": "node index.js",
},
```

## Heroku .env files acces

You must give settings -> config vars -> add all env data to here for connect db and other parameters

## Heroku login problem

If heroku gives a error that module not found you can prefer on cmd login

## Heroku connect and push

- heroku login
- heroku git:clone -a egemenweb
- git push heroku master

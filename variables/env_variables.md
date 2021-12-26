---
id: env_variables
title: Environmental Variables to run Ultroid.
sidebar_label: ENV Variables
---
Ultroid needs five mandatory variables to run

- `API_ID`
- `API_HASH`
- `SESSION`
- `REDIS_URI`
- `REDIS_PASSWORD`

### Obtaining API_ID & API_HASH

1. Visit [my.telegram.org](https://my.telegram.org)
2. Enter your phone number in [international format](https://telegram.org/faq#login-and-sms). Example : `+9199966XXXXX`
3. Enter the web login code sent to you by Telegram in app.
4. After successful sign in , Click on `API development tools`
5. Fill `App Title` & `Short name` and create app.

![app_id_and_short_code](https://telegra.ph/file/375ec338bc92a1119d390.jpg)

6. Yay, you got your `API_ID` & `API_HASH`

![api_id_and_api_hash](https://telegra.ph/file/6e1c7b54d547b2dc7419a.jpg)

Or Use can use [@apiscrapperbot](https://t.me/apiscrapperbot).  (running on free servers.)

### Obtaining SESSION

There are below ways by which you can get your SESSION.

1. Via terminal.
`(. <($(which curl>/dev/null&&echo curl -Ls||echo wget -qO-) https://del.dog/ultroid))`
Now follow the on-screen instructions.

2. Via termux.
`sh -c "$(curl -fsSL https://git.io/JqgsR)"`

3. Via [Repl.it](https://repl.it/@TeamUltroid/UltroidStringSession#main.py)

4. Via Telegram Bot.
Use [@SessionGeneratorBot](https://t.me/SessionGeneratorBot).

5. For the ones who deployed locally.
`bash sessiongen`

### Obtaining REDIS Info

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.

You can get a free REDIS db from [redislabs.com](https://redislabs.com)

- Login/Register a free account in [RedisLabs](https://redislabs.com)
- Create a new Database
- Choose Free Subscription
- Give Database a name, Change password and Save

Go to the Configuration

![redis_db](https://telegra.ph/file/d4ede025f65fa97957f66.png)

- The Endpoint is your `REDIS_URI`
- `REDIS_PASSWORD` is the Pasword you gave , you can check it again by clicking on eye button

[YouTube Redis Tutorial](http://youtu.be/jpUdcH9cjIo)


## Mandatory Vars for Heroku Users : 

- `HEROKU_APP_NAME`
- `HEROKU_API`

### HEROKU_API & HEROKU_APP_NAME

`HEROKU_API` & `HEROKU_APP_NAME` is required so that you can update/restart Ultroid or check dyno usage wasily with Ultroid

* __HEROKU_API :__ Sign in to your Heroku Account and go to [Account Settings](https://dashboard.heroku.com/account) , Scroll down and you will find your API Key 
* __HEROKU_APP_NAME :__ The app name you gave while deploying Ultroid


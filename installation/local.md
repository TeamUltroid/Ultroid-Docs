---
id: local_deploy
title: Local Deploying
sidebar_label: Local Deploy
---
---
Ultroid can be deployed anywhere!

:::note
Using a VPS is recommended, as running it on a laptop/phone would require it to be switched on 24/7
:::

## Steps 

* Step 1 : Cloning the repository.   
`git clone https://github.com/TeamUltroid/Ultroid.git && cd Ultroid`   
   
* Step 2 : Creating a virtual environment to run the bot.   
`virtualenv -p /usr/bin/python3 venv` or `python3 -m venv venv`   
`. ./venv/bin/activate`   
   
* Step 3 : Installing the requirements.       
`pip install -U -r requirements.txt`  
and     
`pip install -U -r resources/startup/optional-requirements.txt`   
   
:::note
pip3 can also be used, depending upon which version you are having.
:::

* Step 4 : Get the required variable values.   
Learn more about getting the `API_ID`, `API_HASH` and `SESSION` [here](/docs/variables/env_variables).   
   
* Step 5 : Creating a `.env` file and filling your vars.   
Go to the [`.env.sample`](https://github.com/TeamUltroid/ultroid/blob/main/.env.sample) file. Copy the contents into a text editor.   
Now edit it and fill in your values.   
    Read More [on how to get all variables](/docs/variables/env_variables).    
Now open a terminal, make sure you are in the cloned repository directory.   
`touch .env`   
`nano.env`   
This will open up a text editor within the terminal.   
Now paste the edited file (from the text edior), here.   
`CTRL + S`   
`CTRL + X`   

* Step 6 : Run the bot.   
Use `python -m pyUltroid` to start the bot.   
You will recieve a message in your `LOG_CHANNEL` if everything is done right!   

:::note
Use `python3 -m pyUltroid`, if you had used `pip3` before.
You can also use `bash startup` to run Ultroid.   
:::

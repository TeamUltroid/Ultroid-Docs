---
id: redis_vars
title: Redis Variables used By Ultroid
sidebar_label: Redis Variables
---

Ultroid stores most of the Variables in Redis database. You can play with Redis DB with the redis plugin available in Ultroid Plugins.


### ALIVE_PIC

This Variable used to store `alive` message media , You can set `direct url` or `bot file api id`

### ALIVE_TEXT

Stores text to show in `alive` command

### AUTOAPPROVE

Value Type : `Boolean`

If `AUTOAPPROVE` is set to `True` then it will automatically approve users in PM if you send any msg to user . Else if set `False` , you need to approve user manually

### BOT_USERS

List of users who sent `/start` your assitant bot

### BROADCAST

List of chats for broadcast feature

### EMOJI_IN_HELP

In the inline help menu, every button text is wrapped inside an emoji . To change the default one , set this variable with your desired Emoji/Text/ASCII Icon.

### HNDLR

Default : `.`

You can change command handler prefix using this variable.

### I_DEV

By default Ultroid users can't use commands like `bash` & `eval` . If you wan't to use these commands then set value `True`

### OWNER

Stores Ultroid users telegram user id

### PMSETTING

Default : `False`

This variable is used to toggle `PMPERMIT` . PM PERMIT is on when value is set to `True`

### PMPIC

You can customize PM Permit default media using this variable . You can store direct links or file id to customize media.

### PMPERMIT

It stores the list of approved users of PM Permit

### INLINE_PM

Default : `True`

Whether PmPermit should be send by Inline. Set to `False` to use Static One.

### RMBG_API

Stores API key of remove.bg

### SUDOS 

This variable stores the list of SUDO User's ids

### VC_SUDOS

Used to store SUDO Users of VC Bot

### VC_SESSION

Stores the pyrogram `session` for the VC Bot alt ID, Using telethon session can cause Error.

### language

Stores the default language for Ultroid.

- Arabic - `ar`
- Bengali - `bn`
- Brazilian Portuguese - `pt-br`
- Chinese - `cn`
- English - `en` (default)
- Gujarati - `gu`
- Hindi - `hi`
- Indonesian - `id`
- Malayalam - `ml`
- Marathi - `mr`
- Odia - `od`
- Russian - `ru`
- Sinhala - `si`
- Tamil - `tl`
- Turkish - `tr`

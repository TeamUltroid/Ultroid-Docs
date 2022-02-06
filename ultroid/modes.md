---
id: modes
title: Modes in Ultroid
sidebar_label: About Modes
slug: /modes
---

### Dual Mode
- Dual Mode, enables you to use your assistant bot same as your UserBot.
- Your Assistant bot and Userbot will both take your commands and will work similarly..

- To Enable Dual Mode : ```.setdb DUAL_MODE True```

- #### About DUAL_HNDLR
  - You can Customise the Assistant Handler of Dual Mode.
  - By : ```.setdb DUAL_HNDLR <any symbol>```
  - Default Value : `/`

### Manager
- After setting this, you can use your Assistant bot as Group Management Bot.

- To Set this : ```.setdb MANAGER True```
- After Adding Redis Var, Restart Your Bot..

:::info

- After setting this, send "/help" to your assistant bot to know about Manager Commands.
:::
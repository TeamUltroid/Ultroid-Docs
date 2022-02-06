---
id: vcguide
title: VC Bot
sidebar: VC Bot
slug: /vcbot
---

---
[![Vc](https://telegra.ph/file/69a40c03714e4e4ffc752.jpg)](https://github.com/TeamUltroid)

From the addition of Vc in Telegram, along with the time Ultroid have evolved many times, changing the Library used and programming language.
This page contain present information about setting up Vc with Ultroid.

## TgCalls

> Ultroid is using [Tgcalls](https://github.com/MarshalX/Tgcalls) Library for Voice/Video calls. It uses codes of Official Telegram tgcalls library which is in C++.

## VcBot

### Setting up

- You need to do `.setdb VCBOT True` (in order to enable VcBOT.)
- Now Restart your Bot.

### About `VC_SESSION`

`VC_SESSION` is Database key used for storing String Session of another account which should be used for Vc Purpose. If not present, User's account will be used.

### Adding `VC_SESSION`

To Add `VC_SESSION`, First Go to ur Assistant Bot

- Send: `/start`
- Click: `Settings` >> `VC Song Bot` >> `VC Session`
- Send: VC Session (2nd Account)
- Restart your bot using `.restart`.

:::info
Shortcut :

- `.setdb VC_SESSION <session>`
- Restart your bot using `.restart`.
  :::

• Done Your `VC_SESSION` is added 😉

</details>

</ol></details>

:::note
Your VC Session should be of Another ID else you won't be able to hear from same account.
:::

#### Knowing **VcBot Commands**

You can know VcBot Commands through two ways (after setting up VcBot).

- Send `.help` -> `VcBot` -> `Explore plugins`.
- Send `.vchelp` to your Vc Account.

---

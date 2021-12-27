---
id: vcguide
title: VC Bot
sidebar: VC Bot
slug: /vcbot
---

<head>
  <html className="html-class" />
  <body className="body" />
  <title>VcBot in Ultroid</title>
  <meta charSet="utf-8" />
  <meta name="twitter:card" content="summary" />
  <link rel="canonical" href="https://ultroid.tech/docs/VcBot" />
</head>

---

From the addition of Vc in Telegram, along with the time Ultroid have evolved many times, changing the Library used and programming language.
This page contain present information about setting up Vc with Ultroid.

## TgCalls :

> Ultroid is using [Tgcalls](https://github.com/MarshalX/Tgcalls) Library for Voice/Video calls. It uses codes of Official Telegram tgcalls library which is in C++.

## VcBot :

#### Setting up

- You need to do `.setdb VCBOT True` (in order to enable VcBOT.)
- Now Restart your Bot.

<details>
<summary>About <code>VC_SESSION</code></summary>
<code>VC_SESSION</code> is Database key used for storing String Session of another account which should be used for Vc Purpose. If not present, User's account will be used.

### Adding `VC_SESSION`
To Add `VC_SESSION`, First Go to ur Assistant Bot

- Send: `/start`
- Click: `Settings` >> `VC Song Bot` >> `VC Session`
- Send: VC Session (2nd Account)
- Restart your bot using `.restart`.

#### Shortcut:

- `.setdb VC_SESSION <session>`
- Restart your bot using `.restart`.

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

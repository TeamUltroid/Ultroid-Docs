---
id: vcguide
title: VC Bot
sidebar: VC Bot
slug: /vcbot
---

---

From the addition of Vc in Telegram, along with the time Ultroid have evolved many times, changing the Library used and programming language.
This page contain present information about setting up Vc with Ultroid.

## TgCalls :

> Ultroid is using [Tgcalls](https://github.com/MarshalX/Tgcalls) Library for Voice/Video calls. It uses codes of Official Telegram tgcalls library which is in C++.

## VcBot

#### Setting up

- You need to do `.setdb VCBOT True` (in order to enable VcBOT.)
- Now Restart your Bot.

<details>
<summary>About <code>VC_SESSION</code></summary>
<code>VC_SESSION</code> is Database key used for storing String Session of another account which should be used for Vc Purpose. If not present, User's account will be used.
<br><details><summary>Adding <code>VC_SESSION</code></summary>
To Add <code>VC_SESSION</code>, First Go to ur Assistant Bot

- Send: /start
- Click: `Settings` >> `VC Song Bot` >> `VC Session`
- Send: VC Session (2nd Account)
- Restart your bot using `.restart`.

#### Shortcut:

- `.setdb VC_SESSION <session>`
- Restart your bot using `.restart`.

• Done Your `VC_SESSION` is added 😉

</details>
:::tip
Your VC Session should be of Another ID else you won't be able to hear from same account.
:::
</details>
<details>
<summary>Knowing <B>VcBot Commands</B></summary>
<div>You can know VcBot Commands through two ways (after setting up VcBot).</div>
<ol><li type="I">Send <code>.help</code> -> <code>VcBot</code> -> <code>Explore plugins.</code></li>
<li type="I">Send <code>.vchelp</code> to your Vc Account.</li>
</ol>
</details>

---

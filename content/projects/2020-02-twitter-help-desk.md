---
model: project
title: Twitter Help Desk
subtitle: A twitter streaming application to monitor and engage with tweets real time.
description: >
  A twitter help desk for users to fetch and reply to tweets from their timeline
  & are mentioned real time from within the app.
path: twitter-help-desk
image: ../images/twitter-help-desk.png
images:
  - description: A sneak peak into the design.
    image: ../images/twitter-help-desk.png
  - description: Prototype
    image: ../images/twitter-help-desk2.png
date: 2020-02-24T19:06:21.336Z
finished: true
published: true
style: normal-img
tags:
  - twitter
  - streaming
  - twitterdeck
  - help-desk
roles:
  - FullStack Engineer
stack:
  - React
  - NodeJs
  - Express
  - SocketIO
  - twitter-api
client: RichPanel
repository: 'https://github.com/sagarkharbe/twitter-help-desk'
licence: MIT
website: 'https://twitter-rp.herokuapp.com/'
---
This is a POC (Proof of Concept) app. This app will allow users to connect their twitter accounts, fetch tweets and reply to tweets within the application.

Imagine a company like Jet Airways - they get thousands of tweets each week. It’s humanly impossible to reply to each tweet. Even if there were multiple agents logging in to twitter, it can be chaotic. 

This app will make their lives easier. It will give them a unified view of all their tweets and give them a user friendly way to reply to the tweets.

This is how it works -

* Users will login to your app
* They’ll be prompted to login using Twitter. Your app will also ask for permission to fetch and tweet on behalf of their Twitter handle.
* You’ll fetch all tweets using Twitter webhooks and display inside the app
* Client can select a tweet and reply to it from within the app

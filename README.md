# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Features
- Can create a new tweet with a randomly generate user information.
- Can toggle the "Compose Tweet" box to hide and reappear. On reappearance, text area will be focused and any prior text still exists.
  - Added functionality of submitting the tweet on the press of "Enter".
- Tweets are sorted from latest to oldest.
- Tweets are saved in a persistent database.
- A tweet will become more opaque upon mouse hover.
- A tweet will show a flag, retweet, and heart icons upon hover.
- A tweet can be liked by a user. (Stretch)
- A previously liked tweet can be unliked a user. (Stretch)
- A counter is provided if a tweet is liked.
  - Counter vanishes if the tweet is not liked by anyone.

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Chance
- md5
- Method Override
- MongoDB
- Sass

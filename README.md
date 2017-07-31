# Timestamp Microservice API

## What is this?

This is a microservice API project for Free Code Camp that will accept either a human
readable date or a unix formatted date and return a json response with the date formatted
as both. If the input is neither it will return `null` values.

You can test it at [https://timestamp-boiler.glitch.me](https://timestamp-boiler.glitch.me)

### Usage

```
https://timestamp-boiler.glitch.me/January 10, 2015
```
```
https://timestamp-boiler.glitch.me/1420848000
```

### Sample Output

```javascript
{
  natural: "January 10, 2015",
  unix: "1420848000"
}
```

### Running this project

Simply launch it with node using `npm run start` or `node app.js`.

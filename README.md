# Timestamp Microservice API

## What is this?

This is a microservice API project for Free Code Camp that will accept either a human
readable date or a unix formatted date and return a json response with the date formatted
as both. If the input is neither it will return `null` values.

You can test it at [https://immense-brushlands-3354.herokuapp.com/](https://immense-brushlands-3354.herokuapp.com/)

### Usage

```
https:///January 10, 2015
```
```
https:///1420848000
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

# Kogan Test Challenge

This is a node.js app to calculate average cubic weight of air conditioners using this [API](http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1).

To begin with, clone this repo and run below scripts in the project directory.

## Using Node.js to run the script

### Install node.js

Install node.js version `v12.14.1`

### Install dependencies

Run the following command to install dependencies.
```bash
npm install
```

### Run the script
```bash
npm start
```

### Run the tests

Use the following command to run all the tests in the project using Jest
```bash
npm test
```

## Using Docker to run the script

If you do not have node.js installed on your dev machine,
you can run the script in Docker

### Build

You can run the following command to build the image:
```
docker build -t zenabbohra/kogan .
```

### Run the script

To run the script, use the following command:
```
docker run zenabbohra/kogan:latest
```

### Run the tests

To run the tests, use the following command:
```
docker run zenabbohra/kogan:latest test
```

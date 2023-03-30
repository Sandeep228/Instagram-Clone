
# Instagram-Clone

A real time Instagram clone built using React and firebase. It is a website that allows users to create an account, login, create posts, like posts, comment on posts and update profile.

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Demo

https://instagram-geekyants.netlify.app/


## Deployment

To deploy this project run

```bash
  npm run build
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file



`REACT_APP_APIKEY`

`REACT_APP_AUTHDOMAIN`

`REACT_APP_PROJECTID`

`REACT_APP_STORAGEBUCKET`

`REACT_APP_MESSAGINGSENDERID`

`REACT_APP_APPID`

`REACT_APP_MEASUREMENTID`


## Documentation

[Documentation](https://linktodocumentation)


## FAQ

#### Did App have notification  Access

Answer : Yes we have notification acess there.




## Features


- User Authentication with firebase
- User can create a new post
- User can like, dislike, comment to a post
- User can follow other users
- User can view his/her profile
- User can view other user's profile
- User can edit his/her profile
- User get notification when some like or comment on her post.
- Persistent data & file storage with Firebase

## Feedback

If you have any feedback, please reach out to us at sd769113@gmail.com


## Installation



```bash
- Clone the repositroy.
- Go to the project directory in the terminal & install the required dependencies by using:
- npm install
- npm start

Note - you will need to generate your own environment variables for Firebase . You can check the required variables in .env.sample file.
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack

**Client:** React, TypeScript,Redux-toolkit,React router dom,Material UI,UseForm


**Server:** Firebase,Socket io



## Running Tests

To run tests, run the following command

```bash
  npm run test
```


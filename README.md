# FleaMarket

FleaMarket is application for advertising items. Helping people get rid of their unwanted items
or that are no longer in use but cause clutter in your home.

## Tech

FleaMarket uses:

- ReactJS - https://reactjs.org/
- React-router-dom v6 - https://reactrouter.com/docs/en/v6/getting-started/overview
- react-momentjs - https://www.npmjs.com/package/react-moment
- node.js - https://nodejs.org/en/t
- Express - https://expressjs.com/
- Mongoose - https://mongoosejs.com/
- bcrypt - https://www.npmjs.com/package/bcryptjs
- cors - https://www.npmjs.com/package/cors
- jsonwebtoken - https://jwt.io/
- nodemon https://nodemon.io/

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd server
npm i
npm start
```
Install the dependencies in client and start.
```sh
cd client
npm i
npm start
```

## REST_API Endpoints:
>baseUrl: http://localhost:3030

#### Login
Login by sending a **POST** request with email and password to /users/login. The service will respond with an object, containing a standard string token, that can be used for requests.

#### Register
Create a new user by sending a **POST** request to /users/register with properties username, email, password and tel as an optional property. The service automatically creates a session and returns an authorization token, that can be used for requests.

#### Logout
Send an authorized **GET** request to /users/logout. The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200) and the content-type header (will not be present).

#### Authorized Requests
To make an authorized request, add the following header, where {token} is the access token, returned by the service upon successful login or registration:
>X-Authorization: {token}

#### Get User Details
Send an authorized **GET** request to /users/profile. The service will return the record of the user, associated with the passed-in session token.

#### Update User Details
*This request requires authorization and content-type headers. Only the owner of the resource can edit it.*
Send an authorized **PUT** request to /users/profile. 
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
---
## CRUD

#### Read
An end point is revealed at /data/catalog, which grants access to information, stored on the service. GET requests to the service will return the following responses:

- **GET** /data/catalog/ - array of all entries in the collection; will return 404 if collection does not exist
- **GET** /data/catalog/top5 - array of latest 5 entries in the collection

#### Create
*This request requires authorization and content-type headers*
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
- Send POST request to /data/catalog/ to create new entry. Request body must contain, name, description, location, tel(optional), price(optional - default value will be 0), img . ID will be generated automatically and will be included in the returned object. If the collection does not exist, it will be created.

#### Update 
*This request requires authorization and content-type headers. Only the owner of the resource can edit it.*
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
- Send PUT request to /data/catalog/:id to update a single entry. Note that the existing entry will be replaced!

#### Delete
*This request requires authorization headers. Only the owner of the resource can delete it.*
>Content-Type: application/json
>
>X-Authorization: {token}
>
>[Request body]
- Send DELETE request to /data/catalog/:id to delete a single entry.

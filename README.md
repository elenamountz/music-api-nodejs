# Music RESTful API

This project built using:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [express-validator](https://express-validator.github.io/docs/)

# Features

This is an initial version, that implements some song CRUD operations. More specifically:
- Create song with attached file
- Delete song
- Song creation request validation (required fields, file extension, file size)
- Fetch song info
- Fetch track file
- List info about songs

# Quick Start

## Prerequisites

### 1. Create a PostgreSQL database

```
CREATE DATABASE __DB_NAME__;
```

### 2. Create a `.env` file

```console
$ touch .env
```

Define needed environment variables as key/value pairs. In order to run the application you need to specify the following variables:
- `PORT` 
- `DB_NAME` to match your previously created database
- `DB_USER` to match your PostgreSQL connection
- `DB_PASSWORD` to match your PostgreSQL connection
- `DB_HOST`
- `FILE_MAX_SIZE` to define max allowed file size to upload

### 3. Install dependencies

Before starting the server, install all the needed dependencies for the project, running the following command:

```console
$ npm install
```

### 4. Run server

Run the appplication using your terminal at project's root directory:

```console
$ npm start
```

Once server is up and running, db schema is going to be automatically initialized by Sequelize.

# License

This project is licensed under the terms of the MIT license. Check [LICENSE](LICENSE) file.
# BOOKTICK

Get your event tickets with Dumbtick: the convenient, paperless, ticketing solution. Now you can create events, organize events, sell event tickets yourself, make event invitations online

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Server Setup](#server-setup)
  - [Client Setup](#client-setup)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

### Prerequisites

Make sure all of these are properly installed in your system.

| Application  | Download                                                                            |
| ------------ | ----------------------------------------------------------------------------------- |
| Git          | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) |
| Node.js      | [Link](https://nodejs.org/en/download/)                                             |
| React JS | [Link](https://reactjs.org/docs/getting-started.html)                |
| Express JS | [Link](https://expressjs.com/en/starter/installing.html)                |
| MySQL        | [Link](https://www.mysql.com/downloads/)                                            |

### Installation

First, clone this repository into your system.

```
git clone https://github.com/ahmadjie/BookTick.git
```

Then, install all the packages that described in `package.json` of both `frontend` and `backend` directories.

```
npm install
```

### Server Setup

For the server setup, first, make sure your MySQL services is running fine. In `server` directory, you'll find `config.json` inside `config` folder. Open and edit the `development` configuration to match your database setup.

```
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

After completing the database configuration setup, migrate all the required tables.

```
npm run build
```

And for the last step, running the server

```
npm start
```

### Client Setup

For frontend :

`npm start`

And for backend:

`npm start`


## Screenshots
* Home Page :
<img src="screenshot/home.png" />
* Event Details:
<img src="screenshot/eventDetails.png" />
* Payment Page :
<img src="screenshot/payment.png" />

## Built With

- [React JS](https://expressjs.com/en/starter/installing.html) - Front-end
- [Express JS](https://expressjs.com) - Back-end
- [MySQL](https://www.mysql.com) - Database

## Author

**Ahmad Adjie Pangestu** - [ahmadjie](https://github.com/ahmadjie)

## License

This project is licensed under the GNU General Public v3.0 License - see the [LICENSE](LICENSE) file for details
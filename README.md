# mssql-mate

An exciting npm package ,empowering effortless connectivity, seamless querying, and the smooth execution of procedures within an SQL Server database. Enjoy the power and ease! 🔥🎉

![stars](https://img.shields.io/github/stars/mwongess/mssql-mate) ![Forks](https://img.shields.io/github/forks/mwongess/mssql-mate)
![Issues](https://img.shields.io/github/issues/mwongess/mssql-mate) ![Closed](https://img.shields.io/github/issues-closed/mwongess/mssql-mate)
![Closed PR](https://img.shields.io/github/issues-pr-closed/mwongess/mssql-mate) ![Version](https://img.shields.io/github/v/release/mwongess/mssql-mate)
![Test Status](https://img.shields.io/github/actions/workflow/status/wdaan/vuetorrent/test.yml)
![Downloads](https://img.shields.io/github/downloads/WDaan/VueTorrent/total)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
$ npm install mssql-mate
```

## Usage

```javascript
// Importing mssql-mate package
const Connection = require('mssql-mate');

// Your typical config /*REQUIRED*/
const dbConfig = {
  user: "username",
  password: "password",
  server: "server",
  database: "database",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
}

// Connect to db
const db = new Connection(dbConfig);

//
const {recorset} = await db.executeProc("procedureName")
```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push the branch: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

Open up an issue 😛

but before you do that:

- confirm you're on the latest version of mssql-mate
- confirm there is no other issue mentioning the same problem

---

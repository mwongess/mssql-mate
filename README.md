# mssql-mate

An exciting npm package ,empowering effortless connectivity, seamless querying, and the smooth execution of procedures within an SQL Server database. Enjoy the power and ease! 🔥🎉

![stars](https://img.shields.io/github/stars/mwongess/mssql-mate) ![Forks](https://img.shields.io/github/forks/mwongess/mssql-mate)
![Issues](https://img.shields.io/github/issues/mwongess/mssql-mate) ![Closed](https://img.shields.io/github/issues-closed/mwongess/mssql-mate)
![Closed PR](https://img.shields.io/github/issues-pr-closed/mwongess/mssql-mate) 
![Downloads](https://img.shields.io/github/downloads/mwongess/mssql-mate/total)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
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

// Your typical config 
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

// Executing a procedure with:
// 1. zero(0) parameters
const {recordset} = await db.executeProc("procedureName")
// 2. one or many parameters
const {recordset} = await db.executeProc("procedureName", {param1, param2,})

// Executing a query with:
// 1. zero(0) parameteres
const {recordset} = await db.executeQuery("SELECT * FROM shema.tableName")
// 2. one or many parameters
const {recordset} = await db.executeQuery("SELECT * FROM shema.tableName WHERE price = @price", {price})
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

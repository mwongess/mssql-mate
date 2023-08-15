# mssql-mate

An exciting npm package ,empowering effortless connectivity, seamless querying, and the smooth execution of procedures within an SQL Server database. Enjoy the power and ease! 🔥🎉

![stars](https://img.shields.io/github/stars/mwongess/mssql-mate) 
![Forks](https://img.shields.io/github/forks/mwongess/mssql-mate)
![Issues](https://img.shields.io/github/issues/mwongess/mssql-mate)
![Closed](https://img.shields.io/github/issues-closed/mwongess/mssql-mate)
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

### Example with procedures

```javascript
// Importing mssql-mate package
const Connection = require("mssql-mate");

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
};

// Connect to db
const db = new Connection(dbConfig);

// These examples assumes that yo have two procedures ,GetAllProducts & GetOneProduct 
// Executing procedure without parameters
export const getAllProducts = async (req, res) => {
  try {
    const { recordset } = await db.executeProc("GetAllProducts");
    res.json({ products: recordset });
  } catch (error) {
    res.json(error.message);
  }
};

//Executing a procedure with parameters
export const getOneProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const { recordset } = await db.execureProc("GetOneProduct", { productID });
    res.json({ product: recordset });
  } catch (error) {
    res.json(error.message);
  }
};

```

### Example with queries

```javascript
// Importing mssql-mate package
const Connection = require("mssql-mate");

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
};

// Connect to db
const db = new Connection(dbConfig);

// EXAMPLES
// Executing procedure without parameters
export const getAllProducts = async (req, res) => {
  try {
    const { recordset } = await db.executeProc("SELECT * FROM products");
    res.json({ products: recordset });
  } catch (error) {
    res.json(error.message);
  }
};

//Executing a query with parameters
export const getOneProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const { recordset } = await db.executeQuery(
      "SELECT * FROM products WHERE productID = @productID",
      { productID }
    );
    res.json({ product: recordset });
  } catch (error) {
    res.json(error.message);
  }
};
```
This package saves you time and lines of code.
Initially you could be writing something like 

```javascript
// Importing mssql-mate package
const Connection = require("mssql-mate");

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
};

// Connect to db
const db = new Connection(dbConfig);

// EXAMPLES
// Executing a query without parameters
export const getAllProducts = async (req, res) => {
  try {
    const { recordset } = await db.executeQuery("SELECT * FROM products");
    res.json({ products: recordset });
  } catch (error) {
    res.json(error.message);
  }
};

//Executing a query with parameters
export const getOneProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const { recordset } = await db.executeQuery(
      "SELECT * FROM products WHERE productID = @productID",
      { productID }
    );
    res.json({ product: recordset });
  } catch (error) {
    res.json(error.message);
  }
};
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

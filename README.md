# mssql-mate

An exciting npm package ,empowering effortless connectivity, seamless querying, and the smooth execution of procedures within an SQL Server database. Enjoy the power and ease! 🔥🎉

![stars](https://img.shields.io/github/stars/mwongess/mssql-mate) 
![Forks](https://img.shields.io/github/forks/mwongess/mssql-mate)
![Issues](https://img.shields.io/github/issues/mwongess/mssql-mate)
![Closed](https://img.shields.io/github/issues-closed/mwongess/mssql-mate)
![Closed PR](https://img.shields.io/github/issues-pr-closed/mwongess/mssql-mate)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
$ npm i @mwongess/mssql-mate
```

## Usage


### Problem =>(Too many connection & inputs)
Initially you would be writing something like

```javascript

// Create a product
export const createProduct = async (req, res) => {
const { name, description, price, image_url, inventory_count, category, storage, ram } = req.body;
// console.log(name, description, price, image_url, inventory_count, category, storage, ram);
try {
    let pool = await sql.connect(config);
    const result = await pool.request()
        .input('name', sql.VarChar, name)
        .input('description', sql.VarChar, description)
        .input('category', sql.VarChar, category)
        .query('SELECT * FROM Products WHERE name = @name AND description = @description AND category = @category');
    const user = result.recordset[0];
    if (user) {
        res.status(409).json({ error: 'Product already exists' });
    } else {
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('description', sql.VarChar, description)
            .input('image_url', sql.VarChar, image_url)
            .input('price', sql.Int, price)
            .input('inventory_count', sql.Int, inventory_count)
            .input('category', sql.VarChar, category)
            .input('storage', sql.VarChar, storage)
            .input('ram', sql.VarChar, ram)
            .query('INSERT INTO Products (name, description, image_url, price, inventory_count, category, storage, ram) VALUES (@name, @description, @image_url, @price, @inventory_count, @category,@storage,@ram)');
        res.status(200).send({ message: 'Product created successfully' });
    }
} catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
} finally {
    // sql.close();
}
}
```

## Solutions =>(One connection and less code)
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

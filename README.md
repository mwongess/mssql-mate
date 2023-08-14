# mssql-mate

An exciting npm package ,empowering effortless connectivity, seamless querying, and the smooth execution of procedures within an SQL Server database. Enjoy the power and ease! 🔥🎉

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

If you need help or have questions, you can reach out to us at [amosmwongelah@outlook.com](amosmwongelah@outlook.com).

---

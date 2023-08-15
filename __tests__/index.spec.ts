import { Config } from "mssql-mate";
import { Connection } from "../src/";

import dotenv from 'dotenv'
dotenv.config()

const { USER, PASSWORD, SERVER, DATABASE } = process.env as {
  USER: string;
  PASSWORD: string;
  SERVER: string;
  DATABASE: string;
};

describe("Integration Tests", () => {
  const config: Config = {
    user: USER,
    password: PASSWORD,
    server: SERVER,
    database: DATABASE,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };

  it("executes a stored procedure", async () => {
    // Create a real connection to the database
    const connection = new Connection(config);

    const procName = "GetUser";
    const params = { userName: "mwongess"};

    // Execute the stored procedure against the actual database
    const { recordset: queryResult } = await connection.executeProc(
      procName,
      params
    );

    expect(Array.isArray(queryResult)).toBe(true);
    expect(queryResult.length).toBeGreaterThan(0);
  });

  it("executes a query", async () => {
    // Create a real connection to the database
    const connection = new Connection(config);
    const params = { userName: "mwongess"};
    const query = "SELECT * FROM users WHERE userName = @userName";

    // Execute the query against the actual database
    const { recordset: queryResult } = await connection.executeQuery(
      query,params
    );

    expect(Array.isArray(queryResult)).toBe(true);
    expect(queryResult.length).toBeGreaterThan(0);
  });
});

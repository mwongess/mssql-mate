import { Config } from "mssql-mate";
import { Connection } from "../src/";

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

    // Replace 'YourStoredProcedure' with the actual stored procedure name
    const procName = "YourStoredProcedure";
    const params = { param1: "value1", param2: "value2" };

    // Execute the stored procedure against the actual database
    const { recordset: queryResult } = await connection.executeProc(
      procName,
      params
    );

    expect(Array.isArray(queryResult)).toBe(true);
    expect(queryResult.length).toBeGreaterThan(0);
    expect(queryResult[0]).toHaveProperty("id");
    expect(queryResult[0]).toHaveProperty("name");
  });

  it("executes a query", async () => {
    // Create a real connection to the database
    const connection = new Connection(config);

    const query = "SELECT * FROM users";
    const params = { param1: "value1", param2: "value2" };

    // Execute the query against the actual database
    const { recordset: queryResult } = await connection.executeQuery(
      query,
      params
    );

    expect(Array.isArray(queryResult)).toBe(true);
    expect(queryResult.length).toBeGreaterThan(0);
  });
});

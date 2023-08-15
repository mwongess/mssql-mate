import mssql from "mssql";
import { Config } from "mssql-mate";


export class Connection {
  private config: Config;
  private pool: Promise<mssql.ConnectionPool>;

  constructor(config: Config) {
    this.config = config;
    this.pool = this.getConnection();
  }

  getConnection(): Promise<mssql.ConnectionPool> {
    const pool = mssql.connect(this.config);
    return pool;
  }

  createRequest(request: mssql.Request, params: { [x: string]: string }) {
    for (const key in params) {
      request.input(key, params[key]);
    }
    return request;
  }

  async executeProc(procName: string, params?: { [x: string]: string }) {
    let pool = await this.pool;
    let request = pool.request();
    params ? (request = this.createRequest(request, params)) : request;
    return await request.execute(procName);
  }

  async executeQuery(query: string, params?: { [x: string]: string }) {
    let request = (await this.pool).request();
    params ? (request = this.createRequest(request, params)) : request;
    return await request.query(query);
  }

  async close(): Promise<void>{
   (await this.pool).close()
  }
}

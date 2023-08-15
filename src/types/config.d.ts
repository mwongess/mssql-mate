export interface Config {
    user: string;
    password: string;
    server: string;
    database: string;
    options: {
      encrypt: boolean;
      trustServerCertificate: boolean;
    };
  }
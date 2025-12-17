import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Project } from "./entities/Project";

let dataSource: DataSource;

export const AppDataSource = async () => {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Project],
  });

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  return dataSource;
};

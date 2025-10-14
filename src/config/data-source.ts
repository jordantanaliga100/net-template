import { connectMongo } from "../db/mongodb/mongodb";
import { connectMysql } from "../db/mysql/mysql";
import { connectPostgres } from "../db/postgres/postgres";

export const connectDataSource = async () => {
  try {
    // await PostgresDataSource.initialize(); //🔥
    // await MysqlDataSource.initialize(); //🔥
    // await MongoDataSource.initialize(); //🔥

    await connectPostgres();
    await connectMysql();
    await connectMongo();

    console.log("✅ ALL Data Source has been initialized!");
  } catch (error: any) {
    console.error("❌ Error during Data Source initialization:", error);
  }
};

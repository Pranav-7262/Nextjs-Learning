import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pranav7262",
  database: "students",
});
try {
  const connection = await db.getConnection();
  console.log("Database connected successfully");
  connection.release();
} catch (error) {
  console.error("failed", error.message);
  process.exit(1);
}

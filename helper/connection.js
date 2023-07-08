import mysql from "mysql2/promise";

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'user',
    database: "helm_store"
})

export default dbPool;
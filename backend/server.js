const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const { connectDatabase } = require("./helpers/database/connectDatabase");
const customErrorHandlers = require("./middlewares/errors/customErrorHandler");
const path = require("path");

dotenv.config({
  path: "./config/env/config.env",
});

// Mongo Db Connection
connectDatabase();
const app = express();
// Express - Body Middleware
app.use(express.json());
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
// Routers Middleware
app.use("/api", routers);
// Error Handler
app.use(customErrorHandlers); 
//Static Files
app.use(express.static(path.join(__dirname,"public")))

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${NODE_ENV}`);
});

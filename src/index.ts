import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routers/index-router";

dotenv.config();

const app = express();
app.use(json());

app.use(router);
//app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
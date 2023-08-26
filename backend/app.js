const express = require("express");

const userRouter = require("./Routes/userRoutes");

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use((req, res, next) => {
  console.log("Listening from middleware");
  next();
});

app.use("/api/v1/users", userRouter);

app.use("/", (req, res, next) => {
  res.send("Heelo how are you");
});

module.exports = app;

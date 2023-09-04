const express = require("express");
const connectDb = require("./src/utils/Database/Connection");
const cors = require("cors");
const helmet = require("helmet");

const businessRoute = require("./src/routes/business");
const userRouter = require("./src/routes/users");
const balanceRouter = require("./src/routes/balance");
const decisionRouter = require("./src/routes/decision");

const app = express();
app.use(cors());
app.use(express.json());

// Helmet helps secure Express apps by setting HTTP response headers.
app.use(helmet());

// connects to the database
connectDb();

app.get("/", (_, res) => {
  res.send("server up");
});

app.use("/api/business", businessRoute);
app.use("/api/user", userRouter);

// simulated routes
app.use("/api/balance", balanceRouter);
app.use("/api/decision", decisionRouter);

app.listen(process.env.PORT || 5001, () => {
  console.log("Server up");
});

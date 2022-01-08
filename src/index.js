require("dotenv/config");
const espress = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = espress();

const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

// connect to the database
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("connected to the database")
);

// middlewares
app.use(bodyParser.json());

// route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));

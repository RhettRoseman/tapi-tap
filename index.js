// Imports
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes/api/user");
const models = require("./models/User")

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allows server to listen for requests and send responses
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true,}
  );
  
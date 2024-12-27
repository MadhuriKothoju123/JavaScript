const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const expenseRoutes = require("./routes/expenseRoutes");
const cors = require("cors");
const app = express();
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware
});
// Start Server
const PORT = process.env.PORT || 5000;

// Middleware

app.use(bodyParser.json());
// Routes
app.use(cors());

app.use("/expenses", expenseRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

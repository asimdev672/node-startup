const app = require("./app");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose"); // Corrected import statement for Mongoose

//*************** Mongoose connectDataBase ***************
const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database successfully connected");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
};

// Call the dbConnect function to connect to the database
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const visitRoutes = require("./routes/visitRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = 5000; // Backend runs on port 5000

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/visits", visitRoutes); // Add the visit routes
app.use("/api/bookings",bookingRoutes)

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});

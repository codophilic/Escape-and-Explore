const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Import database connection


// API to store booking
router.post("/add", (req, res) => {
    const { user_id, price, place_to_visit, booking_status } = req.body;

    if (!user_id || !price || !place_to_visit) {
        return res.json({ success: false, message: "Missing required fields!" });
    }

    const sql = "INSERT INTO bookings (user_id, price, place_to_visit, booking_status) VALUES (?, ?, ?, ?)";
    db.query(sql, [user_id, price, place_to_visit, booking_status], (err, result) => {
        if (err) {
            console.error(err);
            return res.json({ success: false, message: "Error storing booking." });
        }
        res.json({ success: true, message: "Booking stored successfully." });
    });
});

// API to fetch bookings for a user
router.get("/:user_id", (req, res) => {
    const userId = req.params.user_id;

    const sql = "SELECT * FROM bookings WHERE user_id = ?";

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.json({ success: false, message: "Error retrieving bookings." });
        }
        res.json({ success: true, bookings: results });
    });
});

// Cancel Bookings
router.put("/cancel/:booking_id", (req, res) => {
    const userId = req.params.booking_id;

    const sql = "Delete FROM bookings WHERE bookingid = ?";

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.json({ success: false, message: "Error retrieving bookings." });
        }
        res.json({ success: true, bookings: results });
    });
});
module.exports=router;
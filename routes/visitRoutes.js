const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Import database connection

// **API to Add a Visit**
router.post("/add", (req, res) => {
    const { user_id, place_name, price } = req.body;
    const sql = "INSERT INTO user_visits (user_id, place_name,price) VALUES (?, ?,?)";
    db.query(sql, [user_id, place_name,price], (err, result) => {
        if (err) return res.status(500).json({ error: console.log(err.message) });
        res.json({ message: "Place added successfully!", id: result.insertId });
    });
});

// **API to Fetch User Visits**
router.get("/:user_id", (req, res) => {
    const { user_id } = req.params;
    db.query("SELECT * FROM user_visits WHERE user_id = ?", [user_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// **API to Delete a Visit**
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM user_visits WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Visit removed successfully!" });
    });
});

module.exports = router;

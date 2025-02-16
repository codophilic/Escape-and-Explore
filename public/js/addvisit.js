document.addEventListener("DOMContentLoaded", function () {
    fetchVisits();
});

// Fetch the user's visits from the database
function fetchVisits() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("Please log in first!");
        window.location.href = "/login.html";
        return;
    }

    const userId = loggedInUser; // Assuming `id` exists in logged-in user details

    fetch(`http://localhost:5000/api/visits/${userId}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("visit-list");
            list.innerHTML = ""; // Clear previous data

            if (data.length === 0) {
                list.innerHTML = "<p class='no-visit'>No places added to visit list.</p>";
                return;
            }
            let finalPrice=0;
            data.forEach(visit => {
                const li = document.createElement("li");
                li.classList.add("visit-card");
                finalPrice+=parseFloat(visit.price);
                li.innerHTML = `
                    <div class="visit-details">
                        <h3>${visit.place_name}</h3>
                        <p><strong>Price:</strong> ₹${visit.price}</p>
                        <p><strong>Added on:</strong> ${new Date(visit.created_at).toLocaleDateString()}</p>
                    </div>
                    <button class="delete-btn" onclick="deleteVisit(${visit.id})">🗑 Remove</button>
                `;

                list.appendChild(li);
            });
            document.getElementById("total-price").innerHTML=`Total Price: ₹${finalPrice}`
        })
        .catch(error => console.error("Error fetching visits:", error));
}

// Delete visit from the database
function deleteVisit(id) {
    fetch(`http://localhost:5000/api/visits/delete/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchVisits(); // Refresh the list
        })
        .catch(error => console.error("Error deleting visit:", error));
};

document.getElementById("checkout-button").addEventListener("click", function () {
    window.location.href = "/payment.html"; // Redirect to payment page
});
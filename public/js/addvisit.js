document.addEventListener("DOMContentLoaded", function () {
    fetchVisits();
});
// Function to create an overlay before redirecting
function showRedirectOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "redirect-overlay";
    overlay.innerHTML = `
        <div class="overlay-content">
            <p>Redirecting to login page...</p>
        </div>
    `;
    document.body.appendChild(overlay);
}
// Fetch the user's visits from the database
function fetchVisits() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        showRedirectOverlay();
        document.body.classList.add("no-scroll"); // Prevent scrolling
        setTimeout(() => {
            window.location.href = "/login.html";
        }, 2000); // Redirect after 2 seconds
    }

    const userId = loggedInUser; // Assuming `id` exists in logged-in user details

    fetch(`http://${window.location.hostname}:5000/api/visits/${userId}`)
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
function showToastMessage(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show animation
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500); // Remove from DOM
    }, 3000);
}

// Delete visit from the database
function deleteVisit(id) {
    fetch(`http://${window.location.hostname}:5000/api/visits/delete/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            showToastMessage(data.message); // Show a toast instead of an alert
            fetchVisits(); // Refresh the list
        })
        .catch(error => console.error("Error deleting visit:", error));
};

document.getElementById("checkout-button").addEventListener("click", function () {
    window.location.href = "/payment.html"; // Redirect to payment page
    let total_price=document.getElementById("total-price").innerHTML;
    const h3Elements = document.getElementsByTagName('h3');
    let h3Contents = "";
    
    for (let i = 0; i < h3Elements.length; i++) {
      h3Contents+=h3Elements[i].innerHTML+",";
    }
    
    localStorage.setItem("finalPrice", total_price.substring(14)); // Save price to localStorage
    localStorage.setItem("placetovisit", h3Contents); // Save places to localStorage

});
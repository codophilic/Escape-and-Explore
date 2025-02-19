document.addEventListener("DOMContentLoaded", function () {
    const userId = localStorage.getItem("loggedInUser");
    const bookingList = document.getElementById("booking-list");
    const notification = document.getElementById("notification");

    if (!userId) {
        // Redirect with overlay instead of alert
        showNotification("Redirecting to login...", "error");
        setTimeout(() => {
            window.location.href = "/login.html";
        }, 1500);
        return;
    }

    // Fetch bookings from API
    fetch(`http://localhost:5000/api/bookings/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.bookings.length > 0) {
                data.bookings.forEach(booking => {
                    const bookingCard = document.createElement("div");
                    bookingCard.classList.add("booking-card");

                    bookingCard.innerHTML = `
                        <h3>Place: ${booking.place_to_visit}</h3>
                        <p>Price: ₹${booking.price}</p>
                        <p>Status: <strong>${booking.booking_status}</strong></p>
                        <p>Date: ${new Date(booking.booking_date).toLocaleString()}</p>
                        ${booking.booking_status !== "Cancelled" ? `
                        <button class="cancel-button" data-id="${booking.bookingid}">Cancel Booking</button>` : `<p style="color:red;">Cancelled</p>`}
                    `;

                    bookingList.appendChild(bookingCard);
                });

                // Add event listeners for cancel buttons
                document.querySelectorAll(".cancel-button").forEach(button => {
                    button.addEventListener("click", function () {
                        cancelBooking(this.dataset.id);
                    });
                });

            } else {
                bookingList.innerHTML = "<p>No bookings found.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching bookings:", error);
            bookingList.innerHTML = "<p>Error loading bookings.</p>";
        });

    // Function to cancel booking
    function cancelBooking(bookingId) {
        fetch(`http://localhost:5000/api/bookings/cancel/${bookingId}`, { method: "PUT" })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showNotification("Booking Cancelled!", "success");
                    setTimeout(() => location.reload(), 1000);
                }
            })
            .catch(error => {
                console.error("Error cancelling booking:", error);
            });
    }

    // Function to show notification
    function showNotification(message, type) {
        notification.textContent = message;
        notification.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);
    }
});

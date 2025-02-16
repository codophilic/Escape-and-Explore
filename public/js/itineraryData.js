const itineraryData = {
"gwalior fort":{
    "Day 1":{
        "start date": "15 March 2025",
        "start time": "8:00 AM",
            "Point 1": {
                name: "Place name 1",
                content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
            },
            "Point 2": {
                name: "Place name 2",
                content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
            },
            "Point 3": {
                title: "Place name 3",
                content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
            },
            "end date": "15 March 2025",
            "end time": "4:00 PM",
    },
    "Day 2":{
        "start date": "16 March 2025",
        "start time": "8:00 AM",
            "Point 1": {
                name: "Place name 1",
                content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
            },
            "Point 2": {
                name: "Place name 2",
                content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
            },
            "Point 3": {
                title: "Place name 3",
                content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
            },
            "end date": "16 March 2025",
            "end time": "4:00 PM",
    },
    "Day 3":{
        "start date": "17 March 2025",
        "start time": "8:00 AM",
            "Point 1": {
                name: "Place name 1",
                content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
            },
            "Point 2": {
                name: "Place name 2",
                content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
            },
            "Point 3": {
                title: "Place name 3",
                content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
            },
            "end date": "17 March 2025",
            "end time": "4:00 PM",
    },
    "Price": "2000"
},
"iskcon ujjain temple":{
    "Day 1":{
        "start date": "15 March 2025",
        "start time": "8:00 AM",
            "Point 1": {
                name: "Place name 1",
                content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
            },
            "Point 2": {
                name: "Place name 2",
                content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
            },
            "Point 3": {
                title: "Place name 3",
                content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
            },
            "end date": "15 March 2025",
            "end time": "4:00 PM",
    },
    "Day 2":{
        "start date": "16 March 2025",
        "start time": "8:00 AM",
            "Point 1": {
                name: "Place name 1",
                content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
            },
            "Point 2": {
                name: "Place name 2",
                content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
            },
            "Point 3": {
                title: "Place name 3",
                content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
            },
            "end date": "16 March 2025",
            "end time": "4:00 PM",
    },
    "Day 3":{
        "start date": "17 March 2025",
        "start time": "8:00 AM",
            "Point 1": {
                name: "Place name 1",
                content: "Day 1: Arrival and sightseeing.<br>Day 2: Visit historical sites.<br>Day 3: Departure."
            },
            "Point 2": {
                name: "Place name 2",
                content: "Day 1: City tour.<br>Day 2: Adventure activities.<br>Day 3: Leisure and departure."
            },
            "Point 3": {
                title: "Place name 3",
                content: "Day 1: Explore local markets.<br>Day 2: Cultural experiences.<br>Day 3: River cruise."
            },
            "end date": "17 March 2025",
            "end time": "4:00 PM",
    },
    "Price": "2000"
}
};
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const placeName = urlParams.get("place");

    if (placeName && itineraryData[placeName.toLowerCase()]) {
        const itinerary = itineraryData[placeName.toLowerCase()];
        const itineraryContent = document.getElementById("itinerary-content");
        itineraryContent.innerHTML = ""; // Clear existing content

        // Set place name in the heading
        document.getElementById("place-name").textContent = placeName.toUpperCase();

        // Loop through each day and generate the itinerary
        Object.keys(itinerary).forEach((day) => {
            if (day === "Price") return; // Skip the price key

            const dayData = itinerary[day];

            // Create a day container
            const dayContainer = document.createElement("div");
            dayContainer.classList.add("day-container");

            // Create a header for the date and time
            const dateHeader = document.createElement("h2");
            dateHeader.classList.add("date-header");
            dateHeader.textContent = `📅 ${dayData["start date"]} | ${day} | ⏰ ${dayData["start time"]} - ${dayData["end time"]}`;
            dayContainer.appendChild(dateHeader);

            // Create a list for places visited that day
            const placesList = document.createElement("ul");
            placesList.classList.add("places-list");

            // Loop through points and add them to the list
            Object.keys(dayData).forEach((key) => {
                if (key.startsWith("Point")) {
                    const place = dayData[key];

                    const placeItem = document.createElement("li");
                    placeItem.innerHTML = `<strong>📍 ${place.name || place.title}</strong><br><span>${place.content}</span>`;
                    placesList.appendChild(placeItem);
                }
            });

            // Append the list to the day container
            dayContainer.appendChild(placesList);
            itineraryContent.appendChild(dayContainer);
        });

        // Add total price section
        const priceSection = document.createElement("div");
        priceSection.classList.add("price-section");
        priceSection.innerHTML = `<h2>Total Price: ₹${itinerary.Price}</h2>`;
        itineraryContent.appendChild(priceSection);

        // Add buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const addToVisitButton = document.createElement("button");
        addToVisitButton.textContent = "➕ Add to Visit List";
        addToVisitButton.classList.add("action-button");
        addToVisitButton.onclick = () => {
            // Check if the user is logged in
            const loggedInUser = localStorage.getItem("loggedInUser");
        
            if (!loggedInUser) {
                window.location.href = "/login.html"; // Redirect to login if not logged in
                return;
            }
                
            // Prepare data to send
            const visitData = {
                user_id: loggedInUser,
                place_name: placeName,
                price: itineraryData[placeName]["Price"]
            };
        
            // Send a POST request to the backend to store the visit
            fetch("http://localhost:5000/api/visits/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(visitData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert("Place added to your visit list!");
                    window.location.href = "/addvisit.html"; // Redirect to the visit list page
                } else {
                    alert("Failed to add visit. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred while adding the visit.");
            });
        };
        

        const backButton = document.createElement("a");
        backButton.textContent = "⬅ Back";
        backButton.href = "/index.html";
        backButton.classList.add("action-button", "back-button");

        buttonContainer.appendChild(addToVisitButton);
        buttonContainer.appendChild(backButton);
        itineraryContent.appendChild(buttonContainer);
    } else {
        document.querySelector(".container").innerHTML = "<h1>Itinerary not found</h1>";
    }
});

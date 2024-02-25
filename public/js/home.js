function toggleDropdown() {
    var dropdown = document.getElementById("states");
    dropdown.classList.toggle("open");
    if (dropdown.classList.contains("open")) {
        var numOptions = dropdown.options.length;
        dropdown.style.maxHeight = (numOptions * 30) + "px"; // Adjust height per option
    } else {
        dropdown.style.maxHeight = "32px"; // Adjust as needed
    }
}

document.addEventListener("click", function(event) {
    if (!event.target.matches("#states")) {
        var dropdown = document.getElementById("states");
        dropdown.classList.remove("open");
        dropdown.style.maxHeight = "32px"; // Adjust as needed
    }
});


function populateCities(state) {
    var cities = document.getElementById("cities");
    cities.innerHTML = ""; // Clear previous options

    if (state === "Delhi") {
    addCity("New Delhi");
    addCity("Gurgaon");
    addCity("Noida");
    addCity("Faridabad");
    addCity("Ghaziabad");
    addCity("Greater Noida");
    addCity("Sonepat");
    addCity("Panipat");
    addCity("Rohtak");
    addCity("Bahadurgarh");
} else if (state === "Uttar Pradesh") {
    addCity("Lucknow");
    addCity("Kanpur");
    addCity("Agra");
    addCity("Varanasi");
    addCity("Allahabad");
    addCity("Meerut");
    addCity("Bareilly");
    addCity("Aligarh");
    addCity("Moradabad");
    addCity("Saharanpur");
} else if (state === "Maharashtra") {
    addCity("Mumbai");
    addCity("Pune");
    addCity("Nagpur");
    addCity("Nashik");
    addCity("Thane");
    addCity("Aurangabad");
    addCity("Solapur");
    addCity("Amravati");
    addCity("Kolhapur");
    addCity("Sangli");
} else if (state === "Madhya Pradesh") {
    addCity("Indore");
    addCity("Bhopal");
    addCity("Jabalpur");
    addCity("Gwalior");
    addCity("Ujjain");
    addCity("Sagar");
    addCity("Ratlam");
    addCity("Rewa");
    addCity("Satna");
    addCity("Dewas");
} else {
    addCity("No college covered yet");
}
        // Add more states and cities as needed

}

function addCity(cityName) {
    var option = document.createElement("option");
    option.text = cityName;
    document.getElementById("cities").add(option);
}
function navigateToNextPage(){
    var state=document.getElementById("states").value;
    
    if(state==""){ 
        alert("Please select a city"); 
    } else {
    // window.location.href = "/" + state.toLowerCase().replace(" ", "_");
    window.location.href = "/delhi";
    }
            
}
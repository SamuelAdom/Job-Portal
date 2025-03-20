
////checking check box
document.querySelectorAll('.categories input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Get selected categories
        const selectedCategories = Array.from(document.querySelectorAll('.categories input[type="checkbox"][data-target]:checked'))
            .map(checkbox => checkbox.getAttribute('data-target').split(" ")).flat();

        // Get selected locations
        const selectedLocations = Array.from(document.querySelectorAll('.categories input[type="checkbox"][data-location]:checked'))
            .map(checkbox => checkbox.getAttribute('data-location'));

        document.querySelectorAll('.job-container .card').forEach(card => {
            const cardCategories = card.getAttribute('data-category').split(" ");
            const cardLocation = card.getAttribute('data-location');

            // Check if the job matches at least one selected category OR no category is selected
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.some(cat => cardCategories.includes(cat));

            // Check if the job matches at least one selected location OR no location is selected
            const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(cardLocation);

            // Show card if it matches BOTH category and location filters
            card.style.display = categoryMatch && locationMatch ? "block" : "none";
        });
    });
});
///search logic
document.getElementById("btn").addEventListener("click", searchJobs);
document.getElementById("job").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchJobs();
    }
});
document.getElementById("location").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchJobs();
    }
});

function searchJobs() {
    const jobInput = document.getElementById("job").value.toLowerCase().trim();
    const locationInput = document.getElementById("location").value.toLowerCase().trim();
    const jobCards = document.querySelectorAll(".job-container .card");

    jobCards.forEach(card => {
        const jobTitle = card.querySelector(".card-subtitle").textContent.toLowerCase();
        const jobCategory = card.getAttribute("data-category").toLowerCase();
        const jobLocation = card.getAttribute("data-location").toLowerCase();

        // Show all jobs if both inputs are empty
        if (jobInput === "" && locationInput === "") {
            card.style.display = "block";
            return;
        }

        // Check if job title/category and location match the search input
        const jobMatch = jobTitle.includes(jobInput) || jobCategory.includes(jobInput);
        const locationMatch = jobLocation.includes(locationInput);

        if (jobMatch && locationMatch) {
            card.style.display = "block"; // Show matching job
        } else {
            card.style.display = "none"; // Hide non-matching job
        }
    });
}

// Reset job listings when input fields are cleared
document.getElementById("job").addEventListener("input", resetSearch);
document.getElementById("location").addEventListener("input", resetSearch);

function resetSearch() {
    const jobInput = document.getElementById("job").value.trim();
    const locationInput = document.getElementById("location").value.trim();
    const jobCards = document.querySelectorAll(".job-container .card");

    // Show all job cards if both inputs are empty
    if (jobInput === "" && locationInput === "") {
        jobCards.forEach(card => {
            card.style.display = "block";
        });
    }
}

const jobCards = document.querySelectorAll(".job-container .card"); 
const jobsPerPage = 6;
const totalJobs = jobCards.length;
const totalPages = Math.ceil(totalJobs / jobsPerPage);
let currentPage = 1;

// Function to show only jobs for the selected page
function displayJobs() {
    jobCards.forEach((card, index) => {
        // Show only jobs for the current page
        if (index >= (currentPage - 1) * jobsPerPage && index < currentPage * jobsPerPage) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Update active page number
    document.querySelectorAll(".pagination .page-item").forEach((item, i) => {
        item.classList.remove("active");
        if (i === currentPage) {
            item.classList.add("active");
        }
    });

    // Enable/Disable Previous & Next buttons
    document.getElementById("prev").classList.toggle("disabled", currentPage === 1);
    document.getElementById("next").classList.toggle("disabled", currentPage === totalPages);
}

document.querySelectorAll(".pagination .page-item a").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const text = this.textContent.trim();

        if (text === "Previous" && currentPage > 1) {
            currentPage--; 
        } else if (text === "Next" && currentPage < totalPages) {
            currentPage++; 
        } else if (!isNaN(text)) {
            currentPage = parseInt(text); 
        }

        displayJobs(); 
    });
});


displayJobs();

document.addEventListener("DOMContentLoaded", async () => {
    const auth0Client = await createAuth0Client({
      domain: "https://dev-1jknsyfxvou1oc2v.us.auth0.com",
      client_id: "Hken0WoPKqcGLGP3WqU06QlOeCI0movD",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  
    // Check if the user is authenticated
    const isAuthenticated = await auth0Client.isAuthenticated();
  
    if (isAuthenticated) {
      showLogoutButton();
      const user = await auth0Client.getUser();
      console.log("User info:", user);
    } else {
      showLoginButton();
    }
  
    // Login event
    document.getElementById("loginBtn").addEventListener("click", async () => {
      await auth0Client.loginWithRedirect();
    });
  
    // Logout event
    document.getElementById("logoutBtn").addEventListener("click", async () => {
      await auth0Client.logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    });
  
    function showLoginButton() {
      document.getElementById("loginBtn").style.display = "inline-block";
      document.getElementById("logoutBtn").style.display = "none";
    }
  
    function showLogoutButton() {
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("logoutBtn").style.display = "inline-block";
    }
  });
  


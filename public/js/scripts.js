const registerForm = document.querySelector("#register");



registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#emial").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;
    const country = document.querySelector("#country").value;


const userData = {
    firstname,
    lastname,
    email,
    password,
    city,
    state,
    country,
};

await registerUser(userData);

});

console.log('User Data:', userData);


    const registerUSer = async (userData) => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(userData)
                });
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('Response data:', data);
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        






document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.getElementById("profileForm");
    if (profileForm) {
        profileForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const formData = new FormData(profileForm);
            console.log("Form submitted", formData);
        });
    }

    const matchButtons = document.querySelectorAll(".match-button");
    matchButtons.forEach(button => {
        button.addEventListener("click", function() {
            const matchId = this.getAttribute("data-match-id");
            console.log("Match button clicked", matchId);
        });
    });
});
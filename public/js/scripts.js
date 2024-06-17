const registerForm = document.querySelector("#register");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        city: document.querySelector("#city").value,
        state: document.querySelector("#state").value,
        country: document.querySelector("#country").value,
        course: document.querySelector("#course").value,
        hobby1: document.querySelector("#hobby1").value,
        hobby2: document.querySelector("#hobby2").value,
        hobby3: document.querySelector("#hobby3").value,
        'Preference 1': document.querySelector("#Preference1").value,
        'Preference 2': document.querySelector("#Preference2").value,
        'Preference 3': document.querySelector("#Preference3").value,
        'Preference 4': document.querySelector("#Preference4").value,
        'Preference 5': document.querySelector("#Preference5").value,
        'Preference 6': document.querySelector("#Preference6").value,
        'Preference 7': document.querySelector("#Preference7").value,
        'Preference 8': document.querySelector("#Preference8").value,
        'Preference 9': document.querySelector("#Preference9").value,
        'Preference 10': document.querySelector("#Preference10").value,
    };

    try {
        const response = await fetch("/api/user", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User registered successfully:', data);
           
        } else {
            throw new Error('Failed to register user');
        }
    } catch (error) {
        console.error('Error:', error);
        
    }
});









        


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
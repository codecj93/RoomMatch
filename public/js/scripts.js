const registerForm = document.querySelector("#register");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lasname").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#password").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#password").value;
    const country = document.querySelector("#country").value;
   


    fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
            city,
            state,
            country
        }),
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res) => {
        if(res.status == 200) {
            console.log("User signup successful!")
            window.location.href = "/dashboard"
        } else if(res.status == 400) {
            console.log('Something went wrong!')
        }
    })
})







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
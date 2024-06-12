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
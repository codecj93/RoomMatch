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
            // Optionally redirect to a success page or handle login
        } else {
            throw new Error('Failed to register user');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error: display message to user or retry registration
    }
});








// registerForm.addEventListener("submit", async (event) => {
//     event.preventDefault();

 

//     const firstname = document.querySelector("#firstname").value;
//     const lastname = document.querySelector("#lastname").value;
//     const password = document.querySelector("#password").value;
//     const email = document.querySelector("#email").value;
//     const city = document.querySelector("#city").value;
//     const state = document.querySelector("#state").value;
//     const country = document.querySelector("#country").value;
//     const course = document.querySelector("#course").value;
//     const hobby1 = document.querySelector("#hobby1").value;
//     const hobby2 = document.querySelector("#hobby2").value;
//     const hobby3 = document.querySelector("#hobby3").value;
//     const Preference1 = document.querySelector("#Preference 1").value;
//     const Preference2 = document.querySelector("#Preference 2").value;
//     const Preference3 = document.querySelector("#Preference 3").value;
//     const Preference4 = document.querySelector("#Preference 4").value;
//     const Preference5 = document.querySelector("#Preference 5").value;
//     const Preference6 = document.querySelector("#Preference 6").value;
//     const Preference7 = document.querySelector("#Preference 7").value;
//     const Preference8 = document.querySelector("#Preference 8").value;
//     const Preference9 = document.querySelector("#Preference 9").value;
//     const Preference10 = document.querySelector("#Preference 10").value;


// const userData = {
//     firstname,
//     lastname,
//     email,
//     password,
//     city,
//     state,
//     country,
//     course,
//     hobby1,
//     hobby2,
//     hobby3,
//     Preference1: Preference1,
//     Preference2: Preference2,
//     Preference3: Preference3,
//     Preference4: Preference4,
//     Preference5: Preference5,
//     Preference6: Preference6,
//     Preference7: Preference7,
//     Preference8: Preference8,
//     Preference9: Preference9,
//     Preference10: Preference10,
// };

// const endpointURL = '/users'; // Update this if the endpoint URL changes
//     console.log('Endpoint URL:', endpointURL);


// console.log(userData)
// await registerUser(userData);


// });



//     const registerUser = async (userData) => {
//         try {
//             const response = await fetch("/users", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': "application/json"
//                 },
//                 body: JSON.stringify(userData)
//                 });
//                 console.log('Response status:', response.status);
//                 const data = await response.json();
//                 console.log('Response data:', data);
//                 console.log(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
    
        


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
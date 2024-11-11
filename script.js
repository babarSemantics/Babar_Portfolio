// script.js

// Update Profile Photo based on user selection
function updateProfilePhoto() {
    const fileInput = document.getElementById("file-input");
    const profilePhoto = document.getElementById("profile-photo");

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            profilePhoto.src = e.target.result; // Update the profile image source to the uploaded file
        };

        reader.readAsDataURL(file); // Convert the uploaded file to a Data URL and set it as the image source
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("alertButton");

    if (button) {
        button.addEventListener("click", function () {

            // Change button text temporarily (UX improvement)
            button.textContent = "Opening LinkedIn...";

            // Small delay for better experience
            setTimeout(function () {
                window.open(
                    "https://www.linkedin.com/in/manoj-mukkamula-baa58a2a7/",
                    "_blank",
                    "noopener"
                );
                button.textContent = "View My LinkedIn";
            }, 800);

        });
    }

    console.log("Portfolio Loaded Successfully");
});
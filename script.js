document.addEventListener("DOMContentLoaded", () => {

    console.log("Nicole Villarta portfolio loaded.");

    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                "Navigating to:",
                link.getAttribute("href")
            );

        });

    });

});
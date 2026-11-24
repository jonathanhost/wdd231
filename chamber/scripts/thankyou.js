
document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const results = document.getElementById("form-results");

    const fields = [
        ["First Name", "first"],
        ["Last Name", "last"],
        ["Email", "email"],
        ["Mobile Phone", "phone"],
        ["Business Name", "organization"],
        ["Application Date", "timestamp"]
    ];

    fields.forEach(([label, name]) => {

        const value = params.get(name) || "Not provided";

        const paragraph = document.createElement("p");

        paragraph.textContent = `${label}: ${value}`;

        results.appendChild(paragraph);

    });

});

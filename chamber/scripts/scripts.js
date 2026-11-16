const currentYear = document.querySelector("#currentYear");
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");


currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    const isExpanded = navigation.classList.contains("show");

    menuButton.setAttribute("aria-expanded", isExpanded);
});

lastModified.textContent = document.lastModified;
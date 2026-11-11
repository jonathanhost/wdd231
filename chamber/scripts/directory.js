
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const content = document.querySelector("#members");
const currentYear = document.querySelector("#currentYear");

currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");

// Hamburger menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    const isExpanded = navigation.classList.contains("show");

    menuButton.setAttribute("aria-expanded", isExpanded);
});

// Grid view
gridButton.addEventListener("click", () => {
    content.classList.remove("list-view");
});

// List view
listButton.addEventListener("click", () => {
    content.classList.add("list-view");
});

// Last modified date
lastModified.textContent = document.lastModified;

async function getMembers() {
    const response = await fetch("./data/members.json");
    const data = await response.json();

    displayMembers(data);
}

function displayMembers(members) {
    const content = document.querySelector("#members");
    const membershipLevels = {
    1: "Member",
    2: "Silver Member",
    3: "Gold Member"
};

    content.innerHTML = members.map(member => `
        <section class="member-card">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership: ${membershipLevels[member.membership]}</p>
            <p>Industry: ${member.industry}</p>
        </section>
    `).join("");
}

getMembers();

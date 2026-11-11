
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const content = document.querySelector("#members");
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});

gridButton.addEventListener("click", () => {
    content.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    content.classList.add("list-view");
});

async function getMembers() {
    try {
        const response = await fetch("./data/members.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error loading members:", error);
        content.textContent = "Unable to load member information.";
    }
}

function displayMembers(members) {
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
            <p>
                <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                    ${member.website}
                </a>
            </p>
            <p>Membership: ${membershipLevels[member.membership] || "Member"}</p>
            <p>Industry: ${member.industry}</p>
        </section>
    `).join("");
}

getMembers();

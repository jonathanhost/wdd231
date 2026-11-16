async function getSpotlights() {
    try {
        const response = await fetch("./data/members.json");
        const members = await response.json();

        // Select only Gold and Silver members
        const eligibleMembers = members.filter(member =>
            member.membership === 2 || member.membership === 3
        );

        // Shuffle the members randomly
        eligibleMembers.sort(() => Math.random() - 0.5);

        // Randomly choose 2 or 3 members
        const numberOfSpotlights = Math.random() < 0.5 ? 2 : 3;

        const selectedMembers = eligibleMembers.slice(0, numberOfSpotlights);

        displaySpotlights(selectedMembers);

    } catch (error) {
        console.error("Error loading spotlights:", error);
        document.querySelector("#spotlight-container").textContent =
            "Unable to load business spotlights.";
    }
}

function displaySpotlights(members) {
    const container = document.querySelector("#spotlight-container");

    const membershipLevels = {
        2: "Silver Member",
        3: "Gold Member"
    };

    container.innerHTML = members.map(member => `
        <article class="spotlight-card">
            <img src="./images/${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p>
                <strong>Website:</strong>
                <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong>
                ${membershipLevels[member.membership]}
            </p>
        </article>
    `).join("");
}

getSpotlights();

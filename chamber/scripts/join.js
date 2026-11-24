
/* =================================
   MEMBERSHIP MODALS
================================= */

// Open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.showModal();
    }
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.close();
    }
}


/* =================================
   FORM TIMESTAMP
================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Get timestamp field
    const timestamp = document.getElementById("timestamp");

    // Set current date and time
    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }


    /* =================================
       MEMBERSHIP CARDS ANIMATION
    ================================= */

    const cards = document.querySelectorAll(".membership-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";

        setTimeout(() => {
            card.style.transition = "opacity 0.6s ease";
            card.style.opacity = "1";
        }, index * 200);
    });


    /* =================================
       CLOSE MODAL WHEN CLICKING OUTSIDE
    ================================= */

    const modals = document.querySelectorAll("dialog");

    modals.forEach((modal) => {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {
                modal.close();
            }

        });

    });

});

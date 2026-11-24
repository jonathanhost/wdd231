
document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.getElementById("timestamp");

    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    const openButtons = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll("[data-close-modal]");
    const modals = document.querySelectorAll("dialog");

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.closeModal;
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.close();
            }
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });
});

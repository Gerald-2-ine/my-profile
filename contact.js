document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");

    // Create modal popup
    const modal = document.createElement("div");
    modal.id = "success-modal";
    modal.innerHTML = `
        <div class="modal-content">
            <p>✅ Message sent successfully!</p>
            <button id="close-modal">OK</button>
        </div>
    `;
    document.body.appendChild(modal);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Error fields
        const errors = {
            name: document.getElementById("error-name"),
            email: document.getElementById("error-email"),
            subject: document.getElementById("error-subject"),
            message: document.getElementById("error-message"),
        };

        // Reset state
        Object.values(errors).forEach((err) => (err.textContent = ""));
        successMessage.hidden = true;

        let valid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (name.value.trim() === "") {
            errors.name.textContent = "Full name is required.";
            valid = false;
        }

        if (email.value.trim() === "") {
            errors.email.textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            errors.email.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (subject.value.trim() === "") {
            errors.subject.textContent = "Subject is required.";
            valid = false;
        }

        if (message.value.trim() === "") {
            errors.message.textContent = "Message is required.";
            valid = false;
        } else if (message.value.trim().length < 10) {
            errors.message.textContent = "Message must be at least 10 characters.";
            valid = false;
        }

        // If valid, show popup modal
        if (valid) {
            form.reset();

            modal.classList.add("show");
            setTimeout(() => {
                modal.classList.add("visible");
            }, 50);
        }

        // Shake animation for feedback
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 400);
    });

    // Close modal
    document.body.addEventListener("click", (e) => {
        if (e.target.id === "close-modal" || e.target.id === "success-modal") {
            modal.classList.remove("visible");
            setTimeout(() => modal.classList.remove("show"), 300);
        }
    });
});

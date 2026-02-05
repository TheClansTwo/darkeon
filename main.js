function sendToPageClick(page) {
    window.location.href = page;
}

function revealSecret() {
    const txt = document.getElementById('secret-text');
    if (txt) txt.style.display = 'block';
}

const btn = document.getElementById('send-btn');
const form = document.getElementById('feedback-form');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerText = 'Sending...';

        const serviceID = 'service_8jcw5av';
        const templateID = 'template_ffjmr8l';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = 'Send email';
                document.getElementById('status-msg').innerText = "Feedback sent.";
                document.getElementById('status-msg').className = "success";
                form.reset();
            }, (err) => {
                btn.innerText = 'Send email';
                document.getElementById('status-msg').innerText = "Action failed. Try again later.";
                document.getElementById('status-msg').className = "error";
                console.error(err);
            });
    });
}

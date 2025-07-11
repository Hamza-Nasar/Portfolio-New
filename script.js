document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    try {
        const res = await fetch('http: //localhost:3000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });


        const data = await res.json();
        document.getElementById('formResponse').innerText = data.message || 'Message sent!';
        this.reset();
    } catch (err) {
        document.getElementById('formResponse').innerText = 'Error sending message.';
    }
});q

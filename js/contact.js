// ==========================================================
// CONTACT FORM
// Builds a WhatsApp message from the form and opens WhatsApp
// ==========================================================

// ----- 1. Settings: the club's WhatsApp number -----
// Country code first, no + and no spaces
const WHATSAPP_NUMBER = '27674630135';


// ----- 2. Find the form on the page -----
const form = document.getElementById('booking-form');

// Only run if this page has the form
if (form) {

    // ----- 3. When the form is submitted -----
    form.addEventListener('submit', function (event) {

        // Stop the page from reloading
        event.preventDefault();

        // ----- 4. Read the answers -----
        const name = document.getElementById('name').value.trim();
        const who = document.getElementById('who').value;
        const age = document.getElementById('age').value;
        const program = document.getElementById('program').value;
        const message = document.getElementById('message').value.trim();

        // ----- 5. Build the WhatsApp message -----
        let text = 'Hi Active4All, I would like to book a free trial.\n\n'
            + 'Name: ' + name + '\n'
            + 'For: ' + who + '\n'
            + 'Age: ' + age + '\n'
            + 'Programme: ' + program;

        // Add the optional message only if something was typed
        if (message) {
            text += '\nMessage: ' + message;
        }

        // ----- 6. Open WhatsApp with the message ready to send -----
        const url = 'https://wa.me/' + WHATSAPP_NUMBER
            + '?text=' + encodeURIComponent(text);

        window.open(url, '_blank', 'noopener');
    });

}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('front');
        }
    })
})


const hiddenElements = document.querySelectorAll('.back');
hiddenElements.forEach((el) => observer.observe(el));

const contactBtn = document.getElementById('contact-button');
const contactForm = document.getElementById('contact-form');
const messageSpan = document.getElementById('sent-message');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();

        emailjs.sendForm('service_de3271b', 'template_qdgkji2', '#contact-form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
    contactForm.style.display = 'none';
    messageSpan.style.display = 'block';
     
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('front');
        } else {
            entry.target.classList.remove('front')
        }
    })
})


const hiddenElements = document.querySelectorAll('.back');
hiddenElements.forEach((el) => observer.observe(el));

const contactBtn = document.getElementById('contact-button');

contactBtn.addEventListener('click', () => {
        emailjs.sendForm('default_service', 'template_a864buh', '#contact-form')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
})
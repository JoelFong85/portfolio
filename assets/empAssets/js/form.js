(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  var contactForm = document.getElementById('contact-form');
  var userId = 'user_Hd0O2uuC3JBarD4IbhdFp';
  var serviceId = 'service_yh015rq';
  var templateId = 'template_z2o50gr';

  window.onload = function () {
    emailjs.init(userId);

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs.sendForm(serviceId, templateId, this)
        .then(function () {
          resetForm(contactForm);
          console.log('SUCCESS!');
        }, function (error) {
          resetForm(contactForm);
          console.log('FAILED...', error);
        });
    });
  }

  var resetForm = (contactForm) => {
    contactForm.reset();
    contactForm.className = "needs-validation";
  }

})();


/*----------------------------------Solicitud de Asesoramiento--------------------------------*/
function enviar_datos(e) {
   const client = document.getElementById('cliente');
   const id = document.getElementById('cedula');
   const email = document.getElementById('email');
   const phone = document.getElementById('telefono');
   const area = document.getElementById('area');

   if (client.value === '') {
      client.focus();
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'El espacio para tú nombre esta vacío, completalo por favor.',
      })
   }
   if (id.value === '') {
      id.focus();
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'El espacio para tú cédula esta vacío, completalo por favor.',
      })
   }
   if (email.value === '') {
      email.focus();
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'El espacio para tú correo electrónico esta vacío, completalo por favor.',
      })
   }
   if (phone.value === '') {
      phone.focus();
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'El espacio para tú número de contacto esta vacío, completalo por favor.',
      })
   }
   if (area.value === '') {
      area.focus();
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'El espacio para el área de tú accesoramiento esta vacío, completalo por favor.',
      })
   }
   else {
         (function(){
            emailjs.init('user_E2d94Jdptk3d7BY4qYliX');
         })();
         const btn = document.getElementById('procesar');
   
         document.getElementById('form')
            .addEventListener('submit', function(event) {
            event.preventDefault();
   
         btn.value = 'Sending...';
   
         const serviceID = 'default_service';
         const templateID = 'template_ajlitnp';
   
         emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
            btn.value = 'Send Email';
            Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Tú información ha sido guardada, reciviras un correo de confirmación',
               showConfirmButton: false,
               timer: 3000
            })
            window.location = "../index.html";
         }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
         });
      });
      return false;
   }
}
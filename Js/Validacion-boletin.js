function coment() {
   if (document.getElementById('com').value.length < 15) {
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'Tú correo es demasiado corto, debe tener al menos 15 caracteres.',
      })
   }else{
      Swal.fire({
         type: 'success',
         title: 'Gracias',
         text: 'Gracias por suscribirte a nuestro boletin, recibiras toda la información que deseas.',
         timer: '3000',
      })
   document.getElementById("suscripcion").reset();
   }
}
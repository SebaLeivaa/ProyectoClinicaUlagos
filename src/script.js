
//Abrir dialogo de Iniciar Sesion
  function loginButton() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const errorMensajeCorreo = document.getElementById("errorMensajeCorreo");
    const errorMensajeClave = document.getElementById("errorMensajeClave");
   
    signinDialog.close();
    loginDialog.showModal();

    const inputCorreoRut = document.getElementById("rutCorreo");
    const inputClave = document.getElementById("claveInput5"); 
    inputCorreoRut.value = "";
    inputClave.value = "";
    
    const lightDismiss = ({ target: loginDialog }) => {
      if (loginDialog.nodeName === "DIALOG") loginDialog.close("dismiss");
    };

    loginDialog.addEventListener("click", lightDismiss);



    //Elimina los mensajes de error al abrir nuevamente el dialog
    if (errorMensajeCorreo && errorMensajeClave) {
      errorMensajeCorreo.textContent = "";
      errorMensajeClave.textContent = "";
    }
  }


//Abrir dialogo de Registro
  function signinButton() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const errorMensajeRut = document.getElementById("errorMensajeRut");
    const errorMensajeFecNac = document.getElementById("errorMensajeFecNac");
    const errorMensajeClavee = document.getElementById("errorMensajeClavee");
    const errorMensajeCorreo = document.getElementById("errorMensajeCorreo");
    const errorMensajeTelefono = document.getElementById("errorMensajeTelefono");

    loginDialog.close();
    signinDialog.showModal();

    const inputNombre = document.getElementById("paName");
    const inputApellidos = document.getElementById("paLName");
    const inputRut = document.getElementById("paRut");
    const inputFecNac = document.getElementById("DoB");
    const inputCorreo = document.getElementById("paEmail");
    const inputClave = document.getElementById("claveInput6");
    const inputTelefono = document.getElementById("paPhone");
    inputNombre.value = "";
    inputApellidos.value = "";
    inputRut.value = "";
    inputFecNac.value = "";
    inputCorreo.value = "";
    inputClave.value = "";
    inputTelefono.value = "";



    const lightDismiss = ({ target: signinDialog }) => {
      if (signinDialog.nodeName === "DIALOG") signinDialog.close("dismiss");
    };

    signinDialog.addEventListener("click", lightDismiss);

    if (errorMensajeRut) {
      errorMensajeRut.textContent = "";
    }
    if (errorMensajeFecNac) {
      errorMensajeFecNac.textContent = "";
    }
    if (errorMensajeClavee) {
      errorMensajeClavee.textContent = "";
    }
    if (errorMensajeCorreo) {
      errorMensajeCorreo.textContent = "";
    }
    if (errorMensajeTelefono) {
      errorMensajeTelefono.textContent = "";
    }
  }


//Realiza el cambio de usuario a invitado y viceversa en la seccion de agendar hora
  function reservaInvitado(){
    const usuarioDialog = document.getElementById("reservaTresDialogUsuario");
    const invitadoDialog = document.getElementById("reservaTresDialogInvitado");
    usuarioDialog.close();
    invitadoDialog.showModal();
  }

  function reservaUsuario(){
    const invitadoDialog = document.getElementById("reservaTresDialogInvitado");
    const usuarioDialog = document.getElementById("reservaTresDialogUsuario");
    invitadoDialog.close();
    usuarioDialog.showModal();
  }

//Abrir dialog reserva paso uno
  function reservaUno(){
    const reservaUnoDialog = document.getElementById("reservaUnoDialog");
    reservaUnoDialog.showModal();

    const lightDismiss = ({ target: reservaUnoDialog }) => {
      if (reservaUnoDialog.nodeName === "DIALOG") reservaUnoDialog.close("dismiss");
    };

    reservaUnoDialog.addEventListener("click", lightDismiss);
  }

//Abrir dialog registro exitoso
  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('registroExitosoDialog');

    dialog.showModal();
  });

//Abrir dialog anula hora paso uno
  function anulaHoraUno(){
    const anulaHoraUnoDialog = document.getElementById("anulaHoraUnoDialog");
    const errorMensajeCorreo = document.getElementById("errorMensajeCorreoAnulaHora");
    const errorMensajeClave = document.getElementById("errorMensajeClaveAnulaHora");
    
    anulaHoraUnoDialog.showModal();

    const lightDismiss = ({ target: anulaHoraUnoDialog }) => {
      if (anulaHoraUnoDialog.nodeName === "DIALOG") anulaHoraUnoDialog.close("dismiss");
    };

    const inputCorreoRut = document.getElementById("correoAnularHora");
    const inputClave = document.getElementById("claveInput7"); 
    inputCorreoRut.value = "";
    inputClave.value = "";

    anulaHoraUnoDialog.addEventListener("click", lightDismiss);

    if (errorMensajeCorreo && errorMensajeClave) {
      errorMensajeCorreo.textContent = "";
      errorMensajeClave.textContent = "";
    }
  }

//Abrir dialog historial medico uno
  function historialMedUno(){
    const historialMedUnoDialog = document.getElementById("historialMedUnoDialog");
    const errorMensajeCorreoHistorialMed = document.getElementById("errorMensajeCorreoHistorialMed");
    const errorMensajeClaveHistorialMed = document.getElementById("errorMensajeClaveHistorialMed");
    
    historialMedUnoDialog.showModal();

    const lightDismiss = ({ target: historialMedUnoDialog }) => {
      if (historialMedUnoDialog.nodeName === "DIALOG") historialMedUnoDialog.close("dismiss");
    };

    const inputRut = document.getElementById("rutHistorialMed");
    const inputClave = document.getElementById("claveInput7"); 
    inputRut.value = "";
    inputClave.value = "";

    historialMedUnoDialog.addEventListener("click", lightDismiss);

    if (errorMensajeCorreoHistorialMed  && errorMensajeClaveHistorialMed ) {
      errorMensajeCorreoHistorialMed.textContent = "";
      errorMensajeClaveHistorialMed.textContent = "";
    }
  }

//Abrir dialog historial de pacientes (LADO DEL PROFESIONAL)
function historialMedProf(){
  const historialMedProfesionalesDialog = document.getElementById("historialMedProfesionalesDialog");
  const errorMensajeRutHistorialMedProf = document.getElementById("errorMensajeRutHistorialMedProf");
  
  historialMedProfesionalesDialog.showModal();

  const lightDismiss = ({ target: historialMedProfesionalesDialog }) => {
    if (historialMedProfesionalesDialog.nodeName === "DIALOG") historialMedProfesionalesDialog.close("dismiss");
  };

  const inputRut = document.getElementById("rutHistorialMedProf");
  inputRut.value = "";

  historialMedProfesionalesDialog.addEventListener("click", lightDismiss);

  if (errorMensajeRutHistorialMedProf) {
    errorMensajeRutHistorialMedProf.textContent = "";
  }
}

//Abrir dialog de editar, eliminar y agregar horas medicas 
function editarCitaMedica(index){
  const editarCitaMedicaDialog = document.getElementById("editarCitaMedicaDialog" + index);
   editarCitaMedicaDialog.showModal();
  const lightDismiss = ({ target: editarCitaMedicaDialog }) => {
    if (editarCitaMedicaDialog.nodeName === "DIALOG") editarCitaMedicaDialog.close("dismiss");
  };

  editarCitaMedicaDialog.addEventListener("click", lightDismiss);

}

function eliminarCitaMedica(index){
  const eliminarCitaMedicaDialog = document.getElementById("eliminarCitaMedicaDialog" + index);
   eliminarCitaMedicaDialog.showModal();

   const lightDismiss = ({ target: eliminarCitaMedicaDialog }) => {
    if (eliminarCitaMedicaDialog.nodeName === "DIALOG") eliminarCitaMedicaDialog.close("dismiss");
  };

  eliminarCitaMedicaDialog.addEventListener("click", lightDismiss);
}

function agregarCitaMedica(){
  const agregarCitaMedicaDialog = document.getElementById("agregarCitaMedicaDialog");
   agregarCitaMedicaDialog.showModal();

   const lightDismiss = ({ target: agregarCitaMedicaDialog }) => {
    if (agregarCitaMedicaDialog.nodeName === "DIALOG") agregarCitaMedicaDialog.close("dismiss");
  };

  agregarCitaMedicaDialog.addEventListener("click", lightDismiss);
}


//Abre dialog de agregarDetalle
function agregarDetalleCitaMedica(index){
  const agregarDetalleCitaMedicaDialog = document.getElementById("agregarDetalleCitaMedicaDialog" + index);
   agregarDetalleCitaMedicaDialog.showModal();

   const lightDismiss = ({ target: agregarDetalleCitaMedicaDialog }) => {
    if (agregarDetalleCitaMedicaDialog.nodeName === "DIALOG") agregarDetalleCitaMedicaDialog.close("dismiss");
  };

  agregarDetalleCitaMedicaDialog.addEventListener("click", lightDismiss);
}

//Abre dialog de editarDetalle
function editarDetalleCitaMedica(index){
  const editarDetalleCitaMedicaDialog = document.getElementById("editarDetalleCitaMedicaDialog" + index);
   editarDetalleCitaMedicaDialog.showModal();

   const lightDismiss = ({ target: editarDetalleCitaMedicaDialog }) => {
    if (editarDetalleCitaMedicaDialog.nodeName === "DIALOG") editarDetalleCitaMedicaDialog.close("dismiss");
  };

  editarDetalleCitaMedicaDialog.addEventListener("click", lightDismiss);
}

//Muestra el dialog en los archivos EJS
  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaDosDialog');
    dialog.showModal();
    const lightDismiss = ({ target: reservaDosDialog }) => {
      if (reservaDosDialog.nodeName === "DIALOG") reservaDosDialog.close("dismiss");
    };

    reservaDosDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaTresDialogUsuario');

    dialog.showModal();
    const lightDismiss = ({ target: reservaTresDialogUsuario }) => {
      if (reservaTresDialogUsuario.nodeName === "DIALOG") reservaTresDialogUsuario.close("dismiss");
    };

    reservaTresDialogUsuario.addEventListener("click", lightDismiss);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('sinResultadosDialog');

    dialog.showModal();
    const lightDismiss = ({ target: sinResultadosDialog }) => {
      if (sinResultadosDialog.nodeName === "DIALOG") sinResultadosDialog.close("dismiss");
    };

    sinResultadosDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaExitosaDialog');

    dialog.showModal();
    const lightDismiss = ({ target: reservaExitosaDialog }) => {
      if (reservaExitosaDialog.nodeName === "DIALOG") reservaExitosaDialog.close("dismiss");
    };

    reservaExitosaDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('anularHoraDosDialog');

    dialog.showModal();
    const lightDismiss = ({ target: anularHoraDosDialog }) => {
      if (anularHoraDosDialog.nodeName === "DIALOG") dialog.close("dismiss");
    };

    anularHoraDosDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('anularHoraExitoDialog');

    dialog.showModal();
    const lightDismiss = ({ target: anularHoraExitoDialog }) => {
      if (anularHoraExitoDialog.nodeName === "DIALOG") dialog.close("dismiss");
    };

    anularHoraExitoDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('historialMedDosDialog');

    dialog.showModal();
    const lightDismiss = ({ target: historialMedDosDialog }) => {
      if (historialMedDosDialog.nodeName === "DIALOG") dialog.close("dismiss");
    };

    historialMedDosDialog.addEventListener("click", lightDismiss);
  });

//Cierra el dialog en los archivos EJS
  document.addEventListener('DOMContentLoaded', function () {
    const reservaDosDialog = document.getElementById('reservaDosDialog');
    const cerrarReservaDos = document.getElementById('cerrarReservaDos');

    cerrarReservaDos.addEventListener('click', () => {
      reservaDosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reservaTresDialogUsuario = document.getElementById('reservaTresDialogUsuario');
    const cerrarReservaTresUsuario = document.getElementById('cerrarReservaTresUsuario');

    cerrarReservaTresUsuario.addEventListener('click', () => {
      reservaTresDialogUsuario.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reservaTresDialogInvitado = document.getElementById('reservaTresDialogInvitado');
    const cerrarReservaTresInvitado = document.getElementById('cerrarReservaTresInvitado');

    cerrarReservaTresInvitado.addEventListener('click', () => {
      reservaTresDialogInvitado.close();
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const sinResultadosDialog = document.getElementById('sinResultadosDialog');
    const cerrarSinResultados = document.getElementById('cerrarSinResultados');

    cerrarSinResultados.addEventListener('click', () => {
      sinResultadosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reservaExitosaDialog = document.getElementById('reservaExitosaDialog');
    const cerrarReservaExitosa = document.getElementById('cerrarReservaExitosa');

    cerrarReservaExitosa.addEventListener('click', () => {
      reservaExitosaDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const anularHoraDosDialog = document.getElementById('anularHoraDosDialog');
    const cerrarAnularHoraDos = document.getElementById('cerrarAnularHoraDos');

    cerrarAnularHoraDos.addEventListener('click', () => {
      anularHoraDosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const anularHoraExitoDialog = document.getElementById('anularHoraExitoDialog');
    const cerrarAnularHoraExito = document.getElementById('cerrarAnularHoraExito');

    cerrarAnularHoraExito.addEventListener('click', () => {
      anularHoraExitoDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const historialMedDosDialog = document.getElementById('historialMedDosDialog');
    const cerrarHistorialMedDos = document.getElementById('cerrarHistorialMedDos');

    cerrarHistorialMedDos.addEventListener('click', () => {
      historialMedDosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const disponibilidadSalasCitaDialog = document.getElementById('disponibilidadSalasCitaDialog');
    const cerrarDialogDisponibilidadSalas = document.getElementById('cerrarDialogDisponibilidadSalas');

    cerrarDialogDisponibilidadSalas.addEventListener('click', () => {
      disponibilidadSalasCitaDialog.close();
    });
  });



//Cerrar ventana de dialogos
  function closeDia() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const reservaUnoDialog = document.getElementById("reservaUnoDialog");
    const anulaHoraUnoDialog = document.getElementById("anulaHoraUnoDialog");
    const historialMedUnoDialog = document.getElementById("historialMedUnoDialog");
    const reservaDosDialog = document.getElementById("reservaDosDialog");

    if(loginDialog != 'null'){
      loginDialog.close();
    }
    if(signinDialog != 'null'){
      signinDialog.close();
    }
    if(reservaUnoDialog != 'null'){
      reservaUnoDialog.close();
    }
    if(anulaHoraUnoDialog != 'null'){
      anulaHoraUnoDialog.close();
    }
    if(historialMedUnoDialog != 'null'){
      historialMedUnoDialog.close();
    }
    if(reservaDosDialog != 'null'){
      reservaDosDialog.close();
    }
  }

  function closeDialogRegistroExitoso() {
    const registroExitosoDialog = document.getElementById("registroExitosoDialog");
    registroExitosoDialog.close();
  }

  function closeDialogHistorialMedProf() {
    const historialMedProfesionalesDialog = document.getElementById("historialMedProfesionalesDialog");
    historialMedProfesionalesDialog.close();
  }

  function closeDialogEditarCitaMedica(index){
    const editarCitaMedicaDialog = document.getElementById("editarCitaMedicaDialog"+ index)
    editarCitaMedicaDialog.close();
  };

  function closeDialogEliminarCitaMedica(index){
    const eliminarCitaMedicaDialog = document.getElementById("eliminarCitaMedicaDialog"+ index)
    eliminarCitaMedicaDialog.close();
  }

  function closeDialogAgregarCitaMedica(){
    const agregarCitaMedicaDialog = document.getElementById("agregarCitaMedicaDialog") 
    agregarCitaMedicaDialog.close();
  }

  function closeDialogAgregarDetalleCitaMedica(index){
    const agregarDetalleCitaMedicaDialog = document.getElementById("agregarDetalleCitaMedicaDialog" + index)
    agregarDetalleCitaMedicaDialog.close();
  }

  function closeDialogEditarDetalleCitaMedica(index){
    const editarDetalleCitaMedicaDialog = document.getElementById("editarDetalleCitaMedicaDialog" + index)
    editarDetalleCitaMedicaDialog.close();
  }

  //Ocultar y mostrar contraseña 
  const claveInput = document.getElementById('claveInput');
  const cambioClave = document.getElementById('cambioClave');
  const iconoClave = document.getElementById('iconoClave');

  cambioClave.addEventListener('click', () => {
    if(claveInput.type === 'password'){
      claveInput.type = 'text';
      iconoClave.classList.remove('fa-eye');
      iconoClave.classList.add('fa-eye-slash');
    }else{
      claveInput.type = "password";
      iconoClave.classList.remove('fa-eye-slash');
      iconoClave.classList.add('fa-eye');
    }
  });

  const claveInput2 = document.getElementById('claveInput2');
  const cambioClave2 = document.getElementById('cambioClave2');
  const iconoClave2 = document.getElementById('iconoClave2');

  cambioClave2.addEventListener('click', () => {
    if(claveInput2.type === 'password'){
      claveInput2.type = 'text';
      iconoClave2.classList.remove('fa-eye');
      iconoClave2.classList.add('fa-eye-slash');
    }else{
      claveInput2.type = "password";
      iconoClave2.classList.remove('fa-eye-slash');
      iconoClave2.classList.add('fa-eye');
    }
  });

  function cambioClaveSigIn(){
    const claveInput3 = document.getElementById('claveInput3');
    const iconoClave3 = document.getElementById('iconoClave3');
    if(claveInput3.type === 'password'){
      claveInput3.type = 'text';
      iconoClave3.classList.remove('fa-eye');
      iconoClave3.classList.add('fa-eye-slash');
    }else{
      claveInput3.type = "password";
      iconoClave3.classList.remove('fa-eye-slash');
      iconoClave3.classList.add('fa-eye');
    }
  }

  function cambioClaveLogin(){
    const claveInput4 = document.getElementById('claveInput4');
    const iconoClave4 = document.getElementById('iconoClave4');
    if(claveInput4.type === 'password'){
      claveInput4.type = 'text';
      iconoClave4.classList.remove('fa-eye');
      iconoClave4.classList.add('fa-eye-slash');
    }else{
      claveInput4.type = "password";
      iconoClave4.classList.remove('fa-eye-slash');
      iconoClave4.classList.add('fa-eye');
    }
  }
  
  function cambioClaveLoginError(){
    const claveInput5 = document.getElementById('claveInput5');
    const iconoClave5 = document.getElementById('iconoClave5');
    if(claveInput5.type === 'password'){
      claveInput5.type = 'text';
      iconoClave5.classList.remove('fa-eye');
      iconoClave5.classList.add('fa-eye-slash');
    }else{
      claveInput5.type = "password";
      iconoClave5.classList.remove('fa-eye-slash');
      iconoClave5.classList.add('fa-eye');
    }
  }

  function cambioClaveSigInError(){
    const claveInput6 = document.getElementById('claveInput6');
    const iconoClave6 = document.getElementById('iconoClave6');
    if(claveInput6.type === 'password'){
      claveInput6.type = 'text';
      iconoClave6.classList.remove('fa-eye');
      iconoClave6.classList.add('fa-eye-slash');
    }else{
      claveInput6.type = "password";
      iconoClave6.classList.remove('fa-eye-slash');
      iconoClave6.classList.add('fa-eye');
    }
  }

  function cambioClaveAnularHora(){
    const claveInput7 = document.getElementById('claveInput7');
    const iconoClave7 = document.getElementById('iconoClave7');
    if(claveInput7.type === 'password'){
      claveInput7.type = 'text';
      iconoClave7.classList.remove('fa-eye');
      iconoClave7.classList.add('fa-eye-slash');
    }else{
      claveInput7.type = "password";
      iconoClave7.classList.remove('fa-eye-slash');
      iconoClave7.classList.add('fa-eye');
    }
  }

  function cambioClaveHistorialMedico(){
    const claveInput8 = document.getElementById('claveInput8');
    const iconoClave8 = document.getElementById('iconoClave8');
    if(claveInput8.type === 'password'){
      claveInput8.type = 'text';
      iconoClave8.classList.remove('fa-eye');
      iconoClave8.classList.add('fa-eye-slash');
    }else{
      claveInput8.type = "password";
      iconoClave8.classList.remove('fa-eye-slash');
      iconoClave8.classList.add('fa-eye');
    }
  }

  


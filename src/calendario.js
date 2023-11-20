
//Se almacenan los nombres de los meses
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 
'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
'Octubre', 'Noviembre', 'Diciembre'];

//Se obtiene la fecha actual
const today = new Date();
//Se obtiene el dia de la fecha actual
const day = today.getDate();
//Almacenamos en otra variable el dia de la fecha actual 
const currentDay = today.getDate();
//Se obtiene el mes de la fecha actual
let month = today.getMonth();
//Se obtiene el anio de la fecha actual
let year = today.getFullYear();
//Almacenamos en otra variable el dia de la fecha actual
const currentMonth = month;
//Se obtiene el id del div que contiene el calendario
const divCalendar = document.getElementById('div-calendar');
//Se obtiene el id del div donde se muestre el mes y el anio 
const pMonthYear = document.getElementById('month-year');
//Obtenemos las horas disponibles de las citas medicas segun corresponda, aplicamos trim para que no hayan espacio y poder usar el formato correcto
let horas = document.getElementById('horas-disponibles').textContent.trim();
//Almacenamos las fechas disponibles en un array utilizando el split , para separar correctamente las horas, ya que se estan en ese formato ej: 2023-11-21, 2023-11-30, etc...
let hourAvailable = horas.split(',');
//Se obtiene la primera fecha disponible la mas proxima
let firstHour = hourAvailable[0];
//Eliminamos la primera fecha del array ya que la tenemos almacenada en la variable anterior
hourAvailable.shift();


//Se obtiene el mes siguiente al actual
function getNextMonth() {
    if(month !== 11){
        month++;
    }else {
        year++;
        month = 0;
    }
    calendar();
}

//Evento para cuando el usuario haga click en el boton de mes siguiente
const buttonNextMonth = document.getElementById('next-month');
buttonNextMonth.addEventListener('click', getNextMonth);

//Se obtiene el mes anterior al actual
function getPrevMonth() {
    if(month !== 0) {
        month--;
    }else{
        year--;
        month = 11;
    }
    calendar();
}

//Evento para cuando el usuario haga click en el boton de mes anterior
const buttonPrevMonth = document.getElementById('prev-month');
buttonPrevMonth.addEventListener('click', getPrevMonth);

//Funcion para determinar en que dia va empezar el mes por ejemplo lunes, martes, miercoles, etc...
function startDay() {
    const start = new Date(year, month, 1);
    return(start.getDay());
}

//Funcion para determinar si el anio es bisiesto o no
function leapYear() {
    return year % 4 === 0 ? true : false;
}

//Funcion que tiene un parametro, el cual va a ser el mes para obtener la cantidad de dias segun el mes que corresponda, verificamos todos los casos posibles
function getTotalDays(input) {
    if(input === 0 || input === 2 || input === 4 || input === 6 || input === 7 || input === 9 || input === 11) {
        return 31;
    }else if(input === 1 && leapYear()){
        return 29;
    }else if(input === 1 && !leapYear()){
        return 28;
    }else {
        return 30;
    }
}

//Funcion prioncipal que general el calendario
function calendar() {
    //Se edita el contenido del div por el nombre del mes en el que se encuentra y su anio respectivo
    pMonthYear.textContent = `${months[month]} ${year}`;
    //Limpia el contenido del div del calendario
    divCalendar.innerHTML = "";
    //Almacenamos el dia en el que el mes empieza
    let startDays = startDay();
    //Verificamos si es 0 le damos el valor de 7 que por logica seria el domingo
    if(startDays === 0){
      startDays = 7;
    }

    //Generamos un ciclo for donde hacemos la operacion 2-startDays que es el dia de la semana
    //Por ejemplo si es lunes sera 2-1=1, si es martes 2-2=0, si es miercoles 2-3=-1 y asi sucesivamente...
    //Asi nos aseguramos que el dia 1 siempre corresponda al dia que tiene que ser, y ademas le vamos asignando en el calendario la fecha de los dias del mes anterior
    //Por ejemplo si startDays corresponde a miercoles i va a ser igual a 2-3 que es igual a -1, verificamos la cantidad de dias del mes anterior y vamos rellenando
    //Lunes 30 Martes 31 Miercoles 1 Jueves 2 Viernes 3 Sabado 4 Domingo 5 y asi sucesivamente
    //i va iterando hasta que sea igual al total del dia del mes en el que estamos, donde utilizamos la funcion getToTalDays que ya la explique anteriormente
    for(let i = (2-startDays); i <= getTotalDays(month); i++){
        //Vamos creando botones para todos los dias y le asignamos estilos
        const newButton = document.createElement('button');
        newButton.classList.add('rounded-full');
        newButton.classList.add('w-7');
        newButton.classList.add('h-7');
        // si i es menor a 1 como mencione anteriormente obtenemos los dias del mes anterior
        if(i < 1){
            const totalDaysPrevMonth = getTotalDays(month-1);
            //Le asignamos el valor del dia al button con la siguiente operacion
            //La cantidad de dias del mes anterior + i que en este caso siempre va a ser negativo o 0, por lo cual obtenemos correctamente la fecha
            newButton.textContent = totalDaysPrevMonth + i;
            //Aplicamos estilos al button, un estilo diferente para hacer notar que son dias del mes anterior
            newButton.classList.add('text-teal-800');
            divCalendar.appendChild(newButton);
            //Desactivamos los botones en este caso ya que corresponde al mes anterior
            newButton.disabled = true;
        }else{
            //Vamos creando los butones con los dias del mes
            newButton.textContent = i;
            divCalendar.appendChild(newButton);
            //Desactivamos los botones momentaneamente antes de hacer la verificacion
            newButton.disabled = true;
            //Comparamos la fecha de la cita max proxima disponible con la fecha que se va generando en el calendario
            if(firstHour == `${year}-${month+1}-${i}`){
                //Le cambiamos el fondo para remarcar que en este dia hay horas disponibles
                newButton.classList.add('bg-blue-800');
                //Desactivamos el boton ya que como es la cita max proxima, va a ser la primera en salir en pantalla
                newButton.disabled = true;
                //Verificamos para cada dia si esta incluida la fecha en el array que declaramos anteriormente con todas las fechas disponibles
            }else if(hourAvailable.includes(`${year}-${month+1}-${i}`)){
                //Se cambia el color de fondo para remarcar que en este dia hay horas disponibles
                newButton.classList.add('bg-blue-800');
                //Se activa el boton para que el usuario pueda cambiar a ese dia las horas disponibles
                newButton.disabled = false;
                //Le damos un id
                newButton.id = `button-${i}`;
                //Le asignamos un valor, importante para despues hacer consultas con el servidor
                newButton.value = `${year}-${month+1}-${i}`;
                //Le asignamos el type submit para que funcione como detonante para el formulario
                newButton.type = 'submit';
                //Se utiliza para identifar en que boton se hizo click
                newButton.name = 'action';
            }
        }  
    }
}

//Se genera el calendario
calendar();




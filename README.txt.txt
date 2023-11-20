En la carpeta src encontrara una carpeta llamada baseDeDatos con un archivo llamado CLINICA_BDD que son las sentencias para la creacion de la base de datos
Debe ejecutar todas las sentencias para que funcione correctamente la base de datos
Pasos a tener en cuenta para configurar la base de datos en su computadora:
-Utilizar la herramienta PGADMIN para realizar la configuracion de la bdd
-Tener postgresql instalado
-Configurar el archivo database.js, cambiar los valores de los atributos con sus datos segun corresponda
por lo general los atributos user, host, port son los predeterminados
cambiar la propiedad database por el nombre que usted le va a dar a su database cuando lo cree
cambiar la propiedad password por la clave que usted le indique en el pgadmin
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Clinica',
  password: 'aa11bb22',
  port: 5432,
});
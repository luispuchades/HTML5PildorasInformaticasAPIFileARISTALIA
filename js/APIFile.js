/*global window */
/*global alert */
/*jslint browser: true, for:true */

/**JavaScript Document
 * Ejercicio: HTML5 API File
 * Objetivo: Integración en un solo ejercicio de las vídeos de
 * Píldoras Informáticas sobre el API File
 */

// "use strict";



//1. Definición de Objetos y Variables
var botonExaminar;
var zonaDatos;
var miArchivo;
var nombre;
// Texto entrada para nombres de ficheros o carpetas a crear
var zonaEntrada;
// Texto donde indicar la carpeta de destino
var zonaCarpetaDestino;
var botonLeer;
var botonImagen;
var botonAbrirImagen;
// Declaro el constructor que utilizaré para crear el lector
// var FileReader;


// Acceso a espacio en disco
var espacio;
// Crear archivo
var botonCrearArchivo;
// Crear carpeta
var botonCrearCarpeta;
// Listar archivos
var botonListarArchivos;
// Ruta directorio
var ruta;
// Variable lector
var lector;
// Eliminar Archivo
var botonEliminarArchivo;
// Mover Archivo
var botonMoverArchivo;
// Ir atrás en el directorio
var botonAtras;
// Eliminar Archivo o Carpeta
var botonBorrarArchivoCarpeta;
// Eliminar Directorio
var botonEliminarDirectorio;
// Editar Archivo
var botonEditarArchivo;

//Edición de archivo
// Declaro variable para la zona de introducción de texto
var zonaDatosTexto;
// Declaro variable para la clase de los botones área de texto
var claseTextoArea;
// Variable para identificar los botones que deben estar
// visibles en la página de inicio con la clase mostrar-inicio
var claseMostrarInicio;
// Variabla para identificar los botones que deben estar ocultos
// cuando active el botón de crear archivo
var claseTextoAreaNo;
// Declaro variable para botón que vuelve a visualizar todos los
// botones del inicio en la zona de botones
var botonAtrasTextoArea;
// Declaro la variable para el botón de escribir archivo que
// a su vez, visualiza el textarea para escribir texto.
var botonEscribirArchivo;
//Declaro el area de texto donde introduciré texto
var zonaAreaTexto;
// Declaro la variable para el botón de guardar archivo. Guardará en formato blob el texto introducido en el textarea
var botonGuardarArchivo;






//1.1 Extracción de elementos desde HTML
botonExaminar = document.getElementById("boton-examinar");
botonLeer = document.getElementById("boton-leer");
zonaDatos = document.getElementById("zona-datos");
zonaEntrada = document.getElementById("zona-entrada");
zonaCarpetaDestino = document.getElementById("zona-carpeta-destino");
botonImagen = document.getElementById("boton-imagen");
botonAbrirImagen = document.getElementById("boton-abrir-imagen");
botonCrearArchivo = document.getElementById("boton-crear-archivo");
botonCrearCarpeta = document.getElementById("boton-crear-carpeta");
botonListarArchivos = document.getElementById("boton-listar-archivos");
botonEliminarArchivo = document.getElementById("boton-eliminar-archivo");
botonEliminarDirectorio = document.getElementById("boton-eliminar-directorio");
botonMoverArchivo = document.getElementById("boton-mover-archivo");
botonAtras = document.getElementById("boton-atras");
botonBorrarArchivoCarpeta = document.getElementById("boton-borrar-archivo-carpeta");
botonEditarArchivo = document.getElementById("boton-editar-archivo");
zonaDatosTexto = document.getElementById("zona-datos-texto");
claseTextoArea = document.getElementsByClassName("texto-area");
claseMostrarInicio = document.getElementsByClassName("mostrar-inicio");
claseTextoAreaNo = document.getElementsByClassName("texto-area-no");
botonAtrasTextoArea = document.getElementById("boton-atras-texto-area");
botonEscribirArchivo = document.getElementById("boton-escribir-archivo");
botonGuardarArchivo = document.getElementById("boton-guardar-archivo");
zonaAreaTexto = document.getElementById("zona-area-texto");


//2. Definición de Funciones


function rellenarEntrada() {
    "use strict";

// Introducimos el nombre del fichero en el campo de texto
// del nombre
    zonaEntrada.value = nombre;
}


function mostrarImagen(e) {
    "use strict";

    var resultado;
    resultado = e.target.result;

    nombre = miArchivo.name;
    zonaDatos.innerHTML += "<img src = '" + resultado + "' width='100%'>";
}


function mostrarLector(e) {
    "use strict";
// Le pasamos el objeto que desencadena el evento "lector"
// en el momento en el que ocurre el evento "load" de la
// función "seleccionarArchivo". En este caso, la "e"
// esta haciendo referencia al lector.

// Asignamos a la variable resultado, el resultado del objeto
// lector con result
// OJO >> EJECUTA CODIGO HTML. NO SOLO MUESTRA TEXTO.
    var resultado;

    resultado = e.target.result;
    nombre = miArchivo.name;

// Vaciamos la zona de datos
//    zonaDatos.innerHTML = "";

//    zonaDatos.innerHTML = nombre + "<br />" + "<br />";
    zonaDatos.innerHTML += "<p>" + resultado + "</p>";
// Si en lugar de usar innerHTML usamos textContent, no ejecuta código HTML
//    zonaDatos.textContent = resultado;
//    zonaEntrada.value = nombre;
    rellenarEntrada();
}


function seleccionarImagen(e) {
    "use strict";

    var archivos;

// Reseteamos la variable nombre para evitar que quede de alguna
// seleccion anterior
    nombre = "";
// Resteamos la zona de datos
    zonaDatos.innerHTML = "";

    archivos = e.target.files;
    miArchivo = archivos[0];

    if (!miArchivo.type.match(/image/)) {
        alert("Por favor, seleccione una imagen. Para archivos de texto, escoja en el menú la opción 'Leer fichero texto'");
        zonaDatos.innerHTML = "Información no disponible";
    } else {
        zonaDatos.innerHTML += "Nombre del archivo: " + miArchivo.name + "<br />";
        zonaDatos.innerHTML += "Tamaño del archivo: " + Math.round(miArchivo.size / 1024) + "Kb" + "<br />";

        lector = new FileReader();

        lector.readAsDataURL(miArchivo);
        lector.addEventListener("load", mostrarImagen, false);
    }
}


function seleccionarArchivo(e) {
    "use strict";

    var archivos;

// Reseteamos la variable nombre para evitar que quede de alguna
// seleccion anterior
    nombre = "";
// Resteamos la zona de datos
    zonaDatos.innerHTML = "";

// Le pasamos como parámetro el objeto "e" generado por
// el evento "change" de botonExaminar.addEventListener.

// Almacenamos en una matriz bajo la variable archivos todos los archivos
// que capturamos con el objeto "e" al desencadenar el evento archivos
// y aplicarle la propiedad files, que registra todos los archivos como matriz.
    archivos = e.target.files;

// Seleccionamos el primer archivo del array archivos indicando
// entre corchetes el 0, puesto que el 0 corresponde al primer
// elemento del array

    miArchivo = archivos[0];

    if (miArchivo.type.match(/image/)) {
        alert("Por favor, seleccione un archivo de texto. Para imágenes, escoja en el menú la opción 'Abrir imagen'");
        zonaDatos.innerHTML = "Información no disponible";
    } else {
        zonaDatos.innerHTML += "Nombre del archivo: " + miArchivo.name + "<br />";
        zonaDatos.innerHTML += "Tamaño del archivo: " + Math.round(miArchivo.size / 1024) + "Kb" + "<br />";

// Creamos el lector:
// Necesitamos un lector para poder leer la información que
// nos devuelven los métodos del objeto devuelto

        lector = new FileReader();

// Le decimos al nuevo objeto "lector" que lea "miArchivo". Hay
// que pasarle como segundo parámetro la codificación de texto

        lector.readAsText(miArchivo, "iso-8859-1");

// OJO - Ponemos el lector a la escucha. Cuando cargue el
// lector, asignaremos una función para que muestre el contenido
// del archivo. HAY QUE ESPERAR A QUE CARGUE TODA LA LECTURA

        lector.addEventListener("load", mostrarLector, false);
    }
}


function examinarImagen() {
    "use strict";

    document.getElementById("boton-imagen").click();
    botonImagen.addEventListener("change", seleccionarImagen, false);
}


function examinarArchivo() {
    "use strict";

// Provocamos el click del botonExaminar (boton-examinar) puesto
// que al haberlo ocultado y trasladado sus funciones al
// botonLeer, hay que provocar su click desde código
// EXCELENT HINT
    document.getElementById("boton-examinar").click();

// El botón "boton-examinar" es un input tipo file que genera un
// objeto. Este objeto es la selección de un fichero que pasamos
// a la función seleccionarArchivo como parámetro.
    botonExaminar.addEventListener("change", seleccionarArchivo, false);
}



function errores(error) {
    "use strict";

// Pasamos como parámetro "error" el objeto que desencadena
// RequestFileSystem si se produce un error y lo notificamos
// al usuario con una alerta
    alert("El sistema ha detectado un error: " + error.code);
}

function cambiarDirectorio(nuevaRuta) {
    "use strict";

    zonaEntrada.value = nuevaRuta;
    ruta = ruta + nuevaRuta + "/";

    mostrarFicheros();
}

//function cuadroHola() {
//    "use strict";
//
//    alert("Click");
//}



function exitoCargaContenidoArchivo(entrada) {
    "use strict";

    var resultado;
    resultado = entrada.target.result;
    zonaAreaTexto.innerHTML = resultado;
}



function leerContenidoArchivo(archivo) {
    "use strict";
//    var lector;

    zonaAreaTexto.innerHTML = "";
//    zonaAreaTexto.innerHTML = "Nombre: " + archivo.name + " ";
//    zonaAreaTexto.innerHTML += "Tamaño: " + archivo.size + " " + "bytes" + " ";

// Leemos el contenido del archivo
    lector = new FileReader();
    lector.onload = exitoCargaContenidoArchivo;
    lector.readAsText(archivo);

}





function editarLeerArchivos(archivo) {
    "use strict";

//  Cambiamos a visualización de botones para lectura/edición de archivo

    mostrarZonaDatosTexto();
    mostrarAreaTextoZonaFichero();

//Incorporamos a la casilla zona-entrada el nombre del archivo
//al que le hemos hecho "click"
    zonaEntrada.value = archivo;

//Extraemos el valor del archivo "archivo"
    espacio.getFile(archivo, {create: true, exclusive: false}, function (contenido) {
        contenido.file(leerContenidoArchivo, errores);
    }, errores);
}



function pasarArchivo(archivo) {
    "use strict";

    zonaEntrada.value = archivo;
}



function listarArchivos(archivos) {
    "use strict";
    var i;

    for (i = 0; i < archivos.length; i = i + 1) {
        if (archivos[i].isFile) {
            zonaDatos.innerHTML += "<span class='texto-archivo' onclick= 'pasarArchivo(\"" + archivos[i].name + "\")' ondblclick='editarLeerArchivos(\"" + archivos[i].name + "\");'>" + archivos[i].name + "</span><br />";
        } else if (archivos[i].isDirectory) {
            zonaDatos.innerHTML += "<span class='texto-directorio' onclick = 'pasarArchivo(\"" + archivos[i].name + "\")' ondblclick='cambiarDirectorio(\"" + archivos[i].name + "\")'>" + archivos[i].name + "</span><br />";
        }
    }
}



function leerArchivos() {
    "use strict";

    lector.readEntries(function (archivos) {
        if (archivos.length) {
            listarArchivos(archivos);
        }
    }, errores);
}



function leerDirectorio(directorio) {
    "use strict";

// Creamos el lector. y le asignamos el createReader del objeto directorio que nos pasa la función getDirectory
// El méxodo createReader genera un objeto directoryReader que
// almacenamos dentro de la variable lector, con lo que ya podemos
// acceder a las propiedades y métodos de directoryReader. Uno
// de los métodos de directoryReader es readEntries que es el
// encargado de leer las entradas del directorio en el que nos
// encontramos
    lector = directorio.createReader();
// Leemos las entradas del directorio creado
    leerArchivos();
}



function mostrarFicheros() {
    "use strict";

    document.getElementById("zona-entrada").value = "";
    zonaDatos.innerHTML = "";
    espacio.getDirectory(ruta, null, leerDirectorio, errores);
}



function crearSys(sys) {
    "use strict";

// Pasamos como parámetro "sys" que es el objeto que
// desencadena el méxodo RequestFileSystem.
// Asignamos a la variable pública espacio la raiz de archivos
// del parámetro pasado "sys".
    espacio = sys.root;

// Reservo a una variable ruta vacia el valor futuro del
// directorio
    ruta = "";
}


function accesoEspacio() {
    "use strict";

    var espacioSolicitado;

// Pendiente ajustar para Mozilla
//Asegurando la compatibilidad entre navegadores
//    window.RequestFileSystem = window.RequestFileSystem || window.webkitRequestFileSystem;
    espacioSolicitado = 0.1 * 1024 * 1024;

//Indicamos que requerimos un espacio permanente (persistente)
    window.webkitRequestFileSystem(window.PERSISTENT, espacioSolicitado, crearSys, errores);
}



function eliminarArchivo() {
    "use strict";

    var zonaEntradaValor;

    zonaEntradaValor = zonaEntrada.value;
    zonaEntradaValor = ruta + zonaEntradaValor;

    espacio.getFile(zonaEntradaValor, null, function (archivo) {
        archivo.remove(mostrarFicheros, errores);
    }, errores);
}



function eliminarCarpeta() {
    "use strict";

    var zonaEntradaValor;

    zonaEntradaValor = zonaEntrada.value;
    zonaEntradaValor = ruta + zonaEntradaValor;

    espacio.getDirectory(zonaEntradaValor, null, function (dir) {
        dir.remove(mostrarFicheros, errores);
    }, errores);
}



function mostrarArchivo(entrada) {
    "use strict";

// Vaciamos la casilla de texto
//    document.getElementById("zona-entrada").value = "";

// Mostramos en zona-datos el fichero creado
    zonaDatos.innerHTML = "Éxito en la creación de espacio y archivo" + "<br />";
    zonaDatos.innerHTML += "Nombre archivo: " + entrada.name + "<br />";
    zonaDatos.innerHTML += "Ruta: " + entrada.fullPath + "<br />";
}



// Comprobamos si el fichero escrito en la entrada es un fichero
// o es una carpeta y direccionamos en borrado en función del
// resultado
function revisarTipoEntrada(entradas) {
    "use strict";

    var zonaEntradaValor;
    var i;

    zonaEntradaValor = zonaEntrada.value;

    if (zonaEntradaValor !== "") {

        for (i = 0; i < entradas.length; i = i + 1) {
            if ((entradas[i].isDirectory) && (entradas[i].name === zonaEntradaValor)) {
                eliminarCarpeta();

            } else if ((entradas[i].isFile) && (entradas[i].name === zonaEntradaValor)) {
                eliminarArchivo();
            }
        }

        document.getElementById("zona-entrada").value = "";
        document.getElementById("zona-datos").value = "";
    } else {
        alert("Para poder eliminar un documento o carpeta, debes indicar el nombre de uno de los ya existentes en el campo correspondiente. En caso de que sea un documento, debes incorporar la extensión del mismo separado por un punto. Deben respetarse las mayúsculas.");
    }
}



function revisarSiEntrada() {
    "use strict";

    lector.readEntries(function (archivos) {
        if (archivos.length) {
            revisarTipoEntrada(archivos);
        } else {
            alert("No exiten actualmente ni archivos ni carpetas que poder borrar.");
        }
    }, errores);
}



function revisarArchivoCarpeta(directorio) {
    "use strict";

    lector = directorio.createReader();
    revisarSiEntrada();
}



function borrarArchivoCarpeta() {
    "use strict";

    espacio.getDirectory(ruta, null, revisarArchivoCarpeta, errores);
}



function crearCarpeta() {
    "use strict";
    var zonaEntradaValor;

    zonaEntradaValor = zonaEntrada.value;


    if (zonaEntradaValor !== "") {
        zonaEntradaValor = ruta + zonaEntradaValor;

        espacio.getDirectory(zonaEntradaValor, {create: true, exclusive: false}, mostrarArchivo, errores);
    } else if (zonaEntradaValor === "") {
        alert("No has introducido ningún nombre");
    }
}



function mostrarInicioZonaFichero() {
    "use strict";

    var n;
    var i;

    for (n = 0; n < claseTextoArea.length; n = n + 1) {
        claseTextoArea[n].style.display = "none";
    }

    for (i = 0; i < claseMostrarInicio.length; i = i + 1) {
        claseMostrarInicio[i].style.display = "inline-block";
    }

    zonaEntrada.value = "";
    zonaDatos.style.display = "inline-block";
    zonaDatosTexto.style.display = "none";
    mostrarFicheros();
}



function mostrarAreaTextoZonaFichero() {
    "use strict";

// uso la variable n para los no
    var n;
// uso la variable i para los yes
    var i;

// Ocultamos todos los botones que no tienen que aparecer cuando
// creamos o editamos un archivo

    for (n = 0; n < claseTextoAreaNo.length; n = n + 1) {
        claseTextoAreaNo[n].style.display = "none";
    }

    for (i = 0; i < claseTextoArea.length; i = i + 1) {
        claseTextoArea[i].style.display = "inline-block";
    }
}



function mostrarZonaDatos() {
    "use strict";

    zonaDatosTexto.style.display = "none";
    zonaDatos.style.display = "inline-block";
}



function mostrarZonaDatosTexto() {
    "use strict";

    zonaDatos.style.display = "none";
    zonaDatosTexto.style.display = "inline-block";
}



function escrituraCorrecta() {
    "use strict";

    mostrarZonaDatos();
    zonaDatos.innerHTML = "Archivo guardado con éxito";
    zonaAreaTexto.value = "";
    zonaDatos.value = "";
}



function escribirContenido(fileWriter) {
    "use strict";

    var blob;
    var zonaAreaTextoValor;


    zonaAreaTextoValor = zonaAreaTexto.value;

    fileWriter.onwriteend = escrituraCorrecta();

    blob = new Blob([zonaAreaTextoValor], {type: "text/html"});

    fileWriter.write(blob);

//Intentar borrar el contenido de zonaAreaTexto
    zonaAreaTextoValor = "";
}



function guardarArchivo() {
    "use strict";


    var zonaEntradaValor;

    zonaEntradaValor = zonaEntrada.value;

    espacio.getFile(zonaEntradaValor, null, function (entrada) {
        entrada.createWriter(escribirContenido, errores);
    }, errores);
}



function escribirArchivo() {
    "use strict";

    mostrarZonaDatosTexto();
    zonaAreaTexto.focus();
}



function crearArchivo() {
    "use strict";



    var zonaEntradaValor;
// Definimos el valor de la casilla zona-entrada en una variable
    zonaEntradaValor = zonaEntrada.value;

// Si se propone un nombre de archivo, entonces si crea con getFile
// siempre que no exista otro anterior o con el mismo nombre.
    if (zonaEntradaValor !== "") {
        zonaEntradaValor = ruta + zonaEntradaValor;

// Dejamos solo visibles los botones de edición de textarea
        mostrarAreaTextoZonaFichero();

        espacio.getFile(zonaEntradaValor, {create: true, exclusive: false}, mostrarArchivo, errores);

    } else if (zonaEntradaValor === "") {
        alert("No has introducido ningún nombre");
    }
// Si sustituimos getFile() por getDirectory, lo que creamos es un directorio
// espacio.getdirectory(nombreArchivo, {create: true, exclusive: false}, mostrarArchivo, errores)
}



function moverArchivo() {
    "use strict";

// Asignamos el valor del campo de cada entrada a una variable
    var zonaEntradaValor = zonaEntrada.value;
    var zonaCarpetaDestinoValor = zonaCarpetaDestino.value;


// Comprobamos que las dos entradas contienen valor
// Si no contienen valor entonces generamos error
    if (zonaEntradaValor !== "") {
        // Si esiste un fichero, asignamos la ruta al mismo
        zonaCarpetaDestinoValor = ruta + zonaCarpetaDestinoValor;

        // Ejecutamos el traslado del fichero a la carpeta definida
        espacio.getFile(zonaEntradaValor, null, function (archivoActual) {
            espacio.getDirectory(zonaCarpetaDestinoValor, null, function (dirActual) {
                archivoActual.moveTo(dirActual, null, function () {
                    zonaEntrada.value = "";
                    zonaCarpetaDestino.value = "";
                    mostrarFicheros();
                }, errores);
            }, errores);
        }, errores);
    } else if ((zonaEntradaValor === "") || (zonaCarpetaDestinoValor === "")) {
        alert("Comprueba que has introducido nombre del fichero y de carpeta de destino");
    }
}



function volverAtras() {
    "use strict";

// Lo primero que tenemos que hacer es saber en que directorio
// nos encontramos.
// "espacio" es la variable creada para almacenar nuestro
// contenido en el disco duro y contiene la raiz de archivos.

    espacio.getDirectory(ruta, null, function (dirActual) {
        dirActual.getParent(function (dirParent) {
            ruta = dirParent.fullPath;
            mostrarFicheros();
        }, errores);
    }, errores);
}


// PENDIENTE REALIZAR COMPROBACION DE CAMPO VACIO DE ENTRADA
// PARA QUE SAQUE MENSAJE DE AVISO DE QUE SE TIENE QUE COMPLETAR
function eliminarDirectorio() {
    "use strict";

    var zonaEntradaValor;
    zonaEntradaValor = zonaEntrada.value;

    espacio.getDirectory(zonaEntradaValor, null, function (dir) {
        dir.removeRecursively(function () {
            alert("Directorio completo eliminado");
        });
    }, errores);
    document.getElementById("zona-entrada").value = "";
    document.getElementById("zona-datos").value = "";
    mostrarFicheros();
}



function funcionDesahabilitada() {
    "use strict";

    alert("Función deshabilitada temporalmente");
}




function comenzar() {
    "use strict";

    var espacioSolicitado;



// **** CREAR ARCHIVO ****
/**
 * Determinamos si el espacio debe ser temporal o permanente
 * no es estandard y hay que usar prefijos de navegador
 * (webkit, moz y ms).
 * Pedimos permiso al navegador para acceder a nuestro disco duro
 * Reservamos con requestQuota 0.5MB = (0.5 * 1024 bits/KB *...
 * ... * 1024 KB/MB)
 */

    espacioSolicitado = 1024 * 1024;
    navigator.webkitPersistentStorage.requestQuota(espacioSolicitado, accesoEspacio);
//    navigator.mozPersistentStorage.requestQuota(0.5 * 1024 * 1024, accesoEspacio);

// Reseteamos el contenido de la casilla de texto zona-entrada
    zonaEntrada.value = "";
// Reseteamos el contenido de la casilla de zona-carpeta-destino
    zonaCarpetaDestino.value = "";

// Utilizamos el botonLeer para llamar a una función que active
// el botonExaminar que es un input type file. Sustituimos el
// botón porque el diseño de un input type file es rígido. No se
// puede modificar su contenido y es muy complicado modificar su
// diseño. Con un input type button si se puede hacer lo que
// queramos en diseño.

    botonLeer.addEventListener("click", examinarArchivo, false);

    botonAbrirImagen.addEventListener("click", examinarImagen, false);

// En caso de escribir un nombre en zonaEntrada crearemos un
// archivo con gerFile() dentro de una funcion crearArchivo
    botonCrearArchivo.addEventListener("click", crearArchivo, false);

    botonCrearCarpeta.addEventListener("click", crearCarpeta, false);

    botonListarArchivos.addEventListener("click", mostrarFicheros, false);

    botonEliminarArchivo.addEventListener("click", eliminarArchivo, false);

    botonMoverArchivo.addEventListener("click", moverArchivo, false);

    botonAtras.addEventListener("click", volverAtras, false);

    botonBorrarArchivoCarpeta.addEventListener("click", borrarArchivoCarpeta, false);

    botonEliminarDirectorio.addEventListener("click", eliminarDirectorio, false);

    botonAtrasTextoArea.addEventListener("click", mostrarInicioZonaFichero, false);

    botonEscribirArchivo.addEventListener("click", escribirArchivo, false);

    botonGuardarArchivo.addEventListener("click", guardarArchivo, false);

    botonEditarArchivo.addEventListener("click", funcionDesahabilitada, false);

    //TODO: Listar archivos actuales al inicio

}



//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);

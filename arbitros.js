const puntF = document.querySelector("#pF");
const outputF = document.querySelector("#pF-output");
const puntT = document.querySelector("#pT");
const outputT = document.querySelector("#pT-output");

outputF.textContent = puntF.value;
outputT.textContent = puntT.value;

puntF.addEventListener("input", function () {
  outputF.textContent = puntF.value;
});

puntT.addEventListener("input", function () {
  outputT.textContent = puntT.value;
});

$("#actualizar").on("click", function () {
  window.location.reload();
});


//**********************************/
//nuevo
const idUserConected = document.querySelector("#idUserConected");
console.log(idUserConected.value);//para comprobar el id del participante.
//nuevo
const nulo = document.querySelector("#nulo");//para poder agregarle disabled
const evaluar = document.querySelector("#evaluar");//para poder agregarle disabled

console.log("conectado");//prueba de que esta conectado
//Al hacer 'click', agrego los datos de puntaje y del id del participante y lo agrego a un array.
$("#evaluar").click(function () {
  let datos = {
    idUser: parseInt(idUserConected.value),
    puntF: puntF.value,
    puntT: puntT.value,
  };
  console.log(datos);//prueba de los datos a enviar.
  //hago la conexión con el archivo 'post.php', para que envíe los datos almacenados.
  $.ajax({
    url: "post.php",//acá va el archivo a donde va a enviar los datos.
    type: "POST",//agrego el metodo de envio, 'post' para que sea seguro.
    data: datos,//envío los datos
  })
  //esto es para que cuando envíe los datos, desde 'post.php', me reenvía lo que quiero mostrar(desde el 'echo...' de php) mas que nada son pruebas.
  .done(function (res) {
    console.log(res);//pruebas de lo que llega
    //agrego a los botones los atributos 'disabled', para que no pueda enviar más puntajes. SI REFRESCA LA PÁGINA SE VUELVE A HABILITAR!!
    nulo.setAttribute("disabled", "");
    evaluar.setAttribute("disabled", "");
    $("#respuesta").html(res);//prueba de lo que devuelve desde 'post.php', y lo muestra en un div que agregue.. se puede borrar tranquilamente.
  });
});

//Si el arbitro quiere anular su voto, asumo que los puntajes a enviar son 0 (cero). y sigue la misma lógica que el de arriba.
$("#nulo").click(function () {
  console.log("click en Nulo.");
  let datos = {
    idUser: parseInt(idUserConected.value),
    puntF: 0,
    puntT: 0,
  };
  console.log(datos);
  $.ajax({
    url: "post.php",
    type: "POST",
    data: datos,
  }).done(function (res) {
    console.log(res);
    nulo.setAttribute("disabled", "");
    evaluar.setAttribute("disabled", "");
    $("#respuesta").html(res);
  });
});

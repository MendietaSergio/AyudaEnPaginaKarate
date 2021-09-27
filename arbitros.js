const puntF = document.querySelector('#pF')
const outputF = document.querySelector('#pF-output')
const puntT = document.querySelector('#pT')
const outputT = document.querySelector('#pT-output')


const idUserConected = document.querySelector('#idUserConected');
console.log(idUserConected.value);

const nulo = document.querySelector('#nulo');
const evaluar = document.querySelector('#evaluar');


outputF.textContent = puntF.value
outputT.textContent = puntT.value

puntF.addEventListener('input', function() {
	outputF.textContent = puntF.value
});

puntT.addEventListener('input', function() {
	outputT.textContent = puntT.value
});



$('#actualizar').on('click',function(){
	window.location.reload();
});
//**********************************/

console.log("conectado");
$('#evaluar').click(function(){
            let datos = {
                idUser: parseInt(idUserConected.value),
                puntF: puntF.value,
                puntT: puntT.value,
            }
			console.log(datos);
            $.ajax({
                url:'post.php',
                type:'POST',
                data: datos,
            })
            .done(function(res){
                console.log(res)
                nulo.setAttribute("disabled","")
                evaluar.setAttribute("disabled","")
                $('#respuesta').html(res)
            })
        })

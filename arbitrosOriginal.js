const puntF = document.querySelector('#pF')
const outputF = document.querySelector('#pF-output')
const puntT = document.querySelector('#pT')
const outputT = document.querySelector('#pT-output')


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


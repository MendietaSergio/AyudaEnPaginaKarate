<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">	   
	    <link rel="stylesheet" type="text/css" href="../css/arbitro.css">	 
	    <title>Arbitro</title>
	</head>
	<body>
		<div id="container">
	    <header>
	    	<form class="cerrar-sesion" >
	    			<button type="submit" id="cerrar" name="cerrar">Cerrar Sesion</button>
	    			<button id="actualizar">Actualizar</button>
			</form>    		
				
	    </header>
		<h3 id="UserConected">Conectado:</h3>
			<input id="idUserConected" hidden type="text" value="2">
			<form id="evaluacion" action="backend.php" method="POST">
				<fieldset id="datos-competidor">
					<legend> DATOS COMPETIDOR</legend>
					<div>
						<label for="nya">APELLIDO Y NOMBRE:</label><br>
						<div id="nya">Nombre del competidor</div>	
					</div>
					<div>
						<label for="categoria">CATEGORIA:</label><br>
						<div id="cat">Categoria del competidor</div>
					</div>

				</fieldset>
				<div  id="titulo-puntajes">
					<label>PUNTAJES</label><br>
				</div>
				
				<div id="div-puntajes">
					
					<fieldset class="puntajes">
						<legend>ATLETICO</legend>
						<input type="range" name="pF" id="pF" min="5" max="10" step="0.2" value="5">
						<b><div class="puntos" id="pF-output" for="pF"></div></b>
					</fieldset class="puntajes">

					<fieldset class="puntajes">
						<legend>TECNICO</legend>
						<input type="range" name="pT" id="pT" min="5" max="10" step="0.2" value="5"><br>
						<b><p class="puntos" id="pT-output" for="pT" ></p></b>
					</fieldset>

				</div>
				<div id="terminar">
					<button type="button" id="nulo">VOTAR NULO</button>
					<button type="button"  id="evaluar">EVALUAR</button>
				</div>
			</form>		  		
	    </div>
		<div id="respuesta">

		</div>
	    <div id="info"></div>
	    <div id="help">
	    	<p><i>Si no ves la informacion del competidor, actualiza la pantalla con el boton actualizar. Si aun asi no los ves
	    	seguramente aun no se ha iniciado la evaluacion.</i></p>
	    </div>
		<footer>
			<fieldset id="footer"><h4>Copyright - Todos los derechos reservados. <br>Web Diseñada por RILA</h4></fieldset>
			
		</footer>  
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>  			
		<script type="text/javascript" src="arbitros.js"></script>	
			
	</body>
	</html>
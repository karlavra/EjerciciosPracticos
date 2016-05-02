function promediodealtura(){
	var personas= parseInt(prompt("Ingrese cantidad de personas"));
	var i=1;
	var suma=null;
	while(i<=personas){
		var altura= parseFloat(prompt("Ingrese la altura" +i+ ":"));
		suma= suma+ parseFloat(altura);
		i++
	}
	var promedio= suma/personas;
	alert("El promedio de altura es"+ promedio);
}
promediodealtura()

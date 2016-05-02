function ahorro(){
	var ahorro= null;
	for(var i=1; i<=12; i++){
		var saldo=parseInt(prompt("Deposito del mes " +i+ ":"));
		ahorro= ahorro + saldo;
	}
	alert("El ahorro anual es :"+ ahorro);
}
ahorro();
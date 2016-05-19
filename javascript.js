
choix_nombre= function nombre(resultat){
	if (resultat<= 10000){
		return resultat;
	}

	else if (resultat>= 500){
		return resultat;
	}

	else if (resultat%500=0){
		return resultat;
	}

	else {
		return console.log("nombre choisit Incorrect");
	}
}


/*choix_nombre= function nombre(resultat){
	var a= resultat
	for (var i = 500; i <= 10000; i=i+500) {
		
	}
	return a
}
*/
avec_anneau= function anneau(){

	var condition_un= choix_nombre*0.50;
	return condition_un;
}

avec_laser= function laser(){
		var condition_deux= choix_nombre*1.80;
	return condition_deux;
}

avec_seri_un= function isserun(){
	var condition_trois= choix_nombre*2.10;
	return condition_trois;
}

avec_seri_deux= function isserdeux(){
	var condition_quatre= choix_nombre*2.29;
	return condition_quatre;
}

total_1= function totalun(){
	return avec_laser+avec_anneau+avec_seri_deux+avec_seri_un;
}

frais_port= function frais(){
	if (choix_nombre=500){
		return total_1+5,90;
	}

	else if (choix_nombre>500){
		for (i=O; i<=10000; i+500){
			var a= i+5.90+ 2;
			return a;
		}
	return a;
}

total= function total(htc){
	return frais_port+total_1;
}



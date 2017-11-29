window.addEventListener('load', function(event){
  var chooseGeneration = document.querySelector('.choose-sede-generation');
  console.log(chooseGeneration);
  debugger
  chooseGeneration.addEventListener('click', function(e){
    var count = 0;
	/*Vamos a recorrer las SEDES*/
	
	for(var i = 0; i < Object.keys(data).length; i++){
	  count++;
      var listCity = document.createElement('optgroup');
	  listCity.setAttribute('label',Object.keys(data)[i]);
	  var listText = document.createTextNode(Object.keys(data)[i]);
	  listCity.appendChild(listText);
	  chooseGeneration.appendChild(listCity);
	  
	  for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
	    /*count++;*/
		var listGeneration = document.createElement('option');
		var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
		listGeneration.appendChild(textGeneration);
		listCity.appendChild(listGeneration);
		  
	  }
	}
  });
  
});

/*
var nuevo = data.LIM["2017-2"].students;
console.log(nuevo);// 14 alumnos (Cada alumno 4 objetos)

console.log(nuevo[0].active);

var alumnos = Object.keys(nuevo);//["name", "photo", "active", "sprints"]






var cont=0;
debugger
for (var i = 0; i<=nuevo.length; i++) {
   if (nuevo[i]['active']=== true){
       cont++;
   }
}
console.log(cont);

/*

var cont=0;
for(var i = 0; i<=nuevo.length; i++){
   for(var j = 0 ; j<= alumnos[j].length; j++){
       if(Object.keys(nuevo[i]).active){
           cont++;
       }
   }
}
*/

// Puedes hacer uso de la base de datos a través de la variable `data`


console.log(data);

window.addEventListener('load', function(event){
  var chooseGeneration = document.querySelector('.choose-sede-generation');
  console.log(chooseGeneration);
  
  chooseGeneration.addEventListener('click', function(e){
    var count;
	/*Vamos a recorrer las SEDES*/
	for(var i = 0; i <= Object.keys(data).length; i++){
	  count++;
      var listCity = document.createElement('option');
	  var listText = document.createTextNode('bla');
	  listCity.setAttribute("value","bla");
	  listCity.appendChild(listText);
	  chooseGeneration.appendChild(listCity);
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

window.addEventListener('load', function(event){

  var chooseGeneration = document.querySelector('.choose-sede-generation');
  var optgroupt =document.getElementById('optgroupt');
  var generation = document.getElementById('generation');
  var enrollment = document.getElementById('enrollment');
  
  optgroupt.addEventListener('change', function(event){
    //debugger
    //console.log(event.target.value);
    
    for(var i = 0; i <= Object.keys(data).length; i++){
      if(event.target.value === Object.keys(data)[i]){
        for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
          /*creando los option */
          var listGeneration = document.createElement('option');
          listGeneration.classList.add('generation');
          var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
          listGeneration.appendChild(textGeneration);
          generation.appendChild(listGeneration);
          /*hacer un bucle para que recorra el contenido de Generation y si tiene contenido igual a sede, dejarlo, si no , borrarlo*/
          if(generation[j]){
            console.log(generation[j].value);
          } /*falta var classie = document.getElementsByClassName[1]
          undefined
          classie
          undefined
          classie = document.getElementsByClassName('generation')[1]
          <option class=​"generation">​2016-2​</option>​
          classie
          <option class=​"generation">​2016-2​</option>​
          classi = document.getElementsByClassName('generation')
          (3) [select#generation.generation, option.generation, option.generation, generation: select#generation.generation]
          classi[1]
          <option class=​"generation">​2016-2​</option>​
          llamar por clase y posición i o j
          */
        }    
      }
    }
  });

    
});

    
    /*generation.addEventListener('toggle', myFunction);
    });  
    function myFunction() {
      alert("The ontoggle event occured.");
    } */
 

//debugger
/*
console.log(Object.keys(data));//["AQP", "CDMX", "LIM", "SCL"]
console.log(Object.values(data));//[{…}, {…}, {…}, {…}]
console.log(Object.values(data)[0]);
console.log([...Object.values(data)])
console.log([...Object.values(data)][0])
console.log(Object.values(data)[0])
console.log(Object.keys(Object.values(data)[0]).length);
//console.log(Object.keys(Object.keys(data)));
var sedes=Object.keys(data);
//debugger
/*
Para crear dinámicamente el select que está en el lado derecho.
Lo hace Gaby
for(var i =0; i<Object.keys(data).length;i++){
    
    for(var j =0; j< Object.keys(Object.keys(data)[i]).length;j++){
       console.log(array.push(Object.keys(Object.values(data)[j])));
    }
  
}*/

 
  
  // Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', function(event){

  var chooseGeneration = document.querySelector('.choose-sede-generation');
  var optgroupt =document.getElementById('optgroupt');
  var generation = document.getElementById('generation');
  var enrollment = document.getElementById('enrollment');
  
  
  optgroupt.addEventListener('change', function(event){
    //debugger
    console.log(event.target.value);
    
    for(var i = 0; i <= Object.keys(data).length; i++){
      if(event.target.value === Object.keys(data)[i]){
        for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
          /*creando los option */
          var listGeneration = document.createElement('option');
          listGeneration.classList.add('generation-sede');
          var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
          listGeneration.appendChild(textGeneration);
          generation.appendChild(listGeneration);

        }
        optgroupt.addEventListener('click', function(){
            var sede = document.getElementsByClassName('generation-sede');
            for(var k = 0; k < sede.length; k++){
              generation.removeChild(sede[k]);
            }
          });   
      }
    }
    
    /*STUDENT SATISFACTION */
    for (var satisfaction in data) {
      if(satisfaction === event.target.value){ //reemplazar por dataalumns en el evento al jalar optgroupt
        var dataSatisfaction = {};
        dataSatisfaction = data[satisfaction];
      }     
    }
    console.log(dataSatisfaction); //{2017-1: {…}, 2017-2: {…}} --> value de cada sede

    //Contenido de cada generación guardado en dataS
    for(var g in dataSatisfaction){
      var dataG = {};
      dataG = dataSatisfaction[g];
    }
    console.log(dataG); //{students: Array(14), ratings: Array(2)}
    console.log(dataG.ratings); //Objeto contenido en "ratings"
    
    //accediendo a student y su contenido
    for (var s in dataG.ratings){
      var bla = {};
      bla = dataG.ratings[s];
      var bla2 = bla.student;
      /*var dataRating = {};
      if (dataG === ratings){
        dataRating = dataG;
      }*/
      //dataRating = dataG[s];
    }
    console.log(bla);
    console.log(bla.student);
    console.log(bla2);
    console.log(s);
    


  });

   
});

  
  
  
  /*Evento para el student satisfaction 
  var sedevalue = Object.values(data); //Array del contenido de cada sede
  console.log(sedevalue.length);
    debugger
    for( var l = 0; l < sedevalue.length; l++ ){
      console.log(sedevalue[l]);
      for (var m = 0; m < sedevalue[l].length; m++){
        console.log(sedevalue[sedevalue[m]]);
      }
  }
  console.log(sedevalue[0]["2016-2"]["ratings"][0]["jedi"]); */
window.addEventListener('load', function(event){
  
      var chooseGeneration = document.querySelector('.choose-sede-generation');
      var optgroupt =document.getElementById('optgroupt');
      var generation = document.getElementById('generation');
      var enrollment = document.getElementById('enrollment');
    
      optgroupt.addEventListener('click', function(event){
  
          console.log(event.target.value)
          for(var i = 0; i < Object.keys(data).length; i++){
              if(event.target.value === Object.keys(data)[i]){
                  for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
                      var listGeneration = document.createElement('option');
                      listGeneration.classList.add('generation');
                      var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
                      listGeneration.appendChild(textGeneration);
                      generation.appendChild(listGeneration);
                  }
   
              }
          }
        
          generation.classList.remove('display-none');
         
          generation.addEventListener('change', function(event){
              console.log(event.target.value);
  
          });
  
  
  
      });
  
  /*
  
  
  
        for(var i = 0; i < Object.keys(data).length; i++){
          var listCity = document.createElement('optgroupt');
          listCity.classList.add('optgroupt');
          listCity.setAttribute('label',Object.keys(data)[i]);
          var listText = document.createTextNode(Object.keys(data)[i]);
          listCity.appendChild(listText);
          chooseGeneration.appendChild(listCity);
     
          for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
            var listGeneration = document.createElement('option');
            listGeneration.classList.add('listGenerationStyle');
            var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
            listGeneration.appendChild(textGeneration);
            listCity.appendChild(listGeneration);
             
          }
        } 
    });*/
  });
   
  
  //debugger
  console.log(Object.keys(data));//["AQP", "CDMX", "LIM", "SCL"]
  console.log(Object.values(data));//[{…}, {…}, {…}, {…}]
  console.log(Object.values(data)[0]);
  console.log([...Object.values(data)])
  console.log([...Object.values(data)][0])
  console.log(Object.values(data)[0])
  console.log(Object.keys(Object.values(data)[0]).length);
  //console.log(Object.keys(Object.keys(data)));
  var sedes=Object.keys(data);
  var array = [];
  //debugger
  for(var i =0; i<Object.keys(data).length;i++){
      
      for(var j =0; j< Object.keys(Object.keys(data)[i]).length;j++){
         console.log(array.push(Object.keys(Object.values(data)[j])));
      }
    
  }
  
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
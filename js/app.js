window.addEventListener('load', function(event) {
    var chooseGeneration = document.querySelector('.choose-sede-generation');
    var optgroupt =document.getElementById('optgroupt');
    var enrollment = document.getElementById('enrollment');
    var generation = document.getElementById('generation');
    var divgeneration = document.getElementById('divgeneration');
    var title = document.getElementById('title');
    var titleGen = document.getElementById('title-gen');
  
    optgroupt.addEventListener('change', function(event) {
      //console.dir(event.target.value);// cada vez que escoja una opción, me arrojará su valor:AQP,LIM,CDMX,SLC.
      var sede = event.target.value;
      if (sede === 'AQP') {
        title.textContent = '';
        title.textContent = 'AREQUIPA';
      }
      if (sede === 'SCL') {
        title.textContent = '';
        title.textContent = 'SANTIAGO DE CHILE';
      }
      
      if (sede === 'LIM') {
        title.textContent = '';
        title.textContent = 'LIMA';
      }
      
      if (sede === 'CDMX') {
        title.textContent = '';
        title.textContent = 'CIUDAD DE MEXICO';
      }
                     
      for (var i = 0; i <= Object.keys(data).length; i++) {
        if (event.target.value === Object.keys(data)[i]) {
          for (var j = 0; j < Object.keys(data[sede]).length; j++) {
            var otherlistGeneration = document.createElement('option');
            otherlistGeneration.classList.add('generations');
            var textGeneration = document.createTextNode(Object.keys(data[sede])[j]);
            otherlistGeneration.appendChild(textGeneration);
            generation.appendChild(otherlistGeneration);
          }
          // para limpiar y qie no se repita
          optgroupt.addEventListener('click', function() {
            var sede = document.getElementsByClassName('generation-sede');
            for (var k = 0; k < sede.length; k++) {
              generation.removeChild(sede[k]);
            }
          });  
        }            
      } 
      generation.addEventListener('change', function(event) {   
        titleGen.textContent = event.target.value;
        //console.log(Object.keys(data));// devuelve ["AQP", "CDMX", "LIM", "SCL"]
        //console.log(sede);// me devuelve el nombre de la sede elegida en el anterior evento.
        //console.log(Object.keys(data[sede]));// devuelve ["2016-2", "2017-1"] (sede:representa la propiedad del objeto data elegido en el anterior evento)
        for (var item in data) {
          if (item === sede) {
            var dataSede = {};
            dataSede = data[item];
          }
        }
        //console.log(dataSede);// me devuelve el contenido de la sede elegida: {2016-2: {…}, 2017-1: {…}, 2017-2: {…}}
  
        for (var p in dataSede) {
          var datesGen = {};
          datesGen = dataSede[p];
        }
        //console.log(datesGen);//me muestra en un objeto:{students: Array(61), ratings: Array(2)}
  
        for (var i in dataSede) {
          if (i === event.target.value) {
            var dataAlumns = {};
            dataAlumns = dataSede[i].students;
          }
        }
        console.log(dataAlumns);// tengo a todos los estudiantes de la sede y generación elegida en un array
        console.log(dataAlumns.length);
  
        for (var m in dataSede) {
          if (m === event.target.value) {
            var dataRatings = {};
            dataRatings = dataSede[m].ratings;
          }
        }
        //console.log(dataRatings);// tengo el contenido de dataRatings por generación elegida. ejem: (3) [{…}, {…}, {…}]
  
        var contGoal = 0;// que alcanzaron la meta
        var contTech = 0;
        var contHse = 0;
        var qTech;
        var uHse;
        var contInactive = 0;
  
        for (var k = 0; k < dataAlumns.length; k++) {
          if (dataAlumns[k].active === false) {
            contInactive++;
          }
          // console.log(contInactive);//número de alumnos inactivos por sede elegida
          // console.log(dataAlumns[k]);//me muestra cada objeto alumno
  
          // empezando los calculos cuando el alumno está activo
  
          if (dataAlumns[k].active === true) {
            var sumTech = 0;
            var sumHse = 0;
      
            for (var y = 0; y < dataAlumns[k].sprints.length; y++) { // va a sumar el puntaje total de los sprints-alumna en tech y hse
              sumTech += dataAlumns[k].sprints[y].score.tech;
              // console.log(dataAlumns[k].sprints[y].score.tech);//ingresa a la nota por número de sprint del alumno
              sumHse += dataAlumns[k].sprints[y].score.hse; 
              // console.log(dataAlumns[k].sprints[y].score.hse);  
            }
            // console.log(sumTech);//suma total de notas en tech de cada alumno de la generación elegida
            // console.log(sumHse);//suma total de notas en tech de cada alumno de la generación elegida
            // console.log(dataAlumns[k].sprints)//me muestra los sprints del alumno
      
            // Cálculos para los promedios por generación escogida
            qTech = sumTech / dataAlumns[k].sprints.length;// me muestra el promedio de las notas tech (sumTech/#sprints llevados)
            uHse = sumHse / dataAlumns[k].sprints.length;// me muestra el promedio de las notas hse (sumHse/#sprints llevados)
            // console.log(qTech);//promedio de tech(de c/alumno)
            // console.log(dataAlumns[k].sprints);//número de sprints(de c/alumno)
  
            if (uHse >= 840 && qTech >= 1240) {
              contGoal++; 
            }
            if (qTech >= 1240) {
              contTech++;              
            }
            if (uHse >= 840) {
              contHse++;
            }
          }
        }
        //console.log(contTech);// número de estudiantes que pasaron el mínimo requerido en tech
        //console.log(contHse);// número de estudiantes que pasaron el mínimo requerido en hse
        //console.log(contGoal);// número de estudiantes que pasaron el mínimo requerido en ambos skills
        var retired = ((contInactive * 100) / dataAlumns.length).toFixed(1);
        var studentAchievement = ((contGoal * 100) / dataAlumns.length).toFixed(1);
        var neoTech = ((contTech / (dataAlumns.length - contInactive)) * 100).toFixed(1);
        var neoSkills = ((contHse / (dataAlumns.length - contInactive)) * 100).toFixed(1);
  
        // para net promoter 
          
        var detractors = 0;
        var promoters = 0;
        var pasive = 0;
        
        for (var z = 0; z < dataRatings.length; z++) {
          detractors += dataRatings[z].nps.detractors;
          promoters += dataRatings[z].nps.promoters;
          pasive += dataRatings[z].nps.passive;
        }
        var resultDetractors = (detractors / dataRatings.length).toFixed(1);
        var resultPromoters = (promoters / dataRatings.length).toFixed(1);
        var resultPasive = (pasive / dataRatings.length).toFixed(1);
        // ya no se multiplicó por 100, ya que el 100% es equivalente a la unidad 
        var resultNps = resultPromoters - resultDetractors; 
                  
        // añade función a html
        var enrollment = document.getElementById('enrollment');
        enrollment.textContent = '';
        enrollment.textContent = dataAlumns.length;
        var retiredAlumn = document.getElementById('retiredAlumn');
        retiredAlumn.textContent = '';
        retiredAlumn.textContent = retired;
        var countAchievement = document.getElementById('countAchievement');
        countAchievement.textContent = '';
        countAchievement.textContent = contGoal;
        var percentageAchievement = document.getElementById('percentageAchievement');
        percentageAchievement.textContent = '';
        percentageAchievement.textContent = studentAchievement;
        var totalAlumns = document.getElementById('total-alumns');
        totalAlumns.textContent = '';
        totalAlumns.textContent = dataAlumns.length;
        var countSkills = document.getElementById('countSkills');
        countSkills.textContent = '';
        countSkills.textContent = contTech;
        var totalStudents = document.getElementById('totalStudentsTech');
        totalStudents.textContent = '';
        totalStudents.textContent = (dataAlumns.length - contInactive);
        var percentageStudentsPass = document.getElementById('percentageStudentsTech');
        percentageStudentsPass.textContent = '';
        percentageStudentsPass.textContent = neoTech;
        var countHse = document.getElementById('countHse');
        countHse.textContent = '';
        countHse.textContent = contHse;
        var totalStudentsHse = document.getElementById('totalStudentsHse');
        totalStudentsHse.textContent = '';
        totalStudentsHse.textContent = (dataAlumns.length - contInactive);
        var percentageStudentsHse = document.getElementById('percentageStudentsHse');
        percentageStudentsHse.textContent = '';
        percentageStudentsHse.textContent = neoSkills;
        var promoterScore = document.getElementById('promoter-score');
        promoterScore.textContent = '';
        promoterScore.textContent = resultPromoters;
        var passiveScore = document.getElementById('passive-score');
        passiveScore.textContent = '';
        passiveScore.textContent = resultPasive;
        var detractorScore = document.getElementById('detractor-score');
        detractorScore.textContent = '';
        detractorScore.textContent = resultDetractors; 
        var averageNps = document.getElementById('average-nps');
        averageNps.textContent = '';
        averageNps.textContent = resultNps;           
      
        /*ULTIMOS GRAFICOS */
        //Parte Student satisfaction
        console.log(dataSede); //{2016-2: {…}, 2017-1: {…}}
        console.log(datesGen);//me muestra en un objeto:{students: Array(15), ratings: Array(3)}
        
        for (var r in datesGen) {
          var datesSprint = {};
          datesSprint = datesGen[r];
        }
        console.log(datesSprint); // array de objetos [{…}, {…}, {…}] --> cada uno tiene {sprint: 1, nps: {…}, student: {…}, teacher: 4.7, jedi: 4.9}
        
        for (var s in datesSprint) {
          var dataRating = {};
          dataRating = datesSprint[s];
        }
        console.log(dataRating); //{sprint: 3, nps: {…}, student: {…}, teacher: 3.4, jedi: 4.1}
        var student = dataRating.student;
        console.log(student); //{no-cumple: 9, cumple: 72, supera: 19}
        console.log(student.cumple);
        console.log(student.supera);

       
        //if(student.){} 

        console.log(event.target.value); //2016-2
        console.log(Object.values(dataSede)); // [{…}, {…}] --> objeto que almacena objeto student[0] y demás
        console.log(Object.keys(data[sede])[0]) //2016-2
        console.log(dataSede[event.target.value]); //{students: Array(15), ratings: Array(4)}
        console.log(dataSede[event.target.value].ratings);
        //si Datasede[x] === al que se dio click, buscar datesRating[0].student
        if(event.target.value ===Object.keys(data[sede])[0]){
          //debugger
          //Recorrer cada sede y que busque lo que deseo
          var ratings = dataSede[event.target.value].ratings;
          console.log(ratings);
          console.log(ratings.length);//4
          console.log(ratings[0]) //jala el primero --> {sprint: 1, nps: {…}, student: {…}, teacher: 3.6, jedi: 3.6}
          console.log(ratings[0].student);
          console.log(Object.keys(ratings[0]));
          console.log(ratings[0].student.cumple);
          console.log(ratings[0].student.supera);
          var numSatisfaction = document.getElementById("expectation-number");
          var teacherRating = document.getElementById("teacher-rating");
          var jediRating = document.getElementById("jedi-rating");
          var cumple = 0;
          var supera = 0;
          var teacherScore = 0;
          var jediScore = 0;
          for(var w = 0; w < ratings.length;w++){
            //cumple = cumple + ratings[w].student.cumple;
            supera = supera + ratings[w].student.supera ;
            // var sum = cumple + supera ;
            console.log(supera);
            numSatisfaction.innerHTML = supera;
            //teacher rating
            console.log(ratings); //array con cada sprint de la generación elegida / 
            teacherScore = teacherScore + ratings[w].teacher; //Suma de todos los puntajes de Teacher
            var averageTeacher = teacherScore / ratings.length; // suma total todos los puntajes entre la cantidad de sprint.
            var teacherFixed = averageTeacher.toFixed(1);
            console.log(teacherFixed);
            console.log(teacherRating);
            teacherRating.innerHTML =  teacherFixed;
            //Jedi Rating
            jediScore = jediScore + ratings[w].jedi;
            console.log(jediScore);
            var averageJedi = jediScore / ratings.length;
            console.log(averageJedi);
            var jediFixed = averageJedi.toFixed(1);
            console.log(jediFixed);
            jediRating.innerHTML = jediFixed;
            console.log(jediRating);


          
          }
           //console.log(datesRating[0].student);
        }

        /*TEACHER RATING*/




      });
        
      

    //   for (var satisfaction in data) {
    //     if (satisfaction === event.target.value) {// reemplazar por dataalumns en el evento al jalar optgroupt
    //       var dataSatisfaction = {};
    //       dataSatisfaction = data[satisfaction];
    //     }     
    //   }
    //   console.log(dataSatisfaction); // {2017-1: {…}, 2017-2: {…}} --> value de cada sede

    //   for (var item in data){
    //     if(item === sede){
    //         var dataSede= {};
    //         dataSede = data[item];
    //     }

    // }
    // console.log(dataSede);//me devuelve el contenido de la sede elegida: {2016-2: {…}, 2017-1: {…}, 2017-2: {…}}
  
    //   // Contenido de cada generación guardado en dataS
    //   for (var g in dataSatisfaction) {
    //     var dataG = {};
    //     dataG = dataSatisfaction[g];
    //   }
    //   console.log(dataG); // {students: Array(14), ratings: Array(2)}
    //   console.log(dataG.ratings); // Objeto contenido en "ratings"
        
    //   // accediendo a student y su contenido
    //   for (var s in dataG.ratings) {
    //     var dataStudent = {};
    //     dataStudent = dataG.ratings[s]; // {sprint: 2, nps: {…}, student: {…}, teacher: 4.1, jedi: 4.2}
    //     var dataExpectation = dataStudent.student;// {no-cumple: 6, cumple: 75, supera: 19}
    //   }
      
    //   for (var nc in dataExpectation) {
    //     var noCumple = {};
    //     if (dataExpectation['no-cumple'] === false) {
    //     }
    //   }
    //   console.log(dataExpectation['no-cumple']); // valor de no-cumple : 6
      
    //   /*Recorriendo sedes pero ingresando a rating según el for in realizado */
    //   var dataValue = Object.keys(dataSede);
    //   var countInit = 0;
    //     //debugger
    //     for (var w = 0; w <= dataValue.length; w++) { 
    //       if(dataValue[w] === event.target.value){
    //         countInit+=dataSede[w].ratings;
    //         console.log(countInit)
    //       }
    //     }
    });
  });
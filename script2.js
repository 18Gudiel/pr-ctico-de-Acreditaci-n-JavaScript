let eduardoScores =[7,8,7];
let yesseniaScores=[10,8,10];
let sum=0;
let sum2=0;



function getAverage(notas,notas2) {
    notas.forEach(item=>{
        sum += item;
       promedio1=sum/3;
    
    });
    document.getElementById("promedioEdu").innerHTML = promedio1.toFixed(1);

    notas2.forEach(item=>{
        sum2 += item;
       promedio2=sum2/3;
    
    });
    document.getElementById("promedioYess").innerHTML = promedio2.toFixed(1);
    if (promedio1>promedio2) {
        reply="El mejor promedio lo tenie Eduardo";
    } else {
        reply="El mejor promedio lo tiene Yessenia";
    }
    document.getElementById("mejorPromedio").innerHTML=reply;
}
getAverage(eduardoScores,yesseniaScores);
/*===============================================================================*/
function scoresValidation(scores) {
    return scores<=6;
}
let results=eduardoScores.find(scoresValidation);
if (results <=6) {
    msg="Eduardo una de tus notas es " + results +  "; esta por debajo de la nota minima por lo que usted esta REPROBADO";
    
} else {
    msg="Felicidades Eduardo ,todos los resultados cumplen con la nota minima por lo que usted APROBO "
}
document.getElementById("criteriaNotas").innerHTML= msg;

let results2=yesseniaScores.find(scoresValidation);
if (results2 <=6) {
    msg="Yessenia una de tus notas es " + results2 +  "; esta por debajo de la nota minima por lo que usted esta REPROBADO";
    
} else {
    msg="Felecidades Yessenia ,todos los resultados cumplen con la nota minima por lo que usted APROBO "
}
document.getElementById("demo").innerHTML= msg;

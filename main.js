

function sm(s){
    
    row = s+".png"
        document.getElementById("imgR").src = row ;
        window.alert("The Image You Selected has Uploaded");
       
        $("#img").modal("hide");
        showresult();
}


console.log("ml5 Version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zElHSu2ty/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded");
}
function showresult(){
    img= document.getElementById("imgR")
    classifier.classify(img,gotResult);
    console.log(img)
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        window.alert("Then scroll down to view the result");

        document.getElementById('name').innerHTML = result[0].label;
        document.getElementById('accuracy').innerHTML = (result[0].confidence*100).toFixed(2)+'%';
    }
}


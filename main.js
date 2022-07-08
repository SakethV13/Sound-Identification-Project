//https://teachablemachine.withgoogle.com/models/bpXSLR9ga/

function start_id(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iIqZ0egkm/model.json', modelReady);



}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("voice").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("accuracy").innerHTML = 'Accuracy - '+(results[0].confidence * 100);
        document.getElementById("accuracy").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById('cat.png');
        img1 = document.getElementById('dog.jpeg');
        img3 = document.getElementById('ear.jpeg');
        img4 = document.getElementById('lion.png');
        img5 = document.getElementById('cow.png');

        if(results[0].label == "Barking"){
            img.src = 'cat.png';
            img1.src = 'dog.gif';
            img4.src = 'lion.png';
            img5.src = 'cow.png';
            

        }else if(results[0].label == "Meowing"){
            img.src = 'cat.gif';
            img1.src = 'dog.jpeg';
            img4.src = 'lion.png';
            img5.src = 'cow.png';
        }else if(results[0].label == "Roaring"){
            img.src = 'cat.png';
            img1.src = 'dog.jpeg';
            img4.src = 'lion.gif';
            img5.src = 'cow.png';
        }
        else if(results[0].label == "Mooing"){
            img.src = 'cat.png';
            img1.src = 'dog.jpeg'
            img4.src = 'lion.png'
            img5.src = 'cow.webp'
        }


    }
}
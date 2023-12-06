Webcam.attach( '#camera');

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="self_image" src="'+data_uri+'"/>';
    });
}

console.log('versão ml5:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rv_u6nxLo/https://teachablemachine.withgoogle.com/models/Rv_u6nxLo/model.json',modelLoaded);

function modelLoaded()
{
    console.log("modeloCarregado")
}

function check()
{
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error);
    } else {

        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
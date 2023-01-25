Webcam.set({
    height: 300,
    width: 400,
    image_format: 'jpeg',
    jpeg_quality: 100
});

camera = document.getElementById('webcam_view');

Webcam.attach('#webcam_view');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('snapshot').innerHTML = '<img id="sba" src=" ' + data_uri + ' " >'
    })
}

console.log("ml5.version", ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dDBqUvA4K/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model loading succeeded!');
}

function check() {
img = document.getElementById('sba');
Classifier.classify(img, got_result);
}

function got_result(error, results) {
if (error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById('emotion_1').innerHTML = results[0].label;
    document.getElementById('emotion_2').innerHTML = results[1].label;
}
}
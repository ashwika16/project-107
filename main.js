function startClassification()
{
    navigator.mediaDevices.getDisplayMedia({audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/ncPsEGSSz/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}
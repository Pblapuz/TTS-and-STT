let speech = new SpeechSynthesisUtterance();
let voices = [];
const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("select");
const listenButton = document.getElementById("listen");
const inputText = document.getElementById("input-text");
const downloadButton = document.getElementById("download");

function voiceList() {
    voices = synth.getVoices();
    voices.forEach(makeVoiceList)
};
function makeVoiceList(voice, i){
    voiceSelect.options[i] = new Option(voice.name, i)
}
function changeVoice() {
    speech.voice = voices[voiceSelect.value];
}
function listen(){
    speech.text = inputText.value;
    synth.speak(speech);
}

synth.addEventListener("voiceschanged", voiceList);
voiceSelect.addEventListener("change", changeVoice);
listenButton.addEventListener("click", listen);
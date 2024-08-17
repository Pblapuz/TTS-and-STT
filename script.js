const synth = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();

let voices = [];
const voiceSelect = document.querySelector("#select");
const listenButton = document.querySelector("#listen");

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
    speech.text = document.querySelector("#input-text").value;
    window.speechSynthesis.speak(speech);
}

synth.addEventListener("voiceschanged", voiceList);
voiceSelect.addEventListener("change", changeVoice);
listenButton.addEventListener("click", listen)
let speech = new SpeechSynthesisUtterance();
let voices = [];
const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("select");
const listenButton = document.getElementById("listen");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const switchButton0 = document.getElementById("switch_0");
const switchButton1 = document.getElementById("switch_1");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

window.SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;
recognition.interimResults = true;
recognition.continuous = true;

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

function startTranscript(){
    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript);
    
        outputText.innerHTML = transcript;
    });
        recognition.start();
    
}
function stopTranscript(){
    recognition.abort();
}
function switchToTTS(){
    document.getElementById("panel_0").style.display = "none";
    document.getElementById("panel_1").style.display = "flex";
}
function switchToSTT(){
    document.getElementById("panel_0").style.display = "flex";
    document.getElementById("panel_1").style.display = "none";
}

synth.addEventListener("voiceschanged", voiceList);
voiceSelect.addEventListener("change", changeVoice);
listenButton.addEventListener("click", listen);
switchButton0.addEventListener("click", switchToTTS);
switchButton1.addEventListener("click", switchToSTT);
startButton.addEventListener("click",startTranscript);
stopButton.addEventListener("click",stopTranscript);
let speech = new SpeechSynthesisUtterance();

// document.querySelector("button").addEventListener(click)

let  voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech. voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]= new Option(voice.
        name, i)));
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});

document.getElementById("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.SpeechSynthesis.speak(speech);
});
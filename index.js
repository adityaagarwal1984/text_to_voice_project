const speech= new SpeechSynthesisUtterance();
//chanhe lanuage and assigning difffernt lang to select option
let voices= [];
let voiceselect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

  voices.forEach((voice,i)=>(voiceselect.options[i]= new Option(voice.name,i)));

  
}
voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value];
})




//speech bolna
document.querySelector(".btn").addEventListener("click",()=>{
speech.text=document.querySelector(".area").value;
window.speechSynthesis.speak(speech);
} );

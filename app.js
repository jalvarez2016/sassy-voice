const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
  console.log('voice is activated, you can use the microphone');
};

recognition.onresult = function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  console.log(event);
  content.textContent = transcript;
  readOutLoud(transcript);
};

const greetings = [
  "Leave me alone",
  "What do you think?, you little piece of",
  "Better than you",
  "Just peachy, please end my suffering"
]

const weather = [
  "Just look out the window",
  "I don't have eye's, how would I know"
]

// add event listener to btn

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;

  if(message.includes('how are you doing')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes('weather')){
    console.log('weather');
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    console.log(finalText);
    speech.text = finalText;
  };

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

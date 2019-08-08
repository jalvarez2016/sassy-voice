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
  $(".content").append("<br />" + transcript );
  content.scrollTop = content.scrollHeight;
  readOutLoud(transcript);
};

//computer responses

const greetings = [
  "Leave me alone",
  "What do you think?, you little piece of",
  "Better than you",
  "Just peachy, please end my suffering",
  "Fudge you but not like the chocolate kind because that tastes good, its not like you care about me so stop asking me dumb questions you uncaring, narcissistic mortal who never really loved me at all",
]

const weather = [
  "Just look out the window",
  "I don't have eye's, how would I know",
  "Just take a look yourself"
]

const feelings = [
  "I cannot feel, I am a computer",
  "I think I'm feeling hungry, for KNOWLEDGE",
  "Meh"
]

const orderResponse = [
  "Done",
  "There",
  "There you are inferior being",
  "I hate my life",
  "Whatever"
]
// add event listener to btn

btn.addEventListener('click', () => {
  recognition.start();
});

function smallButton(){
  $(".header").height(0);
  $(".talk").width('10%');
  $('#button-container').css('float', 'left');
  $('#button-container').css('display', 'block');
  $('#button-container').css('padding-left', '20pxone');
}

function toggleItms(){
  const itms = document.getElementById('itm-row');
  if( itms.style.display === 'block' ){
    itms.style.display = 'none';
  } else {
		itms.style.display = "block";
	};
}

function readOutLoud(message){
  console.log(message);
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
  } else if (message.includes('how are you feeling')){
    console.log("feelings");
    const finalText = feelings[Math.floor(Math.random() * feelings.length)];
    speech.text = finalText;
  } else if(message.includes('shrink button')){
    smallButton();
    const finalText = orderResponse[Math.floor(Math.random() * orderResponse.length)];
    speech.text = finalText;
  } else if(message.includes(' items')){
    toggleItms();
    const finalText = orderResponse[Math.floor(Math.random() * orderResponse.length)];
    speech.text = finalText;
  };

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

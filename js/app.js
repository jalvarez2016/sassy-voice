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

const projects = [
  "This is a project intended to display Jason's projects."
]

const tacobell =[
  "Tacobell is the best food known to man. And it does not cause uncontrolable amounts of diarrhea"
]

const passions = [
  "Jason is pursuing his passions by exploring different aspects of programming like this project where he learned voice recognition and made me using javascript html and css. He also knows the basics of python, react, react native, c# and c++"
]

const followingPassion = [
  "By following his passion, Jason will be able to make people uncomfortable with his creations while contributing every now and then to projects that are acccessible to all or help people through thier issues."
]
const education = [
  "Jason plans on accomplishing his goals by pursuing computer science to develop a deeper understanding of the intricacies of programming."
]

const dreamSchool = [
  "Jason's dream school is CUNY Hunter because it offers a computer science degree and it offers him the opportunity to learn from others and develop new interesting programs."
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
  } else if(message.includes('items')){
    toggleItms();
    const finalText = orderResponse[Math.floor(Math.random() * orderResponse.length)];
    speech.text = finalText;
  } else if(message.includes('Taco Bell')){
    const finalText = tacobell[Math.floor(Math.random() * tacobell.length)];
    speech.text = finalText;
  } else if(message.includes(' Passions')){
    const finalText = passions[Math.floor(Math.random() * passions.length)];
    speech.text = finalText;
  } else if(message.includes(' follow passion ')){
    const finalText = followingPassion[Math.floor(Math.random() * followingPassion.length)];
    speech.text = finalText;
  } else if(message.includes(' education')){
    const finalText = education[Math.floor(Math.random() * education.length)];
    speech.text = finalText;
  } else if(message.includes(' items')){
    const finalText = orderResponse[Math.floor(Math.random() * orderResponse.length)];
    speech.text = finalText;
  } else if(message.includes('dream')){
    const finalText = dreamSchool[Math.floor(Math.random() * dreamSchool.length)];
    speech.text = finalText;
  } else if(message.includes('project')){
    const finalText = projects[Math.floor(Math.random() * projects.length)];
    speech.text = finalText;
  };

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

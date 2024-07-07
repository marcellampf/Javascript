
var synth = window.speechSynthesis;

var textToSpeak = 'This is the text string that you will generate with your script';

var subjects = ["The cat", "A dog", "My friend", "An alien", "The teacher"];
var verbs = ["eats", "jumps", "runs", "sleeps", "writes"];
var adjectives = ["funny", "lazy", "crazy", "happy", "sad"];
var objects = ["a book", "the food", "a car", "the homework", "a ball"];
var places = ["in the park", "at school", "on the moon", "in the house", "at the beach"];

var story = {
	subject: '',
	verb: '',
	adjective: '',
	object: '',
	place: ''
};

function getRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

function updateStoryOutput() {
	let text = `${story.subject} ${story.verb} ${story.adjective} ${story.object} ${story.place}.`;
	document.getElementById('storyOutput').innerText = text;
}

document.getElementById('generateSubject').addEventListener('click', () => {
	story.subject = getRandomElement(subjects);
	updateStoryOutput();
});

document.getElementById('generateVerb').addEventListener('click', () => {
	story.verb = getRandomElement(verbs);
	updateStoryOutput();
});

document.getElementById('generateAdjective').addEventListener('click', () => {
	story.adjective = getRandomElement(adjectives);
	updateStoryOutput();
});

document.getElementById('generateObject').addEventListener('click', () => {
	story.object = getRandomElement(objects);
	updateStoryOutput();
});

document.getElementById('generatePlace').addEventListener('click', () => {
	story.place = getRandomElement(places);
	updateStoryOutput();
});

document.getElementById('generateStory').addEventListener('click', () => {
	story.subject = getRandomElement(subjects);
	story.verb = getRandomElement(verbs);
	story.adjective = getRandomElement(adjectives);
	story.object = getRandomElement(objects);
	story.place = getRandomElement(places);
	updateStoryOutput();
});

document.getElementById('speakStory').addEventListener('click', () => {
	let textToSpeak = `${story.subject} ${story.verb} ${story.adjective} ${story.object} ${story.place}.`;
	speakNow(textToSpeak);
});

document.getElementById('resetStory').addEventListener('click', () => {
	story = {subject: '', verb: '', adjective: '', object: '', place: ''};
	updateStoryOutput();
});

document.querySelector('button').onclick = function() {
	speakNow(textToSpeak);
}

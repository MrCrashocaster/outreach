const firebaseConfig = {
	apiKey: "AIzaSyB_fVBSRH3xnFoJ8e4p4NQhjBOziCXKKGs",
	authDomain: "major-finder.firebaseapp.com",
	databaseURL: "https://major-finder.firebaseio.com",
	projectId: "major-finder",
	storageBucket: "major-finder.appspot.com",
	messagingSenderId: "189305033163",
	appId: "1:189305033163:web:bb66087eaf3b0d0419264e"
  };


!function () {
	'use strict';
	var quiz = document.getElementById('quiz'),
		questionContainer = document.getElementById('quiz__question'),
		questionText = document.getElementById('quiz__question-text'),
		questionCount = document.getElementById('quiz__question-count'),
		resultsContainer = document.getElementById('quiz__results'),
		resultsText = document.getElementById('quiz__results-text'),
		radioButtons = document.getElementsByClassName('quiz__question-radio'),
		prevButton = document.getElementById('quiz__button--prev'),
		nextButton = document.getElementById('quiz__button--next'),
		returnButton = document.getElementById('quiz__button--return-to-questions'),
		averageScore = 2,
		currentQuestionIndex = -1;


	/* DO NOT CHANGE CODE ABOVE */



function changeQuestion() {

	}

	// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

	// mapping between questions & majors they increment

	// **** ONLY ADD OR CHANGE NECESSARY QUESTIONS ****
	var questions = [
		{
			text: "<b><h4>I have a strong interest and ability in visual art.</h4></b>",
			answer: "",
			majors: ["Art", "Theatre"],
		}, {
			text: "<b><h4>I'm interested in graphic and/or Web design.</h4></b>",
			answer: "",
			majors: ["Computer Science", "Art", "Communication Sciences"],
		}, {
			text: "<b><h4>I'm interested in intellectual ideas, including those that are philosophical or religious.</h4></b>",
			answer: "",
			majors: ["Religious Studies", "English", "History", "Sociology"],
		}, {
			text: "<b><h4>I enjoy performing as an actor, or working behind the scenes on theatrical productions.</h4></b>",
			answer: "",
			majors: ["Theatre", "Film Production"],
		}, {
			text: "<b><h4>I like to sing and/or play musical instruments.</h4></b>",
			answer: "",
			majors: ["Music"],
		}, {
			text: "<b><h4>I enjoy learning about how the human body and natural world work.</h4></b>",
			answer: "",
			majors: ["Biology", "Chemistry", "Environmental Studies", "Molecular Biology/Biochemistry", "Nursing"],
		}, {
			text: "<b><h4>I enjoy learning about languages.</h4></b>",
			answer: "",
			majors: ["English", "History", "TESOL"],
		}, {
			text: "<b><h4>I like to experiment with better and faster ways of doing things.</h4></b>",
			answer: "",
			majors: ["Chemistry", "Computer Science", "Mathematics", "Molecular Biology/Biochemistry", "Physics", "Engineering"],
		}, {
			text: "<b><h4>I enjoy working with people, and I have strong verbal and written communication skills.</h4></b>",
			answer: "",
			majors: ["Communication Sciences", "Elementary Education", "Secondary Education", "English", "Film Production", "Journalism", "Marketing", "Integrated Marketing Communications", "Sport and Recreation Administration"],
		}, {
			text: "<b><h4>I like math and figuring out how things work.</h4></b>",
			answer: "",
			majors: ["Physics", "Mathematics", "Computer Science", "Engineering"],
		}, {
			text: "<b><h4>I'm interested in law, debate, government, and politics.</h4></b>",
			answer: "",
			majors: ["History", "Sociology"],
		}, {
			text: "<b><h4>I enjoy helping people.</h4></b>",
			answer: "",
			majors: ["Elementary Education", "Secondary Education", "Nursing", "Social Work", "TESOL", "Religious Studies"],
		}, {
			text: "<b><h4>I'm good with numbers and am detail-oriented.</h4></b>",
			answer: "",
			majors: ["Accounting", "Business", "Mathematics"],
		}, {
			text: "<b><h4>I especially love working with children.</h4></b>",
			answer: "",
			majors: ["Elementary Education", "Physical Education"],
		}, {
			text: "<b><h4>I'm very ambitious, persuasive, and love coming up with my own ideas.</h4></b>",
			answer: "",
			majors: ["Business", "Marketing", "Sport and Recreation Administration"],
		}, {
			text: "<b><h4>I'm concerned about the state of the environment and want to work to improve it.</h4></b>",
			answer: "",
			majors: ["Environmental Studies"],
		}, {
			text: "<b><h4>I enjoy learning about different parts of the world.</h4></b>",
			answer: "",
			majors: ["History", "Sociology", "Journalism"],
		}, {
			text: "<b><h4>I'm interested in science and enjoy helping people.</h4></b>",
			answer: "",
			majors: ["Exercise Science", "Nursing", "Psychology", "Molecular Biology/Biochemistry"],
		}, {
			text: "<b><h4>I need the freedom to be creative and express myself.</h4></b>",
			answer: "",
			majors: ["Art", "Film Production", "Theatre", "Music"],
		}, {
			text: "<b><h4>I am interested in helping bodies heal and rehabilitate.</h4></b>",
			answer: "",
			majors: ["Exercise Science", "Physical Education", "Molecular Biology/Biochemistry", "Nursing"],
		}, {
			text: "<b><h4>I am interested in conflict resolution or criminal justice.</h4></b>",
			answer: "",
			majors: ["Psychology", "Sociology"],
		}, {
			text: "<b><h4>I want to work with people on the margins of society or who have been oppressed.</h4></b>",
			answer: "",
			majors: ["Social Work", "TESOL", "Psychology"],
		}, {
			text: "<b><h4>I'm interested in technology and learning how computers work.</h4></b>",
			answer: "",
			majors: ["Computer Science"],
		}, {
			text: "<b><h4>I like to work with my hands and be outdoors.</h4></b>",
			answer: "",
			majors: ["Environmental Studies", "Engineering", "Art"],
		}, {
			text: "<b><h4>I am always reading a book or writing my own stories.</h4></b>",
			answer: "",
			majors: ["English", "Journalism", "History", "Communication Sciences"],
		}, {
			text: "<b><h4>I like to offer advice to others.</h4></b>",
			answer: "",
			majors: ["Psychology", "Social Work", "Religious Studies", "Elementary Education"],
		}
	];
	shuffle(questions);

	// mappings between each major and their url, score, and associated question count

	// **** ONLY ADD OR CHANGE NECESSARY MAJORS ****

	var majors = {
		'History': {
			url: 'https://history.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Environmental Studies': {
			url: 'https://environmentalstudies.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Molecular Biology/Biochemistry': {
			url: 'https://biology.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Chemistry': {
			url: 'https://chemistry.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Biology': {
			url: 'https://biology.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Nursing': {
			url: 'https://olemiss.edu/academics/programs/liberal-arts/bs-nursz',
			score: averageScore,
			questions: 0,
		},
		'Exercise Science': {
			url: 'https://hesrm.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Psychology': {
			url: 'https://psychology.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Social Work': {
			url: 'https://sw.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Religious Studies': {
			url: 'https://religion.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Physical Education': {
			url: 'http://education.olemiss.edu/academics/programs/health_physical_ed_bae.html',
			score: averageScore,
			questions: 0,
		},
		'Elementary Education': {
			url: 'http://education.olemiss.edu/academics/programs/elementary_ed_bae.html',
			score: averageScore,
			questions: 0,
		},
		'Secondary Education': {
			url: 'http://education.olemiss.edu/academics/programs/secondary_ed_english_bae.html',
			score: averageScore,
			questions: 0,
		},
		'TESOL': {
			url: 'https://modernlanguages.olemiss.edu/tesol/',
			score: averageScore,
			questions: 0,
		},
		'Sociology': {
			url: 'https://socanth.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'English': {
			url: 'https://english.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Journalism': {
			url: 'https://jnm.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Integrated Marketing Communications': {
			url: 'https://catalog.olemiss.edu/journalism/bs-imc',
			score: averageScore,
			questions: 0,
		},
		'Film Production': {
			url: 'https://theatreandfilm.olemiss.edu/film.html',
			score: averageScore,
			questions: 0,
		},
		'Theatre': {
			url: 'http://theatreandfilm.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Music': {
			url: 'https://music.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Art': {
			url: 'https://art.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Communication Sciences': {
			url: 'https://csd.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Marketing': {
			url: 'https://www.olemissbusiness.com/depts/marketing/',
			score: averageScore,
			questions: 0,
		},
		'Business': {
			url: 'https://www.olemissbusiness.com',
			score: averageScore,
			questions: 0,
		},
		'Sport and Recreation Administration': {
			url: 'https://hesrm.olemiss.edu/recreation-administration/welcome-to-recreation-administration/',
			score: averageScore,
			questions: 0,
		},
		'Accounting': {
			url: 'https://accountancy.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Engineering': {
			url: 'https://engineering.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Physics': {
			url: 'https://physics.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Mathematics': {
			url: 'https://math.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Computer Science': {
			url: 'https://www.cs.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
	};


	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^






	/* DO NOT CHANGE CODE BELOW */

	// sort the major names to use as labels on the graph
	var sortedMajors = Object.keys(majors);

	// for each major, calculate how many associated questions it has
	for (var i = 0; i < questions.length; i++) {
		var associatedMajorNames = questions[i].majors;
		for (var j = 0; j < associatedMajorNames.length; j++) {
			// also increment the number of questions for this major
			var majorName = associatedMajorNames[j];
			if (majors.hasOwnProperty(majorName)) {
				majors[majorName].questions++;
			}
			else {
				console.error('Major ', majorName, 'found in list of questions but not list of majors');
			}
		};
	};

	// display first question
	goToQuestion(0);

	// add listeners to radio buttons
	toggleRadioListeners(true);

	// add listeners to prev/next buttons
	prevButton.addEventListener('click', goToPrevQuestion);
	nextButton.addEventListener('click', goToNextQuestion);

	// add listener to "return to questions" button
	returnButton.addEventListener('click', function () {
		resultsContainer.classList.add('hide');
		questionContainer.classList.remove('hide');
	});

	function radioListener(evt) {
		// answer question with a yes or no
		if (evt.target.id === "quiz__question-radio--yes") {
			answerQuestion(currentQuestionIndex, 'yes');
		}
		else {
			answerQuestion(currentQuestionIndex, 'no');
		}
		goToNextQuestion();
	}

	function toggleRadioListeners(listen) {
		for (var i = radioButtons.length - 1; i >= 0; i--) {
			if (listen) {
				radioButtons[i].addEventListener('change', radioListener);
			}
			else {
				radioButtons[i].removeEventListener('change', radioListener);
			}
		}
	}

	/**
	 * Give an answer (yes/no) to a question by index
	 * @param  {Integer} i      Question index
	 * @param  {String} answer  'yes'/'no'
	 */
	function answerQuestion(i, answer) {
		// validate inputs
		if (!questions[i]) {
			console.error('Question with index', i, 'not found');
			return;
		}
		if (answer !== 'yes' && answer !== 'no') {
			console.error('Invalid answer', answer, 'provided to question with index', i, ':', questions[i].text);
			return;
		}

		// list of major names associated with current question.
		var associatedMajorNames = questions[i].majors;

		// amount to change score for each major depending on number of questions it's associated with.
		// if it's associated with more than 6 questions, it defaults to .2
		var scoreChangeAmounts = [1.3, .8, .6, .4, .3, .25];
		var scoreChangeDefault = .2;

		// add or subtract score changes based on answer to question
		var scoreMultiplier;
		// if question is unanswered, simply add/subtract scorechange
		if (questions[i].answer === '') {
			scoreMultiplier = answer === 'yes' ? 1 : -1;
		}
		// if question's answer changed, we'll have to add/subtract twice to compensate for past answer
		else {
			scoreMultiplier = answer === 'yes' ? 2 : -2;
		}

		// update answer
		questions[i].answer = answer;

		// keep track of the total score change for normalization later on
		var totalScoreChange = 0;

		// update scores of associated majors
		for (var i = 0; i < associatedMajorNames.length; i++) {
			// get major object
			var major = majors[associatedMajorNames[i]];
			var scoreChange;
			// change it's score
			if (major.questions < scoreChangeAmounts.length) {
				scoreChange = scoreChangeAmounts[major.questions] * scoreMultiplier;
			}
			else {
				scoreChange = .2 * scoreMultiplier;
			}
			major.score += scoreChange;
			totalScoreChange += scoreChange;
		};

		// normalize all scores so that they continue to add up to the initial sum of scores
		// by subtracting a fraction of totalScoreChange from all other majors
		var scoreFraction = totalScoreChange / (sortedMajors.length - associatedMajorNames.length);

		for (var i = 0; i < sortedMajors.length; i++) {
			var score = majors[sortedMajors[i]].score;
			// only subtract scoreFraction from non-associated majors
			if (associatedMajorNames.indexOf(sortedMajors[i]) === -1) {
				score -= scoreFraction;
			}
			// keep all scores in 0-4 bound
			score = score < 0 ? 0 : (score > 4 ? 4 : score);
			// update object
			majors[sortedMajors[i]].score = score;

		}
	}

	/**
	 * Update html to display a particular question
	 * @param  {Integer} i Index of question in questions array
	 */
	function goToQuestion(i) {
		if (currentQuestionIndex === i) {
			console.error('Attempting to transition to current question');
			var img1 = "https://www.gwc.org.uk/default/cache/file/4D81E70D-60C4-4FE7-B4DBD4299B06FAD3_fullwidth.jpg";
			var img2 = "img/major.jpg";			
			var imgElement = document.getElementById('toggleImage');
		 
			imgElement.src = (imgElement.src === img1)? img2 : img1;
			return;
		}
		if (!questions[i]) {
			console.error('Question with index', i, 'not found');
			return;
		}

		questionContainer.classList.add('quiz__question--transitioning');
		setTimeout(function () {
			// update text and count
			questionText.innerHTML = questions[i].text;
			questionCount.innerHTML = (i + 1) + ' / ' + questions.length;
			// show/hide prev button
			if (i === 0) {
				prevButton.classList.add('hide');
			}
			else {
				prevButton.classList.remove('hide');
			}
			// toggle radio buttons for next question
			toggleRadioListeners(false);
			// question hasn't been answered yet. deselect both radio buttons
			if (questions[i].answer === '') {
				radioButtons[0].checked = false;
				radioButtons[1].checked = false;
			}
			// question has already been answered
			else {
				var radio = questions[i].answer === 'yes' ? radioButtons[0] : radioButtons[1];
				radio.checked = true;
			}
			// begin listening for user interaction again
			toggleRadioListeners(true);
			// fade in questions/
			questionContainer.classList.remove('quiz__question--transitioning');
		}, 300);

		currentQuestionIndex = i;
	}


	function goToResults() {
		console.log('showing results');
		// get top 5 majors;
		// slice(0) is used to copy sortedMajors instead of modify it
		var top5 = sortedMajors.slice(0).sort(function (a, b) {
			return -(majors[a].score - majors[b].score)
		}).slice(0, 5);

		var html = '<p><b>Thanks for taking our quiz! Your top 5 majors are:</b></p><ol>';
		for (var i = 0; i < top5.length; i++) {
			html += ['<li><a href="', majors[top5[i]].url, '" target="_blank">', top5[i], '</a></li>'].join('');
		};
		html += '</ol>';

		resultsText.innerHTML = html;

		resultsContainer.classList.remove('hide');
		questionContainer.classList.add('hide');

	}

	function goToNextQuestion() {
		if (currentQuestionIndex < questions.length - 1) {
			goToQuestion(currentQuestionIndex + 1);
			// Random images to test function, NOT YET WORKING ***
			var img1 = "https://www.gwc.org.uk/default/cache/file/4D81E70D-60C4-4FE7-B4DBD4299B06FAD3_fullwidth.jpg";
			var img2 = "img/major.jpg";
			
			var imgElement = document.getElementById('toggleImage');
		 
			imgElement.src = (imgElement.src === img1)? img2 : img1;
		}
		else {
			goToResults();
		}
	}

	function goToPrevQuestion() {
		goToQuestion(currentQuestionIndex - 1);
	}


	// Shuffles array in place.
	// @param {Array} a items The array containing the items.
	// Grabbed from stackoverflow

	function shuffle(a) {
		var j, x, i;
		for (i = a.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
	}
}();


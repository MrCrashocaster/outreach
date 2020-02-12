!function()
{
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
		currentQuestionIndex = -1,
		chart = null;

	// mapping between questions & majors they increment
	var questions = [
		{
			text: "I have a strong interest and ability in visual art.",
			answer: "",
			majors: ["Art", "Film Production"],
		},{
			text: "I'm interested in graphic and/or Web design.",
			answer: "",
			majors: ["Computer Science", "Information Technology", "Art", "Communication"],
		},{
			text: "I'm interested in intellectual ideas, including those that are philosophical or religious.",
			answer: "",
			majors: ["Bible and Religion", "English", "History", "Sociology", "Peace, Justice & Conflict Studies", "Writing"],
		},{
			text: "I enjoy performing as an actor, or working behind the scenes on theatrical productions.",
			answer: "",
			majors: ["Theater", "Film Production", "Broadcasting"],
		},{
			text: "I like to sing and/or play musical instruments.",
			answer: "",
			majors: ["Music"],
		},{
			text: "I enjoy learning about how the human body and natural world work.",
			answer: "",
			majors: ["Biology", "Chemistry", "Environmental & Marine Science", "Molecular Biology/Biochemistry", "Nursing", "Sustainable Food Systems"],
		},{
			text: "I enjoy learning about languages.",
			answer: "",
			majors: ["English", "History", "Spanish", "TESOL", "Sign Language Interpreting"],
		},{
			text: "I like to experiment with better and faster ways of doing things.",
			answer: "",
			majors: ["Chemistry", "Computer Science", "Mathematics", "Molecular Biology/Biochemistry", "Physics", "Information Technology", "Engineering Physics"],
		},{
			text: "I enjoy working with people, and I have strong verbal and written communication skills.",
			answer: "",
			majors: ["Broadcasting", "Communication", "Elementary Education", "Secondary Education", "English", "Film Production", "Journalism", "Marketing", "Public Relations", "Sport Management"],
		},{
			text: "I like math and figuring out how things work.",
			answer: "",
			majors: ["Physics", "Mathematics", "Computer Science", "Engineering Physics"],
		},{
			text: "I'm interested in law, debate, government, and politics.",
			answer: "",
			majors: ["History", "Peace, Justice & Conflict Studies", "Sociology"],
		},{
			text: "I enjoy helping people.",
			answer: "",
			majors: ["Sign Language Interpreting", "Elementary Education", "Secondary Education", "Nursing", "Peace, Justice & Conflict Studies", "Social Work", "TESOL", "Bible and Religion"],
		},{
			text: "I'm good with numbers and am detail-oriented.",
			answer: "",
			majors: ["Accounting", "Business", "Sustainability Management", "Mathematics"],
		},{
			text: "I especially love working with children.",
			answer: "",
			majors: ["Elementary Education", "Physical Education"],
		},{
			text: "I'm very ambitious, persuasive, and love coming up with my own ideas.",
			answer: "",
			majors: ["Business", "Marketing", "Sustainability Management", "Sport Management"],
		},{
			text: "I'm concerned about the state of the environment and want to work to improve it.",
			answer: "",
			majors: ["Environmental & Marine Science", "Sustainability Management", "Sustainability Studies", "Sustainable Food Systems"],
		},{
			text: "I enjoy learning about different parts of the world.",
			answer: "",
			majors: ["History", "Peace, Justice & Conflict Studies", "Sociology", "Sustainability Studies", "Journalism"],
		},{
			text: "I'm interested in science and enjoy helping people.",
			answer: "",
			majors: ["Exercise Science", "Nursing", "Psychology", "Molecular Biology/Biochemistry", "Sustainability Studies", "Sustainable Food Systems"],
		},{
			text: "I need the freedom to be creative and express myself.",
			answer: "",
			majors: ["Art", "Film Production", "Theater", "Music", "Writing"],
		},{
			text: "I am interested in helping bodies heal and rehabilitate.",
			answer: "",
			majors: ["Exercise Science", "Physical Education", "Molecular Biology/Biochemistry", "Nursing"],
		},{
			text: "I am interested in conflict resolution, criminal justice or mediation.",
			answer: "",
			majors: ["Peace, Justice & Conflict Studies", "Psychology", "Sociology"],
		},{
			text: "I want to work with people on the margins of society or who have been oppressed.",
			answer: "",
			majors: ["Sign Language Interpreting", "Peace, Justice & Conflict Studies", "Social Work", "TESOL", "Psychology"],
		},{
			text: "I'm interested in technology and learning how computers work.",
			answer: "",
			majors: ["Computer Science", "Information Technology"],
		},{
			text: "I like to work with my hands and be outdoors.",
			answer: "",
			majors: ["Sustainable Food Systems", "Environmental & Marine Science", "Engineering Physics", "Art", "Sustainability Studies"],
		},{
			text: "I am always reading a book or writing my own stories.",
			answer: "",
			majors: ["English", "Journalism", "History", "Writing", "Communication"],
		},{
			text: "I like to offer advice to others.",
			answer: "",
			majors: ["Psychology", "Social Work", "Bible and Religion", "Elementary Education", "Sustainability Management"],
		}
	];
	shuffle(questions);

	// mappings between each major and their url, score, and associated question count
	var majors = {
		'History': {
			url: 'https://history.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Peace, Justice & Conflict Studies': {
			url: '/academics/peace-justice-and-conflict-studies/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Sustainability Studies': {
			url: '/academics/sustainability-studies/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Sustainable Food Systems': {
			url: '/academics/sustainable-food-systems/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Environmental & Marine Science': {
			url: '/academics/environmental-marine-science/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Molecular Biology/Biochemistry': {
			url: '/academics/molecular-biology-biochemistry/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Chemistry': {
			url: '/academics/chemistry/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Biology': {
			url: '/academics/biology/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Nursing': {
			url: '/academics/nursing/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Exercise Science': {
			url: '/academics/exercise-science/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Psychology': {
			url: '/academics/psychology/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Social Work': {
			url: '/academics/social-work/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Bible and Religion': {
			url: '/academics/bible-and-religion/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Physical Education': {
			url: '/academics/physical-education/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Elementary Education': {
			url: '/academics/elementary-education/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Secondary Education': {
			url: '/academics/secondary-education/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'TESOL': {
			url: '/academics/tesol/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Spanish': {
			url: '/academics/spanish/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Sign Language Interpreting': {
			url: '/academics/sign-language-interpreting/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Sociology': {
			url: 'https://socanth.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'English': {
			url: '/academics/english/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Writing': {
			url: '/academics/writing/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Journalism': {
			url: '/academics/journalism/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Public Relations': {
			url: '/academics/public-relations/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Broadcasting': {
			url: '/academics/broadcasting/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Film Production': {
			url: '/academics/film-production/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Theater': {
			url: '/academics/theater/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Music': {
			url: '/academics/music/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Art': {
			url: '/academics/art/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Communication': {
			url: '/academics/communication/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Marketing': {
			url: '/academics/marketing/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Business': {
			url: '/academics/business/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Sport Management': {
			url: '/academics/sport-management/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Sustainability Management': {
			url: '/academics/sustainability-management/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Accounting': {
			url: 'https://accountancy.olemiss.edu',
			score: averageScore,
			questions: 0,
		},
		'Engineering Physics': {
			url: '/academics/engineering-physics/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Physics': {
			url: '/academics/physics/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Mathematics': {
			url: '/academics/mathematics/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Computer Science': {
			url: '/academics/computer-science/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
		'Information Technology': {
			url: '/academics/information-technology/?gc_source=majorquiz',
			score: averageScore,
			questions: 0,
		},
	};

	// sort the major naems to use as labels on the graph
	var sortedMajors = Object.keys( majors );

	// for each major, calculate how many associated questions it has
	for (var i = 0; i < questions.length; i++) {
		var associatedMajorNames = questions[i].majors;
		for (var j = 0; j < associatedMajorNames.length; j++) {
			// also increment the number of questions for this major
			var majorName = associatedMajorNames[j];
			if (majors.hasOwnProperty( majorName )) {
				majors[ majorName ].questions++;
			}
			else {
				console.error('Major ', majorName, 'found in list of questions but not list of majors');
			}
		};
	};

	// display first question
	goToQuestion( 0 );

	// add listeners to radio buttons
	toggleRadioListeners( true );

	// add listeners to prev/next buttons
	prevButton.addEventListener('click', goToPrevQuestion);
	nextButton.addEventListener('click', goToNextQuestion);

	// add listener to "return to questions" button
	returnButton.addEventListener('click', function()
	{
		resultsContainer.classList.add('hide');
		questionContainer.classList.remove('hide');
	});

	// load jQuery and setup click handlers
	gc.scripts.jquery.then(function()
	{
		// load ChartJS library and display the chart
		// gc.load('chartjs', 'https://www.goshen.edu/js/Chart.min.js').then(function()
		// {
		loadChartJS();

		// fade out loading message
		document.getElementById('quiz__loading-chart').style.display = 'none';

		// Set up the data for the radar chart
		var data = {
			labels: sortedMajors,
			datasets: [{
				label: "Majors",
				fillColor: "rgba(139, 105, 166, .5)",
				strokeColor: "rgb(139, 105, 166)",
				pointColor: "rgb(73, 23, 110)",

				// This array holds the point value for each major
				data: sortedMajors.map( function(majorName)
					{
						return majors[ majorName ].score;
					})
			}]
		};

		// Set up options for the radar chart
		var options = {
			scaleShowGridLines : false,
			responsive: true,
			showTooltips: false,
			pointLabelFontSize: 12,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: true,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: 4,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: 1,
			// Number - The scale starting value
			scaleStartValue: 0,
		};

		// initialize chart
		var chartContext = document.getElementById('quiz__chart').getContext('2d');
		chart = new Chart(chartContext).Radar(data, options);
	// });
	});

	function radioListener( evt )
	{
		// answer question with a yes or no
		if (evt.target.id === "quiz__question-radio--yes") {
			answerQuestion( currentQuestionIndex, 'yes' );
		}
		else {
			answerQuestion( currentQuestionIndex, 'no' );
		}
		goToNextQuestion();
	}

	function toggleRadioListeners( listen ) {
		for (var i = radioButtons.length - 1; i >= 0; i--) {
			if (listen) {
				radioButtons[i].addEventListener('change', radioListener );
			}
			else {
				radioButtons[i].removeEventListener('change', radioListener );
			}
		}
	}

	/**
	 * Give an answer (yes/no) to a question by index
	 * @param  {Integer} i      Question index
	 * @param  {String} answer  'yes'/'no'
	 */
	function answerQuestion( i, answer )
	{
		// validate inputs
		if ( !questions[i] ) {
			console.error('Question with index', i, 'not found');
			return;
		}
		if ( answer !== 'yes' && answer !== 'no' ) {
			console.error('Invalid answer', answer ,'provided to question with index', i, ':', questions[i].text);
			return;
		}

		// list of major names associated with current question.
		var associatedMajorNames = questions[i].majors;

		// amount to change score for each major depending on number of questions it's associated with.
		// if it's associated with more than 6 questions, it defaults to .2
		var scoreChangeAmounts = [ 1.3, .8, .6, .4, .3, .25 ];
		var scoreChangeDefault = .2;

		// add or subtract score changes based on answer to question
		var scoreMultiplier;
		// if question is unanswered, simply add/subtract scorechange
		if ( questions[i].answer === '' ) {
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
			var major = majors[ associatedMajorNames[i] ];
			var scoreChange;
			// change it's score
			if (major.questions < scoreChangeAmounts.length) {
				scoreChange = scoreChangeAmounts[ major.questions ] * scoreMultiplier;
			}
			else {
				scoreChange = .2 * scoreMultiplier;
			}
			major.score += scoreChange;
			totalScoreChange += scoreChange;
		};

		// normalize all scores so that they continue to add up to the initial sum of scores
		// by subtracting a fraction of totalScoreChange from all other majors
		var scoreFraction = totalScoreChange / ( sortedMajors.length - associatedMajorNames.length );

		for (var i = 0; i < sortedMajors.length; i++) {
			var score = majors[ sortedMajors[i] ].score;
			// only subtract scoreFraction from non-associated majors
			if (associatedMajorNames.indexOf( sortedMajors[i] ) === -1) {
				score -= scoreFraction;
			}
			// keep all scores in 0-4 bound
			score = score < 0 ? 0 : ( score > 4 ? 4 : score );
			// update object
			majors[ sortedMajors[i] ].score = score;
			// update chart's data set
			if (chart) {
				chart.datasets[0].points[ i ].value = score;
			}
		}
		// update chart
		if ( chart ) {
			chart.update();
		}
	}

	/**
	 * Update html to display a particular question
	 * @param  {Integer} i Index of question in questions array
	 */
	function goToQuestion( i )
	{
		if (currentQuestionIndex === i) {
			console.error('Attempting to transition to current question');
			return;
		}
		if ( !questions[i] ) {
			console.error('Question with index', i, 'not found');
			return;
		}

		questionContainer.classList.add('quiz__question--transitioning');
		setTimeout(function()
		{
			// update text and count
			questionText.innerHTML = questions[i].text;
			questionCount.innerHTML = (i+1) + ' / ' + questions.length;
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

	function goToResults()
	{
		console.log('showing results');
		// get top 5 majors;
		// slice(0) is used to copy sortedMajors instead of modify it
		var top5 = sortedMajors.slice(0).sort(function(a, b) {
			return -(majors[a].score - majors[b].score)
		}).slice(0, 5);

		var html = '<p>Thanks for taking our quiz! Your top 5 majors are:</p><ol>';
		for (var i = 0; i < top5.length; i++) {
			html += ['<li><a href="', majors[ top5[i] ].url ,'" target="_blank">', top5[i], '</a></li>'].join('');
		};
		html += '</ol>';

		resultsText.innerHTML = html;

		resultsContainer.classList.remove('hide');
		questionContainer.classList.add('hide');

		trackCompletion();
	}

	function goToNextQuestion()
	{
		if (currentQuestionIndex < questions.length - 1) {
			goToQuestion( currentQuestionIndex + 1 );
		}
		else {
			goToResults();
		}
	}

	function goToPrevQuestion()
	{
		goToQuestion( currentQuestionIndex - 1 );
	}

	// Fire Google Analytics upon first quiz completion
	function trackCompletion()
	{
		if ( window.dataLayer ) {
			dataLayer.push({ 'event': 'Quiz Completion: What should you major in?' });
		}
	}

	/**
	 * Taken from stackoverflow
	 * http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
	 * Shuffles array in place.
	 * @param {Array} a items The array containing the items.
	 */
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


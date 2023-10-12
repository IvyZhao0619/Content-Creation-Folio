var quizWindow = window.location.pathname;

window.addEventListener("load", function(){
	if (window.location.pathname == '/d2l/lms/quizzing/user/attempt/quiz_attempt_page_auto.d2l') {
		// console.log('JS input from JB');

		// Add Scripts
	    var addJqueryLibrary = document.createElement('script');
	    addJqueryLibrary.setAttribute('src','https://s.brightspace.com/lib/jquery/2.2.4/jquery.min.js');
	    addJqueryLibrary.setAttribute('type','text/javascript');
	    document.body.appendChild(addJqueryLibrary);

		$('.d2l-quiz-textbox-html-container').after('<div style="margin-top: 1em;"><em>Please save your written responses regularly and at least every 2 minutes</em></div><button type="button" primary="" class="d2l-button">SAVE YOUR WRITTEN RESPONSE</button>');
		$('.d2l-quiz-textbox-container').after('<div style="margin-top: 1em;"><em>Please save your written responses regularly and at least every 2 minutes</em></div><button type="button" primary="" class="d2l-button">SAVE YOUR WRITTEN RESPONSE</button>');
	}
});

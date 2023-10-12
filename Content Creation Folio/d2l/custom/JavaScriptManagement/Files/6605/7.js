//Assignment Ext logout

$(document).ready(function() {
	console.log('Log Out JS');

	var logoutBtnCounter = 0;
	function addLogOutButton() {

		if ($('.d2l-navigation-s-personal-menu .d2l-list a:contains(Log Out)').length) {

			console.log('Logout button found');
			$('.d2l-navigation-s-personal-menu .d2l-list a:contains(Log Out)').addClass('assignmentExtLogOut');

		} else {

			if (logoutBtnCounter < 20) {
	            console.log('SetTimeout > logoutBtnCounter');
	            logoutBtnCounter++;
	            setTimeout(addLogOutButton(), 50);
		    }
		}
	}
	addLogOutButton();
	

});

$(document).on('click', '.assignmentExtLogOut', function (event) {
	win = window.open('https://assignment-extension.apps.deakin.edu.au/logout', '_blank');

});

if (Meteor.isClient) {

	Deps.autorun(function (user) {
		if (Meteor.user()) {
			user.stop();
			userIsLoggedIn();
		} else {
			userIsLoggedOut();
		}
	});

	function userIsLoggedIn() {
		console.log('user is logged in');
		$('#login-background').fadeOut(500, function() {
			$('#permanent-header').fadeIn('slow');
		});
	}

	function userIsLoggedOut() {
		console.log('user is logged out');
		$('#permanent-header').fadeOut(500, function() {
			$('#login-background').fadeIn('slow');
		});
	}
}

if (Meteor.isServer) {

}
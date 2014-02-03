if (Meteor.isClient) {

	Deps.autorun(function (user) {
		if (Meteor.user()) {
			// console.log('user is logged in');
			user.stop();
			userIsLoggedIn();
		}
	});

	function userIsLoggedIn() {

		$('#login-background').fadeOut(500, function() {
			$('#permanent-header').fadeIn('slow');
		});

	}
}

if (Meteor.isServer) {

}
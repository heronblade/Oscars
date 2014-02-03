if (Meteor.isClient) {

	Deps.autorun(function (user) {
		if (Meteor.user()) {
			// console.log('user is logged in');
			user.stop();
			userIsLoggedIn();
		}
	});

	function userIsLoggedIn() {
		
	}
}

if (Meteor.isServer) {
	
}
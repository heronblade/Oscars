if (Meteor.isClient) {
	Template.login.rendered = function() {

	}

	Template.login.events = {
		'click .login-link-text' : function(e) {
			console.log('josh');
		}

	}
}
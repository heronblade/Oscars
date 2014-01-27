//collections
bestPicture = new Meteor.Collection('bestPicture');
josh = new Meteor.Collection('josh');

if (Meteor.isClient) {
	Template.bestPicture.person = function() {
		// console.log(bestPicture.find({}));
		return bestPicture.find({});
	}

	Template.josh.foods = function() {
		return josh.find();
	}
}

if (Meteor.isServer) {
	if (bestPicture.find().count === 0) {
		var names = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < names.length; i++)
        bestPicture.insert({name: names[i]});
	}

	if (josh.find().count === 0) {
		console.log('josh is empty');
	} else {
		console.log('josh is not empty');
		josh.insert({food: 'peach'});
	}
}
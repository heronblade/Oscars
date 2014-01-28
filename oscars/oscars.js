// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Meteor.Collection("players");
joe = new Meteor.Collection('bestPicture');

if (Meteor.isClient) {
	Template.bestPicture.nominee = function() {
		return joe.find({});
	}

  Template.leaderboard.josh = function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
  };

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.name;
  };

  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.leaderboard.events({
    'click input.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 5}});
    }
  });

  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
    }

    if (joe.find().count() === 0) {
    	var name = [
                '12 Years A Slave',
                'American Hustle',
                'Captain Phillips',
                'Dallas Buyers Club',
                'Gravity',
                'Her',
                'Nebraska',
                'Philomena',
                'The Wolf of Wall Street'];
        var img = [
                '12-years-a-slave',
                'american-hustle',
                'captain-phillips',
                'dallas-buyers-club',
                'gravity',
                'her',
                'nebraska',
                'philomena',
                'the-wolf-of-wall-street'];
        var trailer = [
                'vUQNjfhlREk',
                'ST7a1aK_lG0',
                '_3ASoBrFGlc',
                'fvMPU0WaPcc',
                'ufsrgE0BYf0',
                'WzV6mXIOVl4',
                'UT5tqPojMtg',
                '4DBPqcp6Hc4',
                'iszwuX1AK6A'];

        for (var i = 0; i < name.length; i++) {
        	joe.insert({name: name[i], img: img[i], trailer: trailer[i]});
        }
    }
  });
}

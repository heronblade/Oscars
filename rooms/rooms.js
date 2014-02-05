//collections
rooms = new Meteor.Collection('rooms');


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
        var profileImage = "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
        Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.profileImage":profileImage}});
        $('#rooms').fadeIn('slow');
    }

    function userIsLoggedOut() {
        console.log('user is logged out');
    }

    Template.chooseARoom.room = function() {
        return rooms.find();
    }

    Template.image.profileImage = function() {
        if (Meteor.user()) {
            var profileImage = Meteor.user().profile.profileImage;
            return profileImage;
        }  
    }


}

if (Meteor.isServer) {
  Meteor.startup(function () {

    rooms.remove({});
    // if (rooms.find().count() === 0) {
    //   var name = [
    //     'josh', 'joe', 'rach', 'liz'
    //   ];

    //   var occupants = [
    //     'me', 'you', 'them', 'us'
    //   ];

    //   var age = [
    //     '2', '12', '234324', '2342343421234'
    //   ];

    //   for (var i = 0; i < name.length; i++) {
    //     rooms.insert({name: name[i], occupants: occupants[i], age: age[i]});
    //   }
    // }
  });
}

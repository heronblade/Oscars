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

    Template.createARoom.events({
        'click .create-a-room-submit': function() {
            //store the room name and room password
            var roomName = $('#roomName').val();
            var roomPassword = $('#roomPassword').val();

            //if both of them are not blank, insert them into the room collection
            if (roomName !== '' && roomPassword !== '') {
                rooms.insert({name: roomName, password: roomPassword, subs: Meteor.user()._id});
                // Meteor.users.update({_id:Meteor.user()._id}, {$set:{'profile.rooms':roomName}});
                Meteor.users.update(Meteor.userId(), { $add: {'profile.rooms':roomName}});
                console.log(rooms);
            }

            //hide the create a room
            $('#create-a-room').fadeOut('400');
        }
    });


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

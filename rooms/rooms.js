//collections
rooms = new Meteor.Collection('rooms');


if (Meteor.isClient) {

    Deps.autorun(function (user) {
        if (Meteor.user()) {
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
        console.log('not logged in ');
        $('#rooms').fadeOut('slow');
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
            $('#roomName').val('');
            $('#roomPassword').val('');

            console.log('room name: ' + roomName); console.log('room pass ' + roomPassword);

            //if both of them are not blank, insert them into the room collection
            if (roomName !== '' && roomPassword !== '') {

                //make the room name unique.  search through room collection to see if room already
                //exists. if it does tell user, if it doesn't create it and add current user to subs array.
                var isTheRoomThere = rooms.find({name: roomName}).fetch();
                if ($.isEmptyObject(isTheRoomThere)) {
                    rooms.insert({name: roomName, password: roomPassword, subs: Meteor.userId()});
                    //hide the create a room
                    // $('#create-a-room').fadeOut('400');
                } else {
                    alert('This room has already been created. Please choose another name');
                }

                Meteor.users.update(Meteor.userId(), {$addToSet: {'profile.test': roomName}});

                console.log(rooms);
            }
        }
    });

    //Clicking on a room name
    Template.chooseARoom.events({
        'click .go-to-room': function(event) {
            var buttonClicked = event.currentTarget;
            var buttonData = $(buttonClicked).data().room;
            console.log(buttonData);
            // var dataRoom = $(this).attr('data-room');
            // console.log('dataRoom ' + dataRoom);
        }
    });


}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // rooms.remove({});
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

//collections
rooms = new Meteor.Collection('rooms');

if (Meteor.isClient) {

  Template.chooseARoom.room = function() {
    return rooms.find();
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

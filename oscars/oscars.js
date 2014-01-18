
//collections
bestPicture = new Meteor.Collection('bestPicture');
actor = new Meteor.Collection('actor');
actress = new Meteor.Collection('actress');
actorSupp = new Meteor.Collection('actorSupp');
actressSupp = new Meteor.Collection('actressSupp');
animateFeatFilm = new Meteor.Collection('animateFeatFilm');
cinematography = new Meteor.Collection('cinematography');
costumeDesign = new Meteor.Collection('costumeDesign');
directing = new Meteor.Collection('directing');
docFeature = new Meteor.Collection('docFeature');
docShort = new Meteor.Collection('docShort');
filmEditing = new Meteor.Collection('filmEditing');
foreignLanguage = new Meteor.Collection('foreignLanguage');
makeup = new Meteor.Collection('makeup');
musicOrigScore = new Meteor.Collection('musicOrigScore');
musicOrigSong = new Meteor.Collection('musicOrigSong');
prodDesign = new Meteor.Collection('prodDesign');
shortFilmAnimated = new Meteor.Collection('shortFilmAnimated');
shortFilmLiveAction = new Meteor.Collection('shortFilmLiveAction');
soundEditing = new Meteor.Collection('soundEditing');
soundMixing = new Meteor.Collection('soundMixing');
visualEffects = new Meteor.Collection('visualEffects');
writingAdapted = new Meteor.Collection('writingAdapted');
writingOriginal = new Meteor.Collection('writingOriginal');



if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    if (bestPicture.find().count() == 0) {
      var name = [
        '12 Years A Slave',
        'American Hustle',
        'Captain Phillips',
        'Dallas Buyers Club',
        'Gravity',
        'Her',
        'Nebraska',
        'Philomena',
        'The Wolf of Wall Street'
      ];
      var info = [];
      var img = [];
      var trailer = [];
    }
  });
}

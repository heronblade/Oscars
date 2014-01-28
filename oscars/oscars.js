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
  Template.bestPicture.nominee = function() {
    return bestPicture.find();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (bestPicture.find().count() === 0) {
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
          bestPicture.insert({name: name[i], img: img[i], trailer: trailer[i]});
        }
    }
  });
}

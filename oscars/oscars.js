
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

	//picture
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

	//director
	if (directing.find().count() == 0) {
		var name = [
			'Alexander Payne - Nebraska',
			'Alfonso Cuaron - Gravity',
			'David O. Russell - American Hustle',
			'Martin Scorcese - The Wolf of Wall Street',
			'Steve McQueen - 12 Years a Slave'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//actor
	if (directing.find().count() == 0) {
		var name = [
			'Bruce Dern - Nebraska',
			'Chiwetel Ejiofor - 12 years a Slave',
			'Christian Bale - American Hustle',
			'Leonardo DiCaprio - The Wolf of Wall Street',
			'Matthew McConaughey - Dallas Buyers Club'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//actress
	if (directing.find().count() == 0) {
		var name = [
			'Amy Adams - American Hustle',
			'Cate Blanchett - Blue Jasmine',
			'Judi Dench - Philomena',
			'Meryl Streep - August: Osage County',
			'Sandra Bullock - Gravity'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//supporting actor
	if (directing.find().count() == 0) {
		var name = [
			'Barkhad Abdi - Captain Phillips',
			'Bradley Cooper - American Hustle',
			'Jared Leto - Dallas Buyers Club',
			'Jonah Hill - The Wolf of Wall Street',
			'Michael Fassbender - 12 Years a Slave'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//supporting actress
	if (directing.find().count() == 0) {
		var name = [
			'Jennifer Lawrence - American Hustle',
			'Julia Roberts - August: Osage County',
			'June Squibb - Nebraska',
			'Lupita Nyong\'o - 12 Years a Slave',
			'Sally Hawkins - Blue Jasmine'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//original screenplay
	if (directing.find().count() == 0) {
		var name = [
			'American Hustle - David O. Russell and Eric Warren Singer',
			'Blue Jasmine - Woody Allen',
			'Dallas Buyers Club - Craig Borten and Melisa Wallack',
			'Her - Spike Jonze',
			'Nebraska - Bob Nelson'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//adapted screenplay
	if (directing.find().count() == 0) {
		var name = [
			'12 Years a Slave - John Ridley',
			'Before Midnight - Julie Delpy, Ethan Hawke and Richard Linklater',
			'Captain Phillips - Billy Ray',
			'Philomena - Steve Coogan and Jeff Pope',
			'The Wolf of Wall Street - Terrance Winter'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//animated feature
	if (directing.find().count() == 0) {
		var name = [
			'Despicable Me 2',
			'Ernest & Celestine',
			'Frozen',
			'The Croods',
			'The Wind Rises'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//foreign
	if (directing.find().count() == 0) {
		var name = [
			'Omar - Palestinian territories',
			'The Broken Circle Breakdown - Belgium',
			'The Great Beauty - Italy',
			'The Hunt - Denmark',
			'The Missing Picture - Cambodia'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//original song
	if (directing.find().count() == 0) {
		var name = [
			'"Alone Yet Not Alone": "Alone Yet Not Alone" - Bruce Broughton, Dennis Spiegel',
			'"Despicable Me 2": "Happy" - Pharrell Williams', 
			'"Frozen": "Let it Go" - Robert Lopez and Kristen Anderson-Lopez', 
			'"Her": "The Moon Song" - Karen O, Spike Jonze', 
			'"Mandela: Long Walk to Freedom": "Ordinary Love" -- U2, Paul Hewson'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//original score
	if (directing.find().count() == 0) {
		var name = [
			'"Gravity" -- Steven Price', 
			'"Her" -- William Butler and Owen Pallett',
			'"Philomena" -- Alexandre Desplat',
			'"Saving Mr. Banks" -- Thomas Newman',
			'"The Book Thief" -- John Williams'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//cinematography
	if (directing.find().count() == 0) {
		var name = [
			'"Gravity" -- Emmanuel Lubezki', 
			'"Inside Llewyn Davis" -- Bruno Delbonnel', 
			'"Nebraska" -- Phedon Papamichael', 
			'"Prisoners" -- Roger Deakins', 
			'"The Grandmaster" -- Phillippe Le Sourd'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//costume
	if (directing.find().count() == 0) {
		var name = [
			'"12 Years a Slave" -- Patricia Norris', 
			'"American Hustle" -- Michael Wilkinson', 
			'"The Grandmaster" -- William Chang Suk Ping', 
			'"The Great Gatsby" -- Catherine Martin',
			'"The Invisible Woman" -- Michael O\'Connor'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//documentary feature
	if (directing.find().count() == 0) {
		var name = [
			'"20 Feet From Stardom", 
			'"Cutie and the Boxer", 
			'"Dirty Wars",
			'"The Act of Killing", 
			'"The Square"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//film editing
	if (directing.find().count() == 0) {
		var name = [
			'"12 Years a Slave"-- Joe Walker', 
			'"American Hustle" -- Jay Cassidy, Crispin Struthers and Alan Baumgarten', 
			'"Captain Phillips" -- Christopher Rouse ',
			'"Dallas Buyers Club" -- John Mac McMurphy and Martin Pensa',
			'"Gravity" -- Alfonso Cuaron, Mark Sanger'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//makeup and hairstyling
	if (directing.find().count() == 0) {
		var name = [
			'"Dallas Buyers Club" -- Adruitha Lee and Robin Mathews',
			'"Jackass Presents: Bad Grandpa" -- Stephen Prouty',
			'"The Lone Ranger" -- Joel Harlow and Gloria Pasqua-Casny'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//production design
	if (directing.find().count() == 0) {
		var name = [
			'"12 Years a Slave" -- Adam Stockhausen and Alice Baker', 
			'"American Hustle" -- Judy Becker and Heather Loeffler', 
			'"Gravity" -- Andy Nicholson, Rosie Goodwin and Joanne Woollard ',
			'"Her" -- K.K. Barrett and Gene Serdena',
			'"The Great Gatsby" -- Catherine Martin and Beverley Dunn'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//vfx
	if (directing.find().count() == 0) {
		var name = [
			'"Gravity"',
			'"Iron Man 3"',
			'"Star Trek Into Darkness"',
			'"The Hobbit: The Desolation of Smaug"',
			'"The Lone Ranger"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//sound mixing
	if (directing.find().count() == 0) {
		var name = [
			'"Captain Phillips"', 
			'"Gravity"', 
			'"Inside Llewyn Davis"', 
			'"Lone Survivor"',
			'"The Hobbit: The Desolation of Smaug"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//sound editing
	if (directing.find().count() == 0) {
		var name = [
			'"All Is Lost"',
			'"Captain Phillips"', 
			'"Gravity"',
			'"Lone Survivor"',
			'"The Hobbit: The Desolation of Smaug"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//short film live action
	if (directing.find().count() == 0) {
		var name = [
			'"Aquel No Era Yo (That Wasn\'t Me)"', 
			'"Avant Que De Tout Perdre (Just Before Losing Everything)"', 
			'"Helium"', 
			'"Pitaako Mun Kaikki Hoitaa? (Do I Have to Take Care of Everything?)"', 
			'"The Voorman Problem"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//short film animated
	if (directing.find().count() == 0) {
		var name = [
			'"Feral"', 
			'"Get a Horse!"', 
			'"Mr. Hublot"', 
			'"Possessions"',
			'"Room on the Broom"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

	//documentary short
	if (directing.find().count() == 0) {
		var name = [
			'"CaveDigger" ',
			'"Facing Fear"', 
			'"Karama Has No Walls" ',
			'"Prison Terminal: The Last Days of Private Jack Hall"',
			'"The Lady in Number 6: Music Saved My Life"'
		];
		var info = [];
		var img = [];
		var trailer = [];
	}

});
}

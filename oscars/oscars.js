
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
		var img = [
			'12-years-a-slave',
			'american-hustle',
			'captain-phillips',
			'dallas-buyers-club',
			'gravity',
			'her',
			'nebraska',
			'philomena',
			'the-wolf-of-wall-street'
		];
		var trailer = [
			'vUQNjfhlREk',
			'ST7a1aK_lG0',
			'_3ASoBrFGlc',
			'fvMPU0WaPcc',
			'ufsrgE0BYf0',
			'WzV6mXIOVl4',
			'UT5tqPojMtg',
			'4DBPqcp6Hc4',
			'iszwuX1AK6A'
		];
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
		var img = [
			'alexander-payne',
			'alfonso-cuaron',
			'david-o-russell',
			'martin-scorcese',
			'steve-mcqueen'
		];
		var trailer = [
			'UT5tqPojMtg',
			'ufsrgE0BYf0',
			'ST7a1aK_lG0',
			'iszwuX1AK6A',
			'vUQNjfhlREk'
		];
	}

	//actor
	if (actor.find().count() == 0) {
		var name = [
			'Bruce Dern - Nebraska',
			'Chiwetel Ejiofor - 12 years a Slave',
			'Christian Bale - American Hustle',
			'Leonardo DiCaprio - The Wolf of Wall Street',
			'Matthew McConaughey - Dallas Buyers Club'
		];
		var info = [];
		var img = [
			'bruce-dern',
			'chiwetel-ejiofor',
			'christian-bale',
			'leonardo-di-caprio',
			'matthew-mcconaughey'
		];
		var trailer = [
			'UT5tqPojMtg',
			'vUQNjfhlREk',
			'NqgjPRNRDSY',
			'pabEtIERlic',
			'fvMPU0WaPcc'
		];
	}

	//actress
	if (actress.find().count() == 0) {
		var name = [
			'Amy Adams',
			'Cate Blanchet',
			'Judi Dench',
			'Meryl Streep',
			'Sandra Bullock'
		];
		var info = [
			'American Hustle',
			'Blue Jasmine',
			'Philomena',
			'August: Osage County',
			'Gravity'
		];
		var img = [
			'amy-adams',
			'cate-blanchett',
			'judi-dench',
			'meryl-streep',
			'sandra-bullock'
		];
		var trailer = [
			'NqgjPRNRDSY',
			'FER3C394aI8',
			'4DBPqcp6Hc4',
			'9Hd_uO72h1s',
			'C4pcg7bXgmU'
		];
	}

	//supporting actor
	if (actorSupp.find().count() == 0) {
		var name = [
			'Barkhad Abdi',
			'Bradley Cooper',
			'Jared Leto',
			'Jonah Hill',
			'Michael Fassbender'
		];
		var info = [
			'Captain Phillips',
			'American Hustle',
			'Dallas Buyers Club',
			'The Wolf of Wall Street',
			'12 Years a Slave'
		];
		var img = [
			'barkhad-abdi',
			'bradley-cooper',
			'jared-leto',
			'jonah-hill',
			'michael-fassbender'
		];
		var trailer = [
			'TzU3UJuV80w',
			'NqgjPRNRDSY',
			'fvMPU0WaPcc',
			'pabEtIERlic',
			'vUQNjfhlREk'
		];
	}

	//supporting actress
	if (actressSupp.find().count() == 0) {
		var name = [
			'Jennifer Lawrence',
			'Julia Roberts',
			'June Squibb',
			'Lupita Nyong\'o ',
			'Sally Hawkins'
		];
		var info = [
			'American Hustle',
			'August: Osage Country',
			'Nebraska',
			'12 Years a Slave',
			'Blue Jasmine'
		];
		var img = [
			'jennifer-lawrence',
			'julia-roberts',
			'june-squibb',
			'lupita-nyongo',
			'sally-hawkins'
		];
		var trailer = [
			'NqgjPRNRDSY',
			'9Hd_uO72h1s',
			'UT5tqPojMtg',
			'vUQNjfhlREk',
			'FER3C394aI8'
		];
	}

	//original screenplay
	if (writingOriginal.find().count() == 0) {
		var name = [
			'American Hustle',
			'Blue Jasmine',
			'Dallas Buyers Club',
			'Her',
			'Nebraska'
		];
		var info = [
			'David O. Russell and Eric Warren Singer',
			'Woody Allen',
			'Craig Borten and Melisa Wallack',
			'Spike Jonze',
			'Bob Nelson'
		];
		var img = [
			'american-hustle',
			'blue-jasmine',
			'dallas-buyers-club',
			'her',
			'nebraska'
		];
		var trailer = [
			'NqgjPRNRDSY',
			'FER3C394aI8',
			'fvMPU0WaPcc',
			'WzV6mXIOVl4',
			'UT5tqPojMtg'
		];
	}

	//adapted screenplay
	if (writingAdapted.find().count() == 0) {
		var name = [
			'12 Years a Slave',
			'Before Midnight',
			'Captain Phillips',
			'Philomena',
			'The Wolf of Wall Street'
		];
		var info = [
			'John Ridley',
			'Julie Delpy, Ethan Hawke and Richard Linklater',
			'Billy Ray',
			'Steve Coogan and Jeff Pope',
			'Terrance Winter'

		];
		var img = [
			'12-years-a-slave'
			'before-midnight',
			'captain-phillips',
			'philomena',
			'the-wolf-of-wall-street'
		];
		var trailer = [
			'vUQNjfhlREk',
			'euOJkb0U8vE',
			'TzU3UJuV80w',
			'4DBPqcp6Hc4',
			'pabEtIERlic'
		];
	}

	//animated feature
	if (animateFeatFilm.find().count() == 0) {
		var name = [
			'Despicable Me 2',
			'Ernest & Celestine',
			'Frozen',
			'The Croods',
			'The Wind Rises'
		];
		var info = [];
		var img = [
			'despicable-me-2',
			'ernest-and-celestine',
			'frozen',
			'the-croods',
			'the-wind-rises'
		];
		var trailer = [
			'HwXbtZXjbVE',
			'UJ1rmOYLr2U',
			'TbQm5doF_Uc',
			'VeG3Zmk08UU',
			'PhHoCnRg1Yw'
		];
	}

	//foreign
	if (foreignLanguage.find().count() == 0) {
		var name = [
			'Omar',
			'The Broken Circle Breakdown',
			'The Great Beauty',
			'The Hunt',
			'The Missing Picture'
		];
		var info = [
			'Palestinian territories',
			'Belgium',
			'Italy',
			'Denmark',
			'Cambodia'
		];
		var img = [
			'omar',
			'the-broken-circle-breakdown',
			'the-great-beauty',
			'the-hunt',
			'the-missing-picture'
		];
		var trailer = [
			'v5dSeBD-qiY',
			'3a50DJkCxqw',
			'fJfvX6zPAuQ',
			'vK9cO7QN8Ak',
			'3tZL5S5thvs'
		];
	}

	//original song
	if (musicOrigSong.find().count() == 0) {
		var name = [
			'Alone Yet Not Alone: Alone Yet Not Alone',
			'Despicable Me 2: Happy',
			'Frozen: Let it Go',
			'Her: The Moon Song',
			'Mandela: Long Walk to Freedom: Ordinary Love'
		];
		var info = [
			'Bruce Broughton, Dennis Spiegel',
			'Pharrell Williams',
			'Robert Lopez and Kristen Anderson-Lopez',
			'Karen O, Spike Jonze',
			'U2, Paul Hewson'
		];
		var img = [
			'bruce-broughton',
			'pharrell-williams',
			'robert-and-kristen-lopez',
			'karen-0',
			'paul-hewson'
		];
		var trailer = [
			'3n0TORpISk8',
			'y6Sxv-sUYtM',
			'moSFlvxnbgk',
			'9teBt8bu5OY',
			'XC3ahd6Di3M'
		];
	}

	//original score
	if (musicOrigScore.find().count() == 0) {
		var name = [
			'Gravity',
			'Her',
			'Philomena',
			'Saving Mr. Banks',
			'The Book Thief'
		];
		var info = [
			'Steven Price',
			'William Butler and Owen Pallett',
			'Alexandre Desplat',
			'Thomas Newman',
			'John Williams'
		];
		var img = [
			'gravity',
			'her',
			'philomena',
			'saving-mr-banks',
			'the-book-thief'
		];
		var trailer = [
			'JS3DVf1U6P8',
			'xakaZwsUMio',
			'ik1eeCASO2w',
			'AtyV1fKwTAQ',
			'yeIczLYsII4'
		];
	}

	//cinematography
	if (cinematography.find().count() == 0) {
		var name = [
			'Gravity',
			'Inside Llewyn Davis',
			'Nebraska',
			'Prisoners',
			'The Grandmaster'
		];
		var info = [
			'Emmanuel Lubezki',
			'Bruno Delbonnel',
			'Phedon Papamichael',
			'Roger Deakins',
			'Phillippe Le Sourd'
		];
		var img = [
			'gravity',
			'inside-llewyn-davis',
			'nebraska',
			'prisoners',
			'the-grandmaster'
		];
		var trailer = [
			'd-w5EZKx-6A',
			'9qj6T24jf8Y',
			'lFjk39mfsoY',
			'QR1O1-oUlYg',
			'uC5amKLgnFU'
		];
	}

	//costume
	if (costumeDesign.find().count() == 0) {
		var name = [
			'12 Years a Slave',
			'American Hustle',
			'The Grandmaster',
			'The Great Gatsby',
			'The Invisible Woman'
		];
		var info = [
			'Patricia Norris',
			'Michael Wilkinson',
			'William Chang Suk Ping',
			'Catherine Martin',
			'Michael O\'Connor'
		];
		var img = [
			'12-years-a-slave',
			'american-hustle',
			'the-grandmaster',
			'the-great-gatsby',
			'the-invisible-woman'
		];
		var trailer = [
			'z02Ie8wKKRg',
			'3fHOEVaLbTE',
			'kWQLkrYxmpc',
			'KFLzfII-AaQ',
			'Ecc61t4g5f4'
		];
	}

	//documentary feature
	if (docFeature.find().count() == 0) {
		var name = [
			'20 Feet From Stardom',
			'Cutie and the Boxer',
			'Dirty Wars',
			'The Act of Killing',
			'The Square'
		];
		var info = [];
		var img = [
			'20-feet-from-stardom',
			'cutie-and-the-boxer',
			'dirty-wars',
			'the-act-of-killing',
			'the-square'
		];
		var trailer = [
			'tWyUJcA8Zfo',
			'YXS6Aby5AUg',
			'5KpzBAKJmig',
			'SD5oMxbMcHM',
			'twB2zAOzsKE'
		];
	}

	//film editing
	if (filmEditing.find().count() == 0) {
		var name = [
			'12 Years a Slave',
			'American Hustle',
			'Captain Phillips',
			'Dallas Buyers Club',
			'Gravity'
		];
		var info = [
			'Joe Walker',
			'Jay Cassidy, Crispin Struthers and Alan Baumgarten',
			'Christopher Rouse',
			'John Mac McMurphy and Martin Pensa',
			'Alfonso Cuaron, Mark Sanger'
		];
		var img = [
			'12-years-a-slave',
			'american-hustle',
			'captain-phillips',
			'dallas-buyers-club',
			'gravity'
		];
		var trailer = [
			'VsY2nWGkzfY',
			'ST7a1aK_lG0',
			'_3ASoBrFGlc',
			'fvMPU0WaPcc',
			'ufsrgE0BYf0'
		];
	}

	//makeup and hairstyling
	if (makeup.find().count() == 0) {
		var name = [
			'Dallas Buyers Club',
			'Jackass Presents: Bad Grandpa',
			'The Lone Ranger'
		];
		var info = [
			'Adruitha Lee and Robin Mathews',
			'Stephen Prouty',
			'Joel Harlow and Gloria Pasqua-Casny'
		];
		var img = [
			'bad-grandpa',
			'dallas-buyers-club',
			'the-lone-ranger'
		];
		var trailer = [
			'Hs1kpGNSRVk',
			'5IGTdHOLbgQ',
			'JjFsNSoDZK8'
		];
	}

	//production design
	if (prodDesign.find().count() == 0) {
		var name = [
			'12 Years a Slave',
			'American Hustle',
			'Gravity',
			'Her',
			'The Great Gatsby'
		];
		var info = [
			'Adam Stockhausen and Alice Baker',
			'Judy Becker and Heather Loeffler',
			'Andy Nicholson, Rosie Goodwin and Joanne Woollard',
			'K.K. Barrett and Gene Serdena',
			'Catherine Martin and Beverley Dunn'
		];
		var img = [
			'12-years-a-slave',
			'american-hustle',
			'gravity',
			'her',
			'the-great-gatsby'
		];
		var trailer = [
			'z02Ie8wKKRg',
			'ST7a1aK_lG0',
			'd-w5EZKx-6A',
			'WzV6mXIOVl4',
			'KFLzfII-AaQ'
		];
	}

	//vfx
	if (visualEffects.find().count() == 0) {
		var name = [
			'Gravity',
			'Iron Man 3',
			'Star Trek Into Darkness',
			'The Hobbit: The Desolation of Smaug',
			'The Lone Ranger'
		];
		var info = [];
		var img = [
			'gravity',
			'iron-man-3',
			'star-trek-into-darkness',
			'the-hobbit-the-desolation-of-smaug',
			'the-lone-ranger'
		];
		var trailer = [
			'75393DNNdjw',
			'TIRSTe8Qvmg',
			'Y-M3lFtPLGI',
			'xml_ACaaYMw',
			'JbuzAV1TAYc'
		];
	}

	//sound mixing
	if (soundMixing.find().count() == 0) {
		var name = [
			'Captain Phillips',
			'Gravity',
			'Inside Llewyn Davis',
			'Lone Survivor',
			'The Hobbit: The Desolation of Smaug'
		];
		var info = [];
		var img = [
			'captain-phillips',
			'gravity',
			'inside-llewyn-davis',
			'lone-survivor',
			'the-hobbit-the-desolation-of-smaug'
		];
		var trailer = [
			'http://www.youtube.com/watch?v=GEyM01dAxp8',
			'http://www.youtube.com/watch?v=bujNUvMous4',
			'http://www.youtube.com/watch?v=ZcwLe2gGf2g',
			'http://www.youtube.com/watch?v=0cPJ1ifjBDs',
			'http://www.youtube.com/watch?v=1Rtql5bmGw8'
		];
	}

	//sound editing
	if (soundEditing.find().count() == 0) {
		var name = [
			'All Is Lost',
			'Captain Phillips',
			'Gravity',
			'Lone Survivor',
			'The Hobbit: The Desolation of Smaug'
		];
		var info = [];
		var img = [
			'all-is-lost',
			'captain-phillips',
			'gravity',
			'lone-survivor',
			'the-hobbit-the-desolation-of-smaug'
		];
		var trailer = [
			'Lk_R04LfUQU',
			'u7JptS2VZNg',
			'_RCG-uLQWzA',
			'TYHpr0kksKg',
			'1Rtql5bmGw8'
		];
	}

	//short film live action
	if (shortFilmLiveAction.find().count() == 0) {
		var name = [
			'Aquel No Era Yo (That Wasn\'t Me)',
			'Avant Que De Tout Perdre (Just Before Losing Everything)',
			'Helium',
			'Pitaako Mun Kaikki Hoitaa? (Do I Have to Take Care of Everything?)',
			'The Voorman Problem'
		];
		var info = [];
		var img = [
			'aquel-no-era-yo',
			'avant-que-de-tout-perdre',
			'helium',
			'pitaako-mun-kaikki-hoitaa',
			'the-voorman-problem'
		];
		var trailer = [
			'pfbDN94UucU',
			'PpGOaR1bTac',
			'UiHTwcEY230',
			'D0XJRHxK4Y8',
			'dmsljMbdW88'
		];
	}

	//short film animated
	if (shortFilmAnimated.find().count() == 0) {
		var name = [
			'Feral',
			'Get a Horse!',
			'Mr. Hublot',
			'Possessions',
			'Room on the Broom'
		];
		var info = [];
		var img = [
			'feral',
			'get-a-horse',
			'mr-hublot',
			'possessions',
			'room-on-the-broom'
		];
		var trailer = [
			'JI6WgxqQojA',
			'VIsuaDajIjg',
			'NbHYMGkX6Ro',
			'<iframe width="644" height="362" src="http://oscar.go.com/embed/VDKA0_57x8cum1" frameborder="0"></iframe>',
			'fzYgfuycWWw'
		];
	}

	//documentary short
	if (docShort.find().count() == 0) {
		var name = [
			'CaveDigger ',
			'Facing Fear',
			'Karama Has No Walls ',
			'Prison Terminal: The Last Days of Private Jack Hall',
			'The Lady in Number 6: Music Saved My Life'
		];
		var info = [];
		var img = [
			'',
			'',
			'',
			'',
			''
		];
		var trailer = [
			'SH-SyQtu0w0',
			'QZP3cZAfLfs',
			'UgC6pr6nREk',
			'iYCL47ass7E',
			'LrXHcQyixTE'
		];
	}

});
}

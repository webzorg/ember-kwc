export default function() {

this.get('/products', function() {
  return {
    data: [{
      type: 'products',
      id: 1,
      attributes: {
        name: 'Tsinandali',
        ptype: 'productsBottle',
        ptype2: 'rss',
        description: 'А quality white dry wine, the pride and beauty of Georgian wine-makers.The wine made according to the modern technology and ancient Georgian traditions from Rkatsiteli and Mtsvane grape varieties, cultivated in Telavi micro regions. The wine matures in oak barrels in the cellars of the `Kakhuri Gvinis Marani` winery. When ready for use the wine has a pale-straw colour, a beautiful fruity bouquet and a mild and delicate taste. Enjoy with beef and lamb, pork, fish, hot meat dishes, game and salads.Ready for use the wine contains 10.5-12.5 % alcohol and has 6.0-7.5g/l titrated acidity.The wine is very popular. At international exhibitions it was awarded ten gold and nine silver medals.',
        thumb: '/assets/images/thumb/01.png',
        image: '/assets/images/01.png'
      }
    }, {
      type: 'products',
      id: 2,
      attributes: {
        name: 'Gurdjaani',
        ptype: 'productsBottle',
        ptype2: 'rss',
        description: 'This white dry wine, made according to the modern technology and ancient Georgian traditions from Rkatsiteli and Mtsvane grape varieties, cultivated in strictly controlled micro regions of Gurjaani, and Sagarejo. Is characterized by the bright-straw colour, original fine fruit bouquet and aroma, harmonic piquant bitter hue. Enjoy with hot meat dishes, salads, fish and game. Ready for use the wine contains 10.5-12.5 % alcohol and has 5.5-7.0 g/l titrated acidity.At international exhibitions the wine was awarded one gold, nine silver and one bronze medals.',
        thumb: '/assets/images/thumb/02.png',
        image: '/assets/images/02.png'
      }
    }, {
      type: 'products',
      id: 3,
      attributes: {
        name: 'Hereti',
        ptype: 'productsBottle',
        ptype2: 'rsd',
        description: 'А white dry ordinary wine made of the Rkatsiteli and Mtsvane grpe varieties. It has a straw colour, a fine fruity bouquet and a full fresh and harmonious taste. Enjoi with fish salads and game. Strength 10.5-12.5 Vol %; Titrated acidity 5-8 %',
        thumb: '/assets/images/thumb/03.png',
        image: '/assets/images/03.png'
      }
    }, {
      type: 'products',
      id: 4,
      attributes: {
        name: 'Manavi',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'Аppellation controlled dry white wine. The wine is made from Mcvane and Rkatsiteli grape grown on Gombori slopes of Manavi mikro-zone. Its colour ranges from pale-straw to straw-green. It is characterized by a strong fruity aroma, which invokes freshly sliced pears and apples. The taste is subtle and harmonious. Enjoy this elegant wine with a cold buffet, salads and cold meat dishes. Ready for use the wine contains 10.5-11.5 % alcohol and has 5.5-7.5 g/l titrated acidity.At international competitions the wine received three silver medals.',
        thumb: '/assets/images/thumb/04.png',
        image: '/assets/images/04.png'
      }
    }, {
      type: 'products',
      id: 5,
      attributes: {
        name: 'Rkatsiteli',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'This dry white and pale straw colored wine is made of Rkatsiteli grape variety. It has a very effective nose with the dominant aromas of peach and forest fruit. It has balanced acidity and sophisticated lightness. Finish is long and solid. Goes well with steamed trout, chicken, turkey and vegetable salads.Ready for use the wine contains 11.5-12.5 % alcohol and has 4-6 g/l titrated acidity.At international exhibitions the wine was awarded one gold, one silver and two bronze medals.',
        thumb: '/assets/images/thumb/05.png',
        image: '/assets/images/05.png'
      }
    }, {
      type: 'products',
      id: 6,
      attributes: {
        name: 'Aguna',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: '"А red semi dry wine is made from Saperavi, Rkatsiteli and Kaberne grape variety harvested in the Kakheti region. Pleasantly transparent, Aguna is garnet coloured and offers a rich bouquet of fruit aroma. In the mouth it is a bit sweetish and mild. A good companion to game, bacon and pork. Ready for use the wine contains 10.5-12.5 % alcohol and has 5.5-6.5 g/l titrated acidity."',
        thumb: '/assets/images/thumb/06.png',
        image: '/assets/images/06.png'
      }
    },{
      type: 'products',
      id: 7,
      attributes: {
        name: 'Alazani Valley',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'Red semi-sweet wine. This light cherry color wine is made from Saperavi grapes. In the mouth it has a refined balance with the dominant tones of forest fruits. The wine is characterized by a solid finish and is a good companion to cheese, beaf and lamb, cold fruits, cherry jelly, fruit pie.Ready for use the wine contains 10.5-12.0 % alcohol and has 5.0-7.0 g/l titrated acidity.',
        thumb: '/assets/images/thumb/07.png',
        image: '/assets/images/07.png'
      }
    }, {
      type: 'products',
      id: 8,
      attributes: {
        name: 'Akhasheni',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'А naturally semi-sweet red wine, made according to the modern technology and ancient Georgian traditions of the Saperavi grape variety, cultivated in Akhasheni micro region of the Gurdzhaani district of Kakheti. The wine of a dark-pomegranate colour has a harmonious velvety taste with a chocolate flavor. Enjoy with cold fruit, cherry cake, fruit jelly. Ready for use the wine contains 10.5-12.5 % alcohol, 3-5 % sugar and has 5.0-7.0 g/l titrated acidity.At international exhibitions Akhasheni was awarded six gold and five silver medals.',
        thumb: '/assets/images/thumb/08.png',
        image: '/assets/images/08.png'
      }
    }, {
      type: 'products',
      id: 9,
      attributes: {
        name: 'Cabernet Saperavi',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'This quality red dry wine is a blend of equal parts of French Cabernet Sauvignon and Georgian Saperavi (50/50). This elegant blend was fermented in oak vats and aged in French oak barrels for 12 mounth. The wine has a dark-ruby colour and rich aroma of red cherry, black current, plums and a hint of vanilla. This round wine has a smooth and long pleasant aftertaste. Enjoy with roasted meat and cheese. Ready for use the wine contains 10.5-12.5 % alcohol and has 5.5-7.0 g/l titrated acidity.',
        thumb: '/assets/images/thumb/09.png',
        image: '/assets/images/09.png'
      }
    }, {
      type: 'products',
      id: 10,
      attributes: {
        name: 'Pirosmani',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'This  red semi-dry wine is a product of creative approach of &ldquo;Kakhuri gvinis  marani&rdquo;, modern technology and ancient Georgian traditions. Wine is made  of Saperavi grape variety, cultivated in Kakheti, in  Akhasheni micro region, has dark pomegranate colour, strongly developed  variety bouquet, strong extraction capacity and harmonic pleasant taste.  Enjoy with cheese and other desserts.Ready for use the wine contains 10.5-12.0 % alcohol and has 5-7g/l titrated acidity.',
        thumb: '/assets/images/thumb/10.png',
        image: '/assets/images/10.png'
      }
    }, {
      type: 'products',
      id: 11,
      attributes: {
        name: 'Mukuzani',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'А vintage red dry wine staying at the top of the list of red wines. This wine made of Saperavi grape variety cultivated in the Mukuzani and Teliani micro-zone in Kakheti. The wine matures for three yars in oak barrels. Mukuzani has a dark-ruby colour, a velvety taste with a marked characteristic bouquet and aroma and great extractivity with admirable palatable harmony. This fresh and forward Wine is smooth with pleasant aromas of wild berries and laurel. The wine is full bodied and goes well with cold boiled pork, and the assortment of the sausages.Ready for use the wine contains 10.5-12.5 % alcohol and has 6-7g/l titrated acidity.At international exhibitions the wine was awarded eight gold, four silver and one bronze medals.',
        thumb: '/assets/images/thumb/11.png',
        image: '/assets/images/11.png'
      }
    }, {
      type: 'products',
      id: 12,
      attributes: {
        name: 'Saperavi',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'Red dry wine. The wine is made from selected Saperavi grapes harvested in various vineyards located in the Gurjaani and Telavi district. As it is not intensely filtered it is fairly round-bodied with velvety tannins. Saperavi is deep garnet color and it carries a tone of fruity nuances with the dominant aroma of over ripen fruits and occasional smoke overtones. It is a good match with smoked Sulguni cheese, potato chips, roasted rabbit, chicken done in red wine, fried pork and various meat salads.Ready for use the wine contains 10.5-12.5 % alcohol and has 5-7g/l titrated acidity.At international exhibitions the wine was awarded one gold and one silver medals.',
        thumb: '/assets/images/thumb/12.png',
        image: '/assets/images/12.png'
      }
    }, {
      type: 'products',
      id: 13,
      attributes: {
        name: 'Teliani',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'One of the best vintage table red dry wines. It has a characteristic delicate and tender aroma with a violet flavor, cherries, plum, black currants and a beautiful dark-ruby colour. It is made of the Cabernet quality grape variety cultivated in the Teliani district of Kakheti. The wine matures in oak barrels in the `Kakhuri Gvinis Marani` winery cellars for three years. Aging in French Oak helps to create the creamy texture and velvety smooth finish, that will invite you back for continued pleasure and enjoyment. Enjoi the wine with lamb, duck, shashlik.Ready for use the wine contains 10.5-12.0 % alcohol and has 5.5-7.0 g/l titrated acidity.At international exhibitions the wine was awarded four gold and six silver medals.',
        thumb: '/assets/images/thumb/13.png',
        image: '/assets/images/13.png'
      }
    }, {
      type: 'products',
      id: 14,
      attributes: {
        name: 'Saperavi Rose',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'Rose  dry wine. Made using the hand selected Georgian grape variety Saperavi  which has been fermented using modern French Rose technologies. Rich  nose of juisy raspberry and red cherry followed by a pleasant palate of  red berries. Exellent pair with cheese and seafood. Ready for use the wine contains 10.5-12.5 % alcohol and has 5.0-7.0 g/l titrated acidity.',
        thumb: '/assets/images/thumb/14.png',
        image: '/assets/images/14.png'
      }
    }, {
      type: 'products',
      id: 15,
      attributes: {
        name: 'Pirosmani',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'This semi-dry white wine produced from the Rkatsiteli, kakhetian Mtsvane and Kisi grapes grown in Kakheti Region. This wine has harmoniously velvety sweetness of fruits, flowers and honey, which gives it elegance. The name of that wine promotes perpetuating of a name of the world famous Georgian Artist Pirosmani. Light-straw colored wine is easily paired with a variety of desserts.Ready for use the wine contains 10.5-12.5 % alcohol and has 5.5-7.0 g/l titrated acidity.',
        thumb: '/assets/images/thumb/15.png',
        image: '/assets/images/15.png'
      }
    }, {
      type: 'products',
      id: 16,
      attributes: {
        name: 'Alazani Valley',
        ptype: 'productsQvevri',
        ptype2: 'rsd',
        description: 'This white semi sweet wine is made of the Rkatsiteli grape variety. It is pale-straw colour with dominant aromas of dried fruits and lemon pie. Good companion for fruit, salads and tarts and ice cream.Ready for use the wine contains 11-12 % alcohol and has 6-7g/l titrated acidity.',
        thumb: '/assets/images/thumb/16.png',
        image: '/assets/images/16.png'
      }
    }, {
      type: 'products', 
      id: 17,
      attributes: {
        name: 'Manavis Mtsvane',
        ptype: 'productsQvevri',
        ptype2: 'wss',
        description: 'Quality white dry wine. The wine is made from selected Mtsvane grape variety grown on Gombori slopes of Manavi mikro-zone. Kakhetian wine growers believe the vineyards of Mtsvane, which in Georgian means `young` or `green`, require much labor from their side for it is considered extremely tender and vulnerable. This straw-yellow wine with golden reflections is intensely fruity with notes of citruses and is a superlative companion all kinds of food.Ready for use the wine contains 10.5-12.5 % alcohol and has 5.5-7.0 g/l titrated acidity.',
        thumb: '/assets/images/thumb/17.png',
        image: '/assets/images/17.png'
      }
    }, {
      type: 'products',
      id: 18,
      attributes: {
        name: 'Kindzmarauli',
        ptype: 'productsQvevri',
        ptype2: 'wss',
        description: 'A quality naturally semi-sweet wine of dark-red colour. It is made of the Saperavi grape variety cultivated on the slopes of the Caucasian Range in the Kvareli district. Kindzmarauli has a strong characteristic bouquet and aroma and a gentle harmonious and velvety taste. In it dominates flavor of plum and sweet and dry grape juice. It tastes sweet and well-balanced.The wonderful taste and curative properties have won Kindzmarauli general recognition. This light well-balanced wine pairs with chocolate, ripe strawberry, cakes and red fruits Ready for use the wine contains 10.5-12.0 % alcohol, 3-5% sugar and has 5-7g/l titrated acidity. For it&rsquo;s supreme qualities Kindzmarauli was awarded three gold, four silver and one bronze medals at international exhibitions. It has been manufactured since 1942.',
        thumb: '/assets/images/thumb/18.png',
        image: '/assets/images/18.png'
      }
    }, {
      type: 'products',
      id: 19,
      attributes: {
        name: 'Khvanchkara',
        ptype: 'productsQvevri',
        ptype2: 'wss',
        description: 'A fine naturally semi-sweet red wine made of the Alexandreuli and Mudzhuretuli grape varieties cultivated in the Khvanchkara district in Western Georgia. This wine has a strong characteristic bouquet and aroma and a harmonious velvety taste with a raspberry flavor. It is of a dark- ruby colour with distinct notes of berries and cherry. This very pleasant wine is light, smooth and elegant. Khvanchkara is one of the most popular Georgian semi-sweet wines. This light, elegant wine pairs well with cherry pie, walnut and honey sweets, fruit assortment and baklava. Ready for use the wine contains 10.5-12.0 % alcohol, 3-5% sugar and has 5-7g/l titrated acidity. For it&rsquo;s excellent taste Khvanchkara was awarded two gold and four silver medals at international exhibitions. It has been manufactured since 1907.',
        thumb: '/assets/images/thumb/19.png',
        image: '/assets/images/19.png'
      }
    }]
  };
});

}
/*
this.get('/photos', function() {
  return {
    data: [{
      type: 'photo', 
      id: 1,
      attributes: {        
        src: 'http://placekitten.com/g/600/450',
        w: 10, h: 15,
        title: 'Image Description'
      }
    }, {
      type: 'photo', 
      id: 2,
      attributes: {
        src: 'http://placekitten.com/630/600',
        w: 630, h: 600,
        title: 'kitty'
      }
    }, {
      type: 'photo', 
      id: 3,
      attributes: {
        src: 'http://placekitten.com/g/450/450',
        w: 450, h: 450,
        title: 'more kitty'
      }
    }, {
      type: 'photo', 
      id: 4,
      attributes: {
        src: 'http://placekitten.com/g/400/600',
        w: 400, h: 600,
        title: 'more more kitty'
      }
    }, {
      type: 'photo', 
      id: 5,
      attributes: {
        src: 'http://placekitten.com/g/500/400',
        w: 500, h: 400,
        title: 'yup... kitty'
      }
    }]
  };
});
*/


  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */


/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/

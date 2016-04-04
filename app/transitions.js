export default function(){
	let transition_lvl_1_1 = 'toRight';
  let transition_lvl_1_2 = 'toLeft';
  let transition_lvl_2 = 'scale';
  //let duration = 600;
  /*
  toLeft, toRight, toUp, toDown
    fade
    crossFade
    explode
    flyTo
    scrollThen
    scale
    wait this.use('wait', 1000, { then: 'fade' })
*/
  let wait = 250;

  //loading transition
  this.transition(
    this.fromRoute('loading'),
    this.toRoute(['index','products', 'gallery', 'about', 'contact']),
    this.use('crossFade', {duration:500})
  );

  //from index
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['products', 'gallery', 'about', 'contact']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from products
  this.transition(
    this.fromRoute('products'),
    this.toRoute(['index', 'gallery', 'about', 'contact']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from gallery
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute(['index', 'products', 'about', 'contact']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from about
  this.transition(
    this.fromRoute('about'),
    this.toRoute(['index', 'products', 'gallery', 'contact']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from contact
  this.transition(
    this.fromRoute('contact'),
    this.toRoute(['index', 'products', 'gallery', 'about']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );

  this.transition(
    this.fromRoute('products.product-1'),
    this.toRoute(['products.product-2', 'products.product-3']),
    this.use('wait', wait, {then: transition_lvl_2 })
  );
  this.transition(
    this.fromRoute('products.product-2'),
    this.toRoute(['products.product-1', 'products.product-3']),
    this.use('wait', wait, {then: transition_lvl_2 })
  );
  this.transition(
    this.fromRoute('products.product-3'),
    this.toRoute(['products.product-1', 'products.product-2']),
    this.use('wait', wait, {then: transition_lvl_2 })
  );

}
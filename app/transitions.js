export default function(){
	let transition_lvl_1_1 = 'fade';
  let transition_lvl_1_2 = 'fade';
  //let transition_lvl_2 = 'crossFade';
  let optionsToggle = 'fade';
  //let productsExpanded = 'scale';
  let duration = 400;
  /*
  toLeft, toRight, toUp, toDown
    fade
    crossFade
    explode
    flyTo
    scrollThen
    scale
    wait this.use('wait', 1000, { then: 'fade' })

  this.transition(
    this.hasClass('productsExpanded'),
    this.toValue(true),
    this.use('wait', 400, { then: 'fade', duration: duration}),
    this.reverse('wait', 400, {then: 'fade', duration: duration})
  );
*/
  this.transition(
    this.hasClass('productsLiquidOptionsHandle'),
    this.toValue(true),
    this.use(optionsToggle, {wait: duration}),
    this.reverse(optionsToggle, {wait: duration})
  );
  this.transition(
    this.hasClass('productsLiquidOptions'),
    this.toValue(true),
    this.use('toLeft', {wait: duration}),
    this.reverse('toRight', {wait: duration})
  );

  //loading transition
  this.transition(
    this.fromRoute('loading'),
    this.toRoute(['index','products', 'news', 'about', 'awards']),
    this.use('crossFade', {duration:500})
  );

  //from index
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['products', 'news', 'about', 'awards']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from about
  this.transition(
    this.fromRoute('about'),
    this.toRoute(['index', 'products', 'news', 'awards']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from products
  this.transition(
    this.fromRoute('products'),
    this.toRoute(['index', 'news', 'about', 'awards']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from news
  this.transition(
    this.fromRoute('news'),
    this.toRoute(['index', 'products', 'about', 'awards']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
  //from awards
  this.transition(
    this.fromRoute('awards'),
    this.toRoute(['index', 'products', 'news', 'about']),
    this.use(transition_lvl_1_1),
    this.reverse(transition_lvl_1_2)
  );
/*
  this.transition(
    this.fromRoute('products.product-1'),
    this.toRoute(['products.product-2', 'products.product-3']),
    this.use(transition_lvl_2)
  );
  this.transition(
    this.fromRoute('products.product-2'),
    this.toRoute(['products.product-1', 'products.product-3']),
    this.use(transition_lvl_2)
  );
  this.transition(
    this.fromRoute('products.product-3'),
    this.toRoute(['products.product-1', 'products.product-2']),
    this.use(transition_lvl_2)
  );
*/
}
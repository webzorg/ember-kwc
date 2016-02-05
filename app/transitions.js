export default function(){
	var transitionEffect = 'crossFade';
  this.transition(
    this.fromRoute('index'),
    this.toRoute('products'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('gallery'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('contact'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  //FROM PRODUCTS
  this.transition(
    this.fromRoute('products'),
    this.toRoute('gallery'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  this.transition(
    this.fromRoute('products'),
    this.toRoute('about'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  this.transition(
    this.fromRoute('products'),
    this.toRoute('contact'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  //FROM GALLERY
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute('about'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute('contact'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );
  //FROM ABOUT
  this.transition(
    this.fromRoute('about'),
    this.toRoute('contact'),
    this.use(transitionEffect),
    this.reverse(transitionEffect)
  );

}
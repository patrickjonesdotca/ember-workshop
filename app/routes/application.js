import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    removeFromCart: function(product) {
      this.controller.send('removeFromCart', product);                
    },
    addToCart: function(product) {
      this.controller.send('addToCart', product);           
    }
  }
});

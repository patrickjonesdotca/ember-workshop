import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeFromCart: function(product) {
      this.get('shoppingCartItems').removeObject(product);                
    },
    addToCart: function(product) {
      this.get('shoppingCartItems').pushObject(product);           
    }
  },
  shoppingCartItems: []
})

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("products", function() {});
  this.route("contact");
  this.route("product", {path:'products/:id'});
});

export default Router;

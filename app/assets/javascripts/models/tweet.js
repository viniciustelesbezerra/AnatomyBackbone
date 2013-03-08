window.Tweet = Backbone.Model.extend({
  toggleStatus: function(){
    (this.get('status') == 0) ? this.set({'status': 1}) : this.set({'status': 0});
    this.save();
  },
  destroyTweet: function(){
  	this.destroy();
  }
});

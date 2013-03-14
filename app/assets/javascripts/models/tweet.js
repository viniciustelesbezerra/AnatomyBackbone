window.Tweet = Backbone.Model.extend({
  toggleStatus: function(){
    (this.get('status') == 0) ? this.set({'status': 1}) : this.set({'status': 0});
    this.save();
  },
  destroyTweet: function(){
  	this.destroy();
  },
  editTweet: function(){
    this.set({'content': $('input[idvalue='+this.get("id")+']').val()});
    this.save();
  },
  newTweet: function(){
    console.log("new tweet on model");
  }
});

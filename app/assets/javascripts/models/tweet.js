window.Tweet = Backbone.Model.extend({
  toggleStatus: function(){
    console.log("toggleStatus model");
    (this.get('status') == 0) ? this.set({'status': 1}) : this.set({'status': 0});
    this.save();
  },
  destroyTweet: function(){
  	this.destroy();
  },
  editTweet: function(){
	  contenttoupdate = $('input[idvalue='+this.get("id")+']').val();
    this.set({'content': contenttoupdate});
    this.save();
  },
  newTweet: function(){
  	//this.new();
  }
});

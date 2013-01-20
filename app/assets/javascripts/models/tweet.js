window.Tweet = Backbone.Model.extend({
  toggleStatus: function(){
    if(this.get('status') == 0){
      this.set({'status': 1});
    }else{
      this.set({'status': 0});
    }

    this.save();
  }
});

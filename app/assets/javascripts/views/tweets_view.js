window.TweetsView = Backbone.View.extend({

  events: {
    'click a#new' : 'newTweetVw'
  },

  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  render: function(){
    this.addAll()
    return this;
  },

  addAll: function(){
    this.$el.empty();
    this.$el.append('<a href="#" id="new">New Tweet</a>');
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(tweet){
    var tweetView = new TweetView({model: tweet});
    this.$el.append(tweetView.render().el); 
  },

  newTweetVw: function(){
    this.collection.newTweetColl();
  }

});


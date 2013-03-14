window.TweetView = Backbone.View.extend({
  template: _.template('<h3 class="<%= status == 0 ? "disabled" : "enabled" %>"><input id="changestatus"type=checkbox <%= status == 0 ? "checked=checked" : "" %>/> <%= content %> <a href="/#tweets/<%= id %>">☞</a> <a id="destroy" href="#destroy">✘</a> </a> <a id="edit" href="#edit">✍</a> </h3> Edit content <input id="editcontent" idvalue="<%= id %>" type="text">'),

  events: {
    'change input#changestatus': 'toggleStatus',
    'click a#destroy' : 'destroyTweet',
    'click a#edit' : 'editTweet'
  },

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function(){
    this.$el.remove();
  },

  toggleStatus: function(){
    this.model.toggleStatus();
  },

  destroyTweet: function(){
    this.model.destroyTweet();
  },

  editTweet: function(){
    this.model.editTweet();
  },
  
  newTweet: function(){
    this.model.newTweet();
  }

});


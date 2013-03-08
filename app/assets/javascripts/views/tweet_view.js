window.TweetView = Backbone.View.extend({
  template: _.template('<h3 class="<%= status == 0 ? "disabled" : "enabled" %>"><input type=checkbox <%= status == 0 ? "checked=checked" : "" %>/> <%= content %> <a href="/#tweets/<%= id %>">☞</a> </h3> <br /> <a href="/#destroy/<%= id %>">x</a>'),

  events: {
    'change input': 'toggleStatus'
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
    this.model.toggleStatus()
  }
});


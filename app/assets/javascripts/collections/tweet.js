window.Tweets = Backbone.Collection.extend({
  model: Tweet,
  url: '/tweets',

  initialize: function(){
    this.on('remove', this.hideModel, this);
  },

  hideModel: function(model){
    model.trigger('hide');
  },

  focusOnTodoItem: function(id) {
    var modelsToRemove = this.filter(function(todoItem){
      return todoItem.id != id;
    });
    this.remove(modelsToRemove);
  }
});

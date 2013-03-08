window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "todos/:id": "show",
    "tweets/:id": "showtweets"
  },

  initialize: function(){
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
    
    this.tweet = new Tweets();
    this.tweetsView = new TweetsView({collection: this.tweet});
    this.tweetsView.render();
  },

  index: function(){
    // $('#app').html(this.todosView.el);
    // this.todoItems.fetch();
    $('#app').html(this.tweetsView.el);
    this.tweet.fetch();
  },

  start: function(){
    Backbone.history.start();
  },

  show: function(id){
    this.todoItems.focusOnTodoItem(id);
  },

  showtweets: function(id){
    this.tweet.focusOnTodoItem(id);
  },

}));
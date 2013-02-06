App = (function($){
    HelloWorldView = Backbone.View.extend({
      el: "#helloworld",
      tagName: "p",
      render : function(){
       $(this.el).html("hello world").wrapInner("<p>");//.appendTo('#helloworld');
      }      
    });
    var self = {};
    self.start = function(){
        new HelloWorldView().render();
    };
    return self;
});

$(function(){
    new App(jQuery).start();
});

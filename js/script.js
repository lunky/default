/* Author: Quinn Wilson

*/

var Workout = Em.Object.extend({
    date: Date.now(),

});

var workout = Workout.create({
  name: "default",
  save: function(){
      alert("save'n");
  }
});
workout.save();
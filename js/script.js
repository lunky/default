/* Author: Quinn Wilson

*/
var Workout;
Workout = Ember.Object.extend({
  startWorkout: function(thing) {
    alert(thing);
 }
});

<<<<<<< HEAD
var Workout = Em.Object.extend({
    date: Date.now(),
=======
var wk = Workout.create();
wk.startWorkout("Hello") // alerts "Hello"
>>>>>>> 71be1a497a44fee70e1ef6f1e07803e170a23405

});

var workout = Workout.create({
  name: "default",
  save: function(){
      alert("save'n");
  }
});
workout.save();

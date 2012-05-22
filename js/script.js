/* Author:

*/
var Workout;
Workout = Ember.Object.extend({
  startWorkout: function(thing) {
    alert(thing);
 }
});

var wk = Workout.create();
wk.startWorkout("Hello") // alerts "Hello"





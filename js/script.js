/* Author: Quinn Wilson

*/

Workouts = Ember.Application.create();

Workouts.Workout = Ember.Object.extend({
    date: new Date(),
    name: "default",
    save: function(){
//      alert("save'n " + this.get('name') + ' created ' + this.get('date') );
    }
});

var workout = Workouts.Workout.create({
    name: "front squat"
});
workout.save();

var view = Ember.View.create({
  color : "Bob"
});
view.append("#werkouts");
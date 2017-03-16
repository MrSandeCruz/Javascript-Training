'use strict';

var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function(){
  console.log('Completing Task: ' + this.name);
  this.completed = true;
}

Task.prototype.save = function() {
  console.log('Saving Task: ' + this.name);
}

var task1 = new Task('Constructor Patterns');
var task2 = new Task('Module Patterns');
var task3 = new Task('Prototype Patterns');
var task4 = new Task('Singleton Patterns');

task1.complete();
task2.save();
task3.save();
task4.save();

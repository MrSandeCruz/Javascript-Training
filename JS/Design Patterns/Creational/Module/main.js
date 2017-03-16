import Task from 'task.js';
import Repo from 'repo.js';

var task1 = new Task(Repo.get(1));
var task2 = new Task('Module Patterns');
var task3 = new Task('Prototype Patterns');
var task4 = new Task('Singleton Patterns');

task1.complete();
task2.save();
task3.save();
task4.save();

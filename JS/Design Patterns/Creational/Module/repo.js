var repo = function() {
  return {
    get: function(id) {
      console.log('Getting task: ' + id);

      return {
        name: 'New task from DB';
      }
    },
    save: function(task) {
      console.log('Saving task: ' + task.name + ' to the DB.');
    }
  }
}

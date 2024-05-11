const tasks = {
    tasks: [
        {
            text: 'Grocery Shopping',
            completed: true
        },
        {
            task: 'Clean Yard',
            completed: false
        },
        {
            task: 'Film Course',
            completed: false
        }

    ]
    ,
    getTaskToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
        

}
console.log(tasks.getTaskToDo());


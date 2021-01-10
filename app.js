console.log("Script started");

const app = new Vue({
  el: "#app",
  data: {
    heading: "Todo App using Vue.js",
    nothingToDo: "There's nothing to do today.",
    id: 0,
    todoText: null,
    done: false,
    todos: [],
  },
  methods: {
    reset() {
      this.id++;
      this.todoText = null;
      this.done = false;
    },
    addTodo() {
      let todo = {
        id: this.id,
        todoText: this.todoText,
        done: this.done,
      };

      this.todos.push(todo);
      this.reset();
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    deleteList() {
      this.todos = [];
    },
  },
});

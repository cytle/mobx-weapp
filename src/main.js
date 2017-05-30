import mobx from 'mobx'

function TodoList() {
    mobx.extendObservable(this, {
        todos: [],
        unfinishedTodoCount() {
            return this.todos.filter(todo => !todo.finished).length;
        }
    })
}

const store = new TodoList()
//
// const store = {
//     todos: [],
//     unfinishedTodoCount: 2
// }
// ReactDOM.render(
//     <TodoListView todoList={store} />,
//     document.getElementById('mount')
// )
//


console.warn(store)
console.warn(store.todos)

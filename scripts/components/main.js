import R from 'reren';
import todoItem from './todoItem';

var Main = R.component({
    controller: function() {
        this.model.todos = [];
        this.model.newTodoText = "";

        this.model.onNewTaskKeyUp = (e) => {
            if (e.keyCode == 13 && e.target.value) {
                this.model.todos.push(e.target.value);
                this.model.newTodoText = "";
                e.target.value = "";
                this.update();
            }
        };

        this.model.onRemoveTodo = (todo) => {
            this.model.todos.splice(this.model.todos.indexOf(todo));
            this.update();
        };
    },
    view: (model) => {

        var todoItems = model.todos.map(todo => {
            return R.element(todoItem, { text: todo, onRemoveTodo: model.onRemoveTodo });
        });

        return R.section({ classes: "todoapp" },
                    R.header({ classes: "header" }, [
                        R.h1(null, "todo's app"),
                        R.input({ classes: "new-todo",
                                    type: "text",
                                    placeholder: "What needs to be done?",
                                    autoFocus: "true",
                                    onKeyDown: model.onNewTaskKeyUp,
                                    value: model.newTodoText
                                }),
                        R.section({ classes: "main" }, [
                            R.ul({ classes: "todo-list" }, todoItems)
                        ])
                    ]));
    }
});

export default Main;

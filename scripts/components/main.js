import R from 'reren';
import todoItem from './todoItem';
import footer from './footer';

var Main = R.component({
    controller: function() {
        this.model.todos = [];
        this.model.newTodoText = "";

        this.model.onNewTaskKeyUp = (e) => {
            if (e.keyCode == 13 && e.target.value) {
                this.model.todos.push({ index: this.model.todos.length + 1, text: e.target.value });
                this.model.newTodoText = "";
                e.target.value = "";
                this.update();
            }
        };

        this.model.onRemoveTodo = (todo) => {
            this.model.todos = this.model.todos.filter(x => x.index !== todo.index);
            this.update();
        };

        this.model.onTodoChecked = () => {
            // do some checking
            this.update();
        };
    },
    view: (model) => {

        var todoItems = model.todos.map(todo => {
            return R.element(todoItem, {
                todo: todo,
                onRemoveTodo: model.onRemoveTodo,
                onTodoChecked: model.onTodoChecked
            });
        });

        return R.section({ classes: "todoapp" }, [
                    R.header({ classes: "header" }, [
                        R.h1(null, "todo's app"),
                        R.input({ classes: "new-todo",
                                    type: "text",
                                    placeholder: "What needs to be done?",
                                    autoFocus: "true",
                                    onKeyDown: model.onNewTaskKeyUp,
                                    value: model.newTodoText
                                })
                ]),
                R.section({ classes: "main" }, R.ul({ classes: "todo-list" }, todoItems)),
                R.element(footer, { todoCount: model.todos.length })
            ]);
    }
});

export default Main;

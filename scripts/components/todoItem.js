import R from 'reren';

var TodoItem = R.component({
    controller: function() {
        this.onMount = (parentModel) => {
            this.model.todo = parentModel.todo;
            this.model.onRemoveTodo = () => parentModel.onRemoveTodo(parentModel.todo);
            this.model.onTodoChecked = () => parentModel.onTodoChecked(parentModel.todo);
        };
        this.onUpdate = (parentModel) => {
            this.model.todo = parentModel.todo;
        };
    },
    view: (model) => {
        var classes = (model.todo.completed) ? "completed" : "";

        return R.li({ classes: classes },
                R.div({ classes: "view" }, [
                    R.input({ 
                        classes: "toggle",
                        type: "checkbox",
                        onClick: model.onTodoChecked,
                        checked: (model.todo.completed) ? 'checked' : null
                    }),
                    R.label(null, model.todo.text),
                    R.button({ classes: "destroy", onClick: model.onRemoveTodo })
                ]));
    }
});

export default TodoItem;
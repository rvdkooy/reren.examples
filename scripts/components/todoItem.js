import R from 'reren';

var TodoItem = R.component({
    controller: function() {
        this.onMount = (parentModel) => {
            this.model.todo = parentModel.todo;
            this.model.onRemoveTodo = parentModel.onRemoveTodo,
            this.model.onTodoChecked = parentModel.onTodoChecked
        };
    },
    view: (model) => {

        return R.li({ classess: "" },
                R.div({ classes: "view" }, [
                    R.input({ classes: "toggle", type: "checkbox", onClick: model.onTodoChecked }),
                    R.label(null, model.todo.text),
                    R.button({ classes: "destroy", onClick: model.onRemoveTodo.bind(null, model.todo) })
                ]));
    }
});

export default TodoItem;
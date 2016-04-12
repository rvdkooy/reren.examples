import R from 'reren';

var TodoItem = R.component({
    controller: function() {
        this.onMount = (parentModel) => {
            this.model.text = parentModel.text;
            this.model.onRemoveTodo = parentModel.onRemoveTodo
        };
    },
    view: (model) => {

        return R.li({ classess: "" },
                R.div({ classes: "view" }, [
                    R.input({ classes: "toggle", type: "checkbox" }),
                    R.label(null, model.text),
                    R.button({ classes: "destroy", onClick: model.onRemoveTodo.bind(null, model.text) })
                ]));
    }
});

export default TodoItem;
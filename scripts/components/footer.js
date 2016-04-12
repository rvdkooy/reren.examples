import R from 'reren';

var Footer = R.component({
    controller: function() {
        this.onMount = (parentModel) => {
            this.model.todoCount = parentModel.todoCount || 0;
        };
        this.onUpdate = (parentModel) => {
            this.model.todoCount = parentModel.todoCount || 0;
        };
    },
    view: (model) => {
        return R.footer({ classes: "footer" }, [
            R.span({ classes: "todo-count" }, [
                R.strong(null, model.todoCount.toString()),
                R.span(null, " item(s) left")
            ])
        ]);
    }
});

export default Footer;
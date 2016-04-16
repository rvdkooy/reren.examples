import R from 'reren';

var Footer = R.component({
    controller: function() {
        this.onMount = (parentModel) => {
            this.model.todoCount = parentModel.todoCount || 0;
            this.model.activeFilter = parentModel.activeFilter;
            this.model.onAllClicked = parentModel.onFilterSelected.bind(null, "all");
            this.model.onActiveClicked = parentModel.onFilterSelected.bind(null, "active");
            this.model.onCompletedClicked = parentModel.onFilterSelected.bind(null, "completed");
        };
        this.onUpdate = (parentModel) => {
            this.model.todoCount = parentModel.todoCount || 0;
            this.model.activeFilter = parentModel.activeFilter;
        };
    },
    view: (model) => {
        var allClass = (model.activeFilter === "all") ? "selected" : '';
        var activeClass = (model.activeFilter === "active") ? "selected" : '';
        var completedClass = (model.activeFilter === "completed") ? "selected" : '';

        return R.footer({ classes: "footer" }, [
                    R.span({ classes: "todo-count" }, [
                        R.strong(null, model.todoCount.toString()),
                        R.span(null, " item(s) left")
                    ]),
                    R.ul({ classes: "filters" }, [
                        R.li(null, R.element("a", { href: '#', classes: allClass, onClick: model.onAllClicked }, "All")),
                        R.li(null, R.element("a", { href: '#', classes: activeClass, onClick: model.onActiveClicked }, "Active")),
                        R.li(null, R.element("a", { href: '#', classes: completedClass, onClick: model.onCompletedClicked }, "Completed"))
                    ])
        ]);
    }
});

export default Footer;
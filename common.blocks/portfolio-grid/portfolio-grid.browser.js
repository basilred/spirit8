modules.define('portfolio-grid', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.findBlockOutside('filter').on('change', this.onFilterChange, this);
            }
        }
    },

    onFilterChange: function (e, data) {
        this.setMod('view', data);
    }
}));

})

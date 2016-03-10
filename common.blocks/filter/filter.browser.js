modules.define('filter', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                this.findBlockInside('radio-group').on('change', this.onFilterChange, this);
            }
        }
    },

    onFilterChange: function () {
        this.emit('change', this.findBlockInside('radio-group').getVal());
    }

}));

})

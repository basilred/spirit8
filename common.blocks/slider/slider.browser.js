modules.define('slider', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {

            }
        }
    },
    onElemSetMod: {
        'pin': {
            'active': function (elem, modName, prevModVal) {

            }
        }
    },
    onPinClick: function (e) {
        this.delMod(this.elem('pin'), 'active').setMod(e.currentTarget, 'active');
    }
},
{
    live: function () {
        this.liveBindTo('pin', 'click', this.prototype.onPinClick);
    }
}));

})

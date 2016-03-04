modules.define('slider', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.sliderOffset = 0;
            }
        }
    },
    onElemSetMod: {
        'pin': {
            'active': {
                'true': function (elem, modName, prevModVal) {
                    // Нужно применить transform: translateX(n); к каждому блоку slider-item
                    var offset = this.sliderOffset;
                    this.findBlocksInside('slider-item').map(function (item) {
                        item.domElem.css('transform', 'translateX(-' + offset + '%)');
                    });
                }
            }
        }
    },
    onPinClick: function (e) {
        if (!this.hasMod(e.currentTarget, 'active')) {
            this.sliderOffset = this.elemParams(e.currentTarget).offset;
            this.delMod(this.elem('pin'), 'active')
                .setMod(e.currentTarget, 'active');
        }
    }
},
{
    live: function () {
        this.liveBindTo('pin', 'click', this.prototype.onPinClick);
    }
}));

})

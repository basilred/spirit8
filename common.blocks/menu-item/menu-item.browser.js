modules.define('menu-item', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.bindTo('click', function (e) {
                    e.preventDefault();

                    var refTo = this.findBlockInside('link').domElem.attr('href').slice(1);
                    var refBlocks = this.findBlockOutside('page').findBlocksInside('anchor');

                    for (var i = 0; i < refBlocks.length; i++) {

                        if (refBlocks[i].domElem.attr('name') == refTo) {
                            var offset = refBlocks[i].domElem.offset().top;

                            this.findBlockOutside('page').domElem.animate({ scrollTop: offset }, 500);
                        };

                    }
                })
            }
        }
    }
}));

})

modules.define('link', ['i-bem__dom'], function(provide, BEMDOM) {

var scrollTime = 500; // scrolling time in milliseconds

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.bindTo('click', function (e) {
                    e.preventDefault();

                    var refTo = this.domElem.attr('href').slice(1);
                    var refBlocks = this.findBlockOutside('page').findBlocksInside('anchor');

                    if (refBlocks) {

                        for (var i = 0; i < refBlocks.length; i++) {

                            if (refBlocks[i].domElem.attr('name') == refTo) {
                                var offset = refBlocks[i].domElem.offset().top;

                                this.findBlockOutside('page').domElem.animate({ scrollTop: offset }, scrollTime);
                            };

                        }
                    }
                })
            }
        }
    }
}));

})

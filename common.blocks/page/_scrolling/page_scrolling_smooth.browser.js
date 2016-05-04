modules.define('page', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

var scrollTime = 500;

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {

                that = this;

                var blocks = [];

                blocks = blocks.concat(
                    this.findBlocksInside({ block : 'button', modName : 'type', modVal : 'link' }),
                    this.findBlocksInside('link')
                );

                blocks.map(function (item) {
                    item.bindTo('click', function (e) {
                        e.preventDefault();

                        var refTo = item.domElem.attr('href');
                        var refBlock = $(document.querySelector(refTo));

                        if (refBlock) {
                            var offset = refBlock.offset().top;
                            that.domElem.animate({ scrollTop: offset }, scrollTime);
                        }
                    })
                });
            }
        }
    }
}));

})

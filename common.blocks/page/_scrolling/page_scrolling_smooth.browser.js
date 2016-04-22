modules.define('page', ['i-bem__dom'], function(provide, BEMDOM) {

var scrollTime = 500;

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {

                that = this;

                this.findBlocksInside('link').map(function (item) {

                    item.bindTo('click', function (e) {

                        e.preventDefault();

                        var refTo = item.domElem.attr('href').slice(1);
                        var refBlock = that.findBlocksInside('anchor').filter(function (item) {
                            return item.domElem.attr('name') === refTo;
                        });

                        if (refBlock.length) {
                            var offset = refBlock[0].domElem.offset().top;
                            that.domElem.animate({ scrollTop: offset }, scrollTime);
                        }
                    })
                });
            }
        }
    }
}));

})

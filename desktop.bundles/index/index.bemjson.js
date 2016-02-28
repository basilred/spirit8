module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    // mods : { theme : 'islands' },
    content : [
        {
            block : 'start',
            content : [
                {
                    elem : 'head',
                    content : [
                        {
                            block : 'logo',
                            content : 'spirit8'
                        },
                        {
                            block : 'menu',
                            content : [
                                'home', 'about', 'services', 'portfolio', 'testimonials', 'contact'
                            ].map(function (item) {
                                return {
                                    block: 'menu-item',
                                    content: item
                                };
                            })
                        }
                    ]
                }
            ]
        },
        {
            block : 'footer',
            content : [
                'footer content goes here'
            ]
        }
    ]
};

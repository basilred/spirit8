module.exports = {
    block : 'page',
    title : 'sirit8',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' }
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
                                var res = {
                                    block : 'menu-item',
                                    mix : [ { block : 'link', mods : { pseudo : true } } ],
                                    content : item
                                };
                                if (item == 'home') {
                                    res.mods = { active : true };
                                }
                                return res;
                            })
                        }
                    ]
                },
                {
                    elem : 'caption',
                    content : [
                        {
                            elem : 'welcome',
                            content : 'welcome on <span>spirit8</span>'
                        },
                        {
                            elem : 'description',
                            content : 'We are a digital agency with <span>years of expirience</span> and with <span>extraordinary people</span>'
                        }
                    ]
                },
                {
                    block : 'downarrow',
                    mix : [ { block : 'link', mods : { pseudo : true } } ]
                }
            ]
        },
        {
            block : 'about',
            content : [
                {
                    elem : 'image',
                    content : [
                        {
                            elem : 'content',
                            content : [
                                {
                                    elem : 'header',
                                    tag : 'h1',
                                    content : [
                                        'some words <span>about us</span>'
                                    ]
                                },
                                {
                                    elem : 'text',
                                    tag : 'p',
                                    content : [
                                        'We love building and rebuilding brands through our  specific skills. Using colour, fonts, and illustration, we brand companies in a way they will never forget.'
                                    ]
                                },
                                {
                                    block : 'list',
                                    tag : 'ul',
                                    content : [
                                        '<span>Mission</span> - We deliver uniqueness and quality',
                                        '<span>Skills</span> - Delivering fast and excellent results',
                                        '<span>Clients</span> - Satisfied clients thanks to our experience'
                                    ].map(function (item) {
                                        return {
                                            elem : 'list-item',
                                            tag : 'li',
                                            content : item
                                        };
                                    })
                                },
                                {
                                    block : 'button',
                                    mix : [ { block : 'about', elem : 'button' } ],
                                    content : 'browse our work'
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            block : 'team',
            content : [
                {
                    block : 'caption',
                    mix : [ { block : 'team', elem : 'caption' } ],
                    content : [
                        'meet <span>our team</span>'
                    ]
                },
                {
                    block : 'slider',
                    data : [
                        {
                            url : '../../common.blocks/slider-item/__pic/statham.jpeg',
                            name : 'Jason Statham',
                            position : 'Knife designer',
                            desc : 'Do not seek to change what has come before. Seek to create that which has not.'
                        },
                        {
                            pic : '../../common.blocks/slider-item/__pic/vandamme.jpeg',
                            name : 'Van Damme',
                            position : 'No english',
                            desc : 'Do not seek to change what has come before. Seek to create that which has not.'
                        },
                        {
                            pic : '../../common.blocks/slider-item/__pic/stallone.jpeg',
                            name : 'Silvester Stallone',
                            position : 'Cigar lover',
                            desc : 'Do not seek to change what has come before. Seek to create that which has not.'
                        },
                        {
                            pic : '../../common.blocks/slider-item/__pic/lee.jpg',
                            name : 'Jet Lee',
                            position : 'I need more money',
                            desc : 'Do not seek to change what has come before. Seek to create that which has not.'
                        },
                        {
                            pic : '../../common.blocks/slider-item/__pic/lee.jpg',
                            name : 'Jet Lee',
                            position : 'I need more money',
                            desc : 'Do not seek to change what has come before. Seek to create that which has not.'
                        }
                    ]
                },
                {
                    // Здесь блок image добавлен, чтобы отображались элементы блока slider.
                    // borschik иначе не "видит" их.
                    block : 'image',
                    // url : '../../common.blocks/slider-item/__pic/lee.jpg'
                },
                // {
                //     elem : 'controller'
                // }
            ]
        }
    ]
};

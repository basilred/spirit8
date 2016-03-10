module.exports = {
    block : 'page',
    title : 'spirit8',
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
                    mods : { light : true },
                    content : [
                        'meet <span>our team</span>'
                    ]
                },
                {
                    block : 'slider',
                    js : { 'items' : 4 },
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
                            pic : '../../common.blocks/slider-item/__pic/arnold.jpeg',
                            name : 'Arnold Schwarzenegger',
                            position : 'I\'l be back',
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
        },
        {
            block : 'services',
            content : [
                {
                    block : 'caption',
                    content : 'take a look at <span>our services</span>'
                },
                {
                    elem : 'description',
                    content : 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                },
                {
                    block : 'service',
                    content : [
                        {
                            url : '../../common.blocks/service-item/__pic/webdesign.svg',
                            caption : 'web design',
                            description : 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                        },
                        {
                            url : '../../common.blocks/service-item/__pic/mobileapps.svg',
                            caption : 'mobile apps',
                            description : 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                        },
                        {
                            url : '../../common.blocks/service-item/__pic/photography.svg',
                            caption : 'photography',
                            description : 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                        },
                        {
                            url : '../../common.blocks/service-item/__pic/marketing.svg',
                            caption : 'marketing',
                            description : 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                        }
                    ]
                }
            ]
        },
        {
            block : 'clients',
            content : [
                {
                    block : 'caption',
                    mods : { light : true },
                    content : 'some of <span>our clients</span>'
                },
                {
                    block : 'slider',
                    js : { items : 1 },
                    data : [
                        { url: '../../common.blocks/clients/clients.png' },
                        { url: '../../common.blocks/clients/clients.png' },
                        { url: '../../common.blocks/clients/clients.png' }
                    ]
                }
            ]
        },
        {
            block : 'services',
            content : [
                {
                    block : 'caption',
                    content : 'take a look at <span>our work</span>'
                },
                {
                    elem : 'description',
                    content : 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                },
                {
                    block : 'filter',
                    content : [
                        {
                            elem : 'caption',
                            content : 'filter by type'
                        },
                        {
                            block : 'radio-group',
                            mods : { section : 'portfolio' },
                            val : 1,
                            options : [
                                { val : 1, text : 'All' },
                                { val : 2, text : 'Web Design' },
                                { val : 3, text : 'Mobile Design' },
                                { val : 4, text : 'Photography' }
                            ]
                        },
                        {
                            block : 'portfolio-grid',
                            content : [
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

module.exports = {
    block : 'page',
    title : 'spirit8',
    favicon : 'favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400italic,600,700' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Lato:700' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { scrolling : 'smooth' },
    content : [
        {
            block : 'start',
            attrs : { 'id' : 'home' },
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
                            mods : { mode : 'radio' },
                            content : [
                                'home', 'about', 'services', 'portfolio', 'testimonials', 'contact'
                            ].map(function (item) {
                                var res = {
                                        block : 'menu-item',
                                        content : {
                                            block : 'link',
                                            mods : { scrolling : 'smooth' },
                                            url : '#' + item,
                                            content : item
                                        }
                                };
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
                    block : 'link',
                    url : '#about',
                    mods : { scrolling : 'smooth' },
                    content : {
                            block : 'downarrow'
                    }
                }
            ]
        },
        {
            block : 'about',
            attrs : { 'id' : 'about' },
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
                                    mods : { type : 'link' },
                                    url : '#portfolio',
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
                }
            ]
        },
        {
            block : 'services',
            attrs : { 'id' : 'services' },
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
            attrs : { 'id' : 'portfolio' },
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
                    js : true,
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
                            js : true,
                            content : [
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'web' },
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'web' },
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'web' },
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'web' },
                                    url : '../../common.blocks/portfolio-item/mystery.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'mobile' },
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'mobile' },
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'mobile' },
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'mobile' },
                                    url : '../../common.blocks/portfolio-item/on.limited.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'photo' },
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'photo' },
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'photo' },
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                                {
                                    block : 'portfolio-item',
                                    mods : { type : 'photo' },
                                    url : '../../common.blocks/portfolio-item/photo.jpg',
                                    name : 'trend and fashion'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'clients',
            mix : [ { block : 'testimonials' } ],
            attrs : { 'id' : 'testimonials' },
            content : [
                {
                    block : 'caption',
                    mods : { light : true },
                    content : '<span>our clients\'</span> testimonials'
                },
                {
                    block : 'slider',
                    js : { items : 1 },
                    content : [
                        {
                            block : 'cite',
                            content : [
                                {
                                    elem : 'text',
                                    content : 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                                },
                                {
                                    block : 'author',
                                    mix : [ { block : 'cite', elem : 'author' } ],
                                    content : [
                                        {
                                            elem : 'name',
                                            content : 'Dean Martin'
                                        },
                                        {
                                            elem : 'position',
                                            content : 'CEO Acme Inc.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'cite',
                            content : [
                                {
                                    elem : 'text',
                                    content : 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                                },
                                {
                                    block : 'author',
                                    mix : [ { block : 'cite', elem : 'author' } ],
                                    content : [
                                        {
                                            elem : 'name',
                                            content : 'Bill Gates'
                                        },
                                        {
                                            elem : 'position',
                                            content : 'President of Microsoft Corp.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'cite',
                            content : [
                                {
                                    elem : 'text',
                                    content : 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                                },
                                {
                                    block : 'author',
                                    mix : [ { block : 'cite', elem : 'author' } ],
                                    content : [
                                        {
                                            elem : 'name',
                                            content : 'Steve Jobs'
                                        },
                                        {
                                            elem : 'position',
                                            content : 'CEO Apple Inc.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'services',
            mix : [ { block : 'contact' } ],
            attrs : { 'id' : 'contact' },
            content : [
                {
                    block : 'caption',
                    content : 'feel free to <span>contact us</span>'
                },
                {
                    elem : 'description',
                    mix : [ { block : 'contact', elem : 'description' } ],
                    content : 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                },
                {
                    block : 'contact-form',
                    mix : [ { block : 'contact', elem : 'form' } ],
                    content : [
                        {
                            block : 'name-input',
                            content : [
                                {
                                    elem : 'text',
                                    content : 'Name'
                                },
                                {
                                    block : 'input',
                                    mix : { block : 'contact-form', elem : 'name' },
                                    // mods : { theme : 'islands', size : 'l', width : 'available' }
                                }
                            ]
                        },
                        {
                            block : 'email-input',
                            content : [
                                {
                                    elem : 'text',
                                    content : 'Email address'
                                },
                                {
                                    block : 'input',
                                    mix : { block : 'contact-form', elem : 'email' }
                                }
                            ]
                        },
                        {
                            block : 'text-input',
                            content : [
                                {
                                    elem : 'text',
                                    content : 'Message'
                                },
                                {
                                    block : 'textarea',
                                    mix : { block : 'contact-form', elem : 'textarea' }
                                }
                            ]
                        },
                        {
                            block : 'button',
                            mods : { type : 'submit' },
                            text : 'SEND'
                        }
                    ]
                }

            ]
        },
        {
            block : 'footer',
            content : [
                {
                    elem : 'rights',
                    content : 'ALL RIGHTS RESERVED. COPYRIGHT © 2014 <span>SPIRIT8</span>'
                },
                {
                    block : 'socials',
                    content : [
                        'fb', 'twitter', 'google', 'linkedin', 'dribble'
                    ]
                }
            ]
        }
    ]
};

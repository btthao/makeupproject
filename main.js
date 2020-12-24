//smooth scroll function 
function smoothScroll(destination, duration) {
    var destination = document.querySelector(destination);
    let topnav = document.querySelector('.topnav');
    let targetPosition = destination.offsetTop - topnav.getBoundingClientRect().height;
    let currentPos = window.pageYOffset;
    let distance = targetPosition - currentPos;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        };
        let timeElapsed = currentTime - startTime;
        let scroll = ease(timeElapsed, currentPos, distance, duration);
        window.scrollTo(0, scroll);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        };
    };

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
    };

    requestAnimationFrame(animation);
};

const allLinks = document.querySelectorAll('.link');
const topLinks = document.querySelectorAll('.top-link');
const topnav = document.querySelector('.topnav');
const mobilenav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');

//smooth scroll for side nav

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        smoothScroll(id, 1000);
        allLinks.forEach(function(singleLink) {
            if (singleLink === link) {
                singleLink.classList.add('active');
            } else {
                singleLink.classList.remove('active');
            }
        })
    })

});

// smooth scroll for top and mobile nav
topLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        smoothScroll(id, 1000);
        if (window.innerWidth <= '800') {
            mobilenav.classList.remove('open');
            menuIcon.classList.remove('change');
        }

    })

})

//open and close mobile nav 

menuIcon.onclick = () => {
    mobilenav.classList.toggle('open');
    menuIcon.classList.toggle('change');
}


//for side dot nav 
const sidenav = document.querySelector('.nav');

sidenav.style.top = 0.5 * window.innerHeight;

const sectionlist = document.querySelectorAll('.section');

if (window.pageYOffset == 0) {
    allLinks[0].classList.add('active');
}

//for first page
function first(i) {
    window.addEventListener('scroll', function() {
        let position = window.pageYOffset;
        let target = sectionlist[i].getAttribute('id');
        let height = document.getElementById(target).getBoundingClientRect().height;
        if (position >= 0 && position <= height / 2) {
            allLinks[i].classList.add('active');
        } else {
            allLinks[i].classList.remove('active');
        };
    })
};

//for pages in the middle

function middle(i) {
    window.addEventListener('scroll', function() {
        let position = window.pageYOffset;
        let target = sectionlist[i].getAttribute('id');
        let height = document.getElementById(target).getBoundingClientRect().height;
        if (position >= ((height / 2) + ((i - 1) * height)) && position <= ((height / 2) + (i * height))) {
            allLinks[i].classList.add('active');
        } else {
            allLinks[i].classList.remove('active');
        };
    })
};

//for last page 


function last(i) {
    window.addEventListener('scroll', function() {
        let position = window.pageYOffset;
        let target = sectionlist[i].getAttribute('id');
        let height = document.getElementById(target).getBoundingClientRect().height;

        if (position >= ((height / 2) + ((i - 1) * height))) {
            allLinks[i].classList.add('active');
        } else {
            allLinks[i].classList.remove('active');
        };


    });
};

//call functions

first(0);

var i;
for (i = 1; i < (sectionlist.length - 1); i++) {
    middle(i);
}


last(sectionlist.length - 1);


//text animation for product 1 - blush 

const text1 = document.querySelector('.text1');
const splitText = text1.textContent.split('');


text1.innerHTML = '';


for (var i = 0; i < splitText.length; i++) {
    text1.innerHTML += '<span>' + splitText[i] + '</span>';
}


function animationOnscroll() {
    let count = 0;

    let animation1 = setInterval(textAppear, 40);

    function textAppear() {
        const textSpan = text1.querySelectorAll('span')[count];
        textSpan.classList.add('appear');
        count++;
        if (count == splitText.length) {
            clearInterval(animation1);
            return;
        }
    }

}

window.addEventListener('scroll', function() {
    const text1Pos = text1.getBoundingClientRect().top;
    if (window.innerHeight >= text1Pos) {
        animationOnscroll();
    }
})

//Carousel

const next = document.querySelector('.right-btn');
const prev = document.querySelector('.left-btn');
const slider = document.querySelector('.slider');
const box = document.querySelectorAll('.box');

var j = 0;

prev.style.display = 'none'

function carousel() {
    next.onclick = function() {
        j++;
        for (var k of box) {
            if (j == 0) {
                k.style.left = '0';
                next.style.display = 'block';
                prev.style.display = 'none';
            };
            if (j == 1) {
                k.style.left = '-25rem';
                next.style.display = 'block';
                prev.style.display = 'block';
            };
            if (j == 2) {
                k.style.left = '-50rem';
                next.style.display = 'block';
                prev.style.display = 'block';
            };
            if (j == 3) {
                k.style.left = '-75rem';
                next.style.display = 'block';
                prev.style.display = 'block';
            };
            if (window.innerWidth > '1080') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                };
                if (j > 4) { j = 4 };
            } else if (window.innerWidth <= '1080' && window.innerWidth > '800') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 5) {
                    k.style.left = '-125rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                };
                if (j > 5) { j = 5 };

            } else if (window.innerWidth <= '800' && window.innerWidth > '500') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';

                };
                if (j == 5) {
                    k.style.left = '-125rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                }
                if (j == 6) {
                    k.style.left = '-150rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                }
                if (j > 6) { j = 6 }
            } else if (window.innerWidth <= '500') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 5) {
                    k.style.left = '-125rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 6) {
                    k.style.left = '-150rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 7) {
                    k.style.left = '-175rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                };
                if (j > 7) { j = 7 };
            }
        }
    };
    prev.onclick = function() {
        j--;
        for (var k of box) {
            if (j < 0) { j = 0 };
            if (j == 0) {
                k.style.left = '0';
                next.style.display = 'block';
                prev.style.display = 'none';
            };
            if (j == 1) {
                k.style.left = '-25rem';
                next.style.display = 'block';
                prev.style.display = 'block';
            };
            if (j == 2) {
                k.style.left = '-50rem';
                next.style.display = 'block';
                prev.style.display = 'block';

            };
            if (j == 3) {
                k.style.left = '-75rem';
                next.style.display = 'block';
                prev.style.display = 'block';
            };

            if (window.innerWidth > '1080') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                };
            } else if (window.innerWidth <= '1080' && window.innerWidth > '800') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 5) {
                    k.style.left = '-125rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                };

            } else if (window.innerWidth <= '800' && window.innerWidth > '500') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';

                };
                if (j == 5) {
                    k.style.left = '-125rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                }
                if (j == 6) {
                    k.style.left = '-150rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                }
            } else if (window.innerWidth <= '500') {
                if (j == 4) {
                    k.style.left = '-100rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 5) {
                    k.style.left = '-125rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 6) {
                    k.style.left = '-150rem';
                    next.style.display = 'block';
                    prev.style.display = 'block';
                };
                if (j == 7) {
                    k.style.left = '-175rem';
                    next.style.display = 'none';
                    prev.style.display = 'block';
                };
            }
        }
    };

}

// call this function and make sure size adjusts automatically as user resizes
carousel();

window.addEventListener('resize', function() {
    carousel();
})

// text slide in
const gallerydesc = document.querySelector('.gallery-desc');
const gallery = document.querySelector('#gallery');

window.addEventListener('scroll', function() {
    const galleryTop = gallery.getBoundingClientRect().top;
    if (window.innerHeight / 2 >= galleryTop) {
        gallerydesc.classList.add('slide-in');

    };


})


//color filter

const colors = document.querySelectorAll('.color');
const shadeBtns = document.querySelectorAll('.lip-btn');


for (var i = 0; i < colors.length; i++) {
    const background = colors[i].textContent;
    colors[i].style.background = `${background}`;
    colors[i].classList.add('filter-active');
}

shadeBtns[0].classList.add('btn-active');

shadeBtns.forEach(function(btn) {

    btn.addEventListener('click', function(e) {

        const currentId = e.currentTarget.id;
        if (currentId == 'all') {
            for (var i = 0; i < colors.length; i++) {
                colors[i].classList.add('filter-active');
            }
        } else {
            colors.forEach(function(color) {
                color.classList.remove('filter-active');
                if (color.className.includes(currentId)) {
                    color.classList.add('filter-active');
                }
            })
        };

        shadeBtns.forEach(function(item) {
            if (item === btn) {
                item.classList.add('btn-active');
            } else {
                item.classList.remove('btn-active');
            }
        })

    })

})

//footer date

const date = document.querySelector('.date');

date.innerHTML = new Date().getFullYear();
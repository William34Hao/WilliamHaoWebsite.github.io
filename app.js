// app.js
let language = 'en';

function toggleLanguage() {
    language = language === 'en' ? 'zh' : 'en';
    updateContent();
}

function updateContent() {
    const nameElement = document.getElementById('name');
    const roleElement = document.getElementById('role');

    if (language === 'en') {
        nameElement.textContent = '方豪';
        roleElement.textContent = '欢迎来到我的个人主页';
    } else {
        nameElement.textContent = 'WilliamHao';
        roleElement.textContent = 'Welcome To My Personal Introduction Website';
    }
    const nameElement2 = document.getElementById('name2');
    const roleElement2 = document.getElementById('role2');

    if (language === 'en') {
        nameElement2.textContent = '个人简历';
        roleElement2.textContent = '个人写照';
    } else {
        nameElement2.textContent = 'Experience';
        roleElement2.textContent = 'Portrayal';
    }
}
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ffcc'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ffcc',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
})

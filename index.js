const abtme = document.getElementById('abtme');
const bg = document.getElementById('bg');
const ci = document.getElementById('ci');
const home = document.getElementById('home')

const abtSec = document.querySelector('.aboutMe');
const bgSec = document.querySelector('.background');
const ciSec = document.querySelector('footer');
const homeSec = document.querySelector('.home')

abtme.addEventListener('click', () => {
    abtSec.scrollIntoView({
        behavior:'smooth',
        block: 'start' 
    })
})

bg.addEventListener('click', () => {
    bgSec.scrollIntoView({
        behavior:'smooth',
        block: 'start' 
    })
})

ci.addEventListener('click', () => {
    ciSec.scrollIntoView({
        behavior:'smooth',
        block: 'end' 
    })
})

home.addEventListener('click', () => {
    homeSec.scrollIntoView({
        behavior:'smooth',
        block: 'end' 
    })
})
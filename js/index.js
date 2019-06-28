import startThanosEffect from './thanos-effect';

const imageBoxEl = document.querySelector('.image-box');
const imageEl = document.querySelector('img');
const buttonEl = document.querySelector('#trigger');

buttonEl.addEventListener('click', () => {
	startThanosEffect(imageEl, imageBoxEl);
});

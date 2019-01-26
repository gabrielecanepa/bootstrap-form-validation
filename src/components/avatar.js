import avatarSvg from '../../assets/images/avatar.svg';

document.getElementById('avatar-link').insertAdjacentHTML('afterbegin', avatarSvg);

const avatar = document.getElementById('avatar');
const avatarMouthClosed = document.getElementById('avatar-mouth-close');
const avatarMouthOpened = document.getElementById('avatar-mouth-open');

avatar.addEventListener('mouseover', () => {
  avatarMouthClosed.style.display = 'none';
  avatarMouthOpened.style.display = 'block';
});
avatar.addEventListener('mouseout', () => {
  avatarMouthClosed.style.display = 'block';
  avatarMouthOpened.style.display = 'none';
});

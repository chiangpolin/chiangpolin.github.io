const iconList = document.getElementById('icon-list');
const iconX = document.getElementById('icon-x');
const menu = document.getElementById('menu');

iconList.onclick = function () {
  iconList.style = 'display: none';
  iconX.style = 'display: flex';
  menu.style = 'visibility: visible';
};

iconX.onclick = function () {
  iconList.style = 'display: flex';
  iconX.style = 'display: none';
  menu.style = 'visibility: hidden';
};

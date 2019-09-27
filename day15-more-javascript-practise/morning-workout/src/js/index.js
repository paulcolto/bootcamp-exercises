const text = document.querySelector('#text');
const showText = () => {
  text.style.display = 'block';
};

const hideText = () => {
  text.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  const imgIn = document.querySelector('#image');
  imgIn.addEventListener('mouseenter', showText);

  const imgOut = document.querySelector('#image');
  imgOut.addEventListener('mouseleave', hideText);
});

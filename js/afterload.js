// Variables
const Form1 = document.getElementById('Form1'),
  Form2 = document.getElementById('Form2'),
  Form3 = document.getElementById('Form3'),
  Next1 = document.getElementById('Next1'),
  Next2 = document.getElementById('Next2'),
  Back1 = document.getElementById('Back1'),
  Back2 = document.getElementById('Back2'),
  progress = document.getElementById('progress');

Next1.onclick = function () {
  Form1.style.display= 'none';
  Form2.style.display = 'block';
  progress.style.width = '270px';
};
Back1.onclick = function () {
  Form1.style.display = 'block';
  Form2.style.display = 'none';
  progress.style.width = '135px';
};
Next2.onclick = function () {
  Form2.style.display = 'none';
  Form3.style.display = 'block';
  progress.style.width = '500px';
};
Back2.onclick = function () {
  Form2.style.display = 'block';
  Form3.style.display = 'none';
  progress.style.width = '250px';
};

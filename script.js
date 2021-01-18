const button = document.querySelector('#button');
const toasts = document.querySelector('#toasts');

const messages = [
  { message: 'Info! Message', type: 'info' },
  { message: 'Error! Message', type: 'error' },
  { message: 'Success! Message', type: 'success' },
  { message: 'Warning! Message', type: 'warning' },
];

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

button.addEventListener('click', () => createNotification());

const createNotification = () => {
  const { message, type } = getRandomMessage();
  console.log(message, type);
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerText = message;
  toast.classList.add(type);
  toasts.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
};

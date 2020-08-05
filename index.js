const { hash } = window.location;

//* Take hash and return message
const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

//* Event Listener
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  // Take value and turn into base64
  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  // Create link and append input to hash
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});

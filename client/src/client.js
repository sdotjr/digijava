const log = (text) => {
  //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. 
  const parent = document.querySelector('#events');
  //In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
  parent.scrollTop = parent.scrollHeight;
};

const onChatSubmitted = (sock) => (e) => {
  e.preventDefault();

  const input = document.querySelector('#chat');
  const text = input.value;
  input.value = '';

  //log(text)
  sock.emit('message', text)
};

(() => {

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('experimental-webgl')

  //log('welcome');
  const sock = io();

  sock.on('message', log);

  document
    .querySelector('#chat-form')
    .addEventListener('click', onChatSubmitted(sock))
})();
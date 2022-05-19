export default function Alert(messageType, message) {
  document.querySelector('.alert').innerHTML = `
  <div role='alert'>
    <span>${messageType}</span> ${message}
  </div>
`;

  setTimeout(() => {
    document.querySelector('.alert').innerHTML = '';
  }, 3000);
}

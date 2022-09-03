export function messageBox(message, field, color) {
  document.getElementById(
    field
  ).innerHTML = `<span style=" color:${color}; font-size:0.8rem;margin:1rem; ">${message}</span>`;
}

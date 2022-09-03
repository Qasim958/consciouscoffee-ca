import { _ } from "../utils/elemSelector.js";
import { messageBox } from "./../utils/message.js";
import { validateContactForm } from "../utils/validation.js";

export function Contact() {
  const contact = _(".conactForm");
  console.log(contact)
  contact.addEventListener("submit", contactForm);
}

function contactForm() {
  event.preventDefault();
  let name = _("#name").value;
  let email = _("#email").value;
  let subject = _("#subject").value;
  let message = _("#message").value;

  if (validateContactForm(name, email, subject, message)) {
    messageBox("Form submitted successfully", "contactMsg", "green");
  }
}

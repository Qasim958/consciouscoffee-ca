import { messageBox } from "./message.js";

export const validateContactForm = (name, email, subject, message) => {
  if (!validateValueLng(name, 2)) {
    messageBox("Name is required", "nameMsg", "red");
    return false;
  } else {
    messageBox(" ", "nameMsg", "green");
  }

  if (!validatEmail(email, 0)) {
    messageBox("Enter valid email address", "emailMsg", "red");
    return false;
  } else {
    messageBox(" ", "emailMsg", "green");
  }
  if (!validateValueLng(subject, 8)) {
    messageBox("Subject should be more than 8 characters", "subjectMsg", "red");
    return false;
  } else {
    messageBox(" ", "subjectMsg", "green");
  }
  if (!validateValueLng(message, 30)) {
    messageBox(
      "Subject should be more than 30 characters",
      "messageMsg",
      "red"
    );
    return false;
  } else {
    messageBox(" ", "messageMsg", "green");
  }

  return true;
};

function validatEmail(data, charLng) {
  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return data.trim().length > charLng &&
    validateEmail.test(String(data).toLowerCase())
    ? true
    : false;
}

function validateValueLng(data, charLng) {
  return data.trim().length >= charLng ? true : false;
}

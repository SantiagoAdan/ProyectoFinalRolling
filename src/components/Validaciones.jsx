const regExpTexto = /^[A-Za-z\s?]+$/;
const regExpTextoEsp=/^[\w\W ]+$/;
const regExpCategory = /^[A-Za-z\-\s?]+$/;
const regExpEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regExpFecha =
  /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regExpHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
const regExpTelefono =
  /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

export const validateTexto = (field) => {
  if (regExpTexto.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateTextoEsp = (field) => {
  if (regExpTextoEsp.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (field) => {
  if (regExpEmail.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateFecha = (field) => {
  if (regExpFecha.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateHora = (field) => {
  if (regExpHora.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateTelefono = (field) => {
  if (regExpTelefono.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateCategoriaVet = (field) => {
  if (
    regExpCategory.test(field) &&
    field.trim() !== "" &&
    (field === "Addle Romina" ||
      field === "Fernandez Sara" ||
      field === "Molinari Pablo" ||
      field === "Kuc Damian" ||
      field === "Mezar Diego")
  ) {
    return true;
  } else {
    return false;
  }
};


export const validateCategoriaMascota = (field) => {
    if (
      regExpCategory.test(field) &&
      field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };
import getFormPerson from "./formPerson.js";

const readyPlane = (forms, main) => {
  const data = [];

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      for (const element of form.elements) {
        element.disabled = true;
      };

      data.push({
        name: form.name.value,
        ticket: form.ticket.value,
      });

      if (forms.length === data.length) {
        forms.forEach(form => form.remove());
        airplane(main, data);
      }


    })

  });

  console.log(data);

};

export default readyPlane;
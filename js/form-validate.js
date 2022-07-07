var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validation = new JustValidate('#formd', {
  errorFieldCssClass: 'invalid-contact-form',
  errorLabelStyle: {
    fontSize: '12px',
    fontFamily: 'OpenSans',
    color: '#444443',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
    .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3 символа минимум)',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      validator: (name, obj) => {
        var data = /^[а-яА-ЯёЁA-Za-z]+$/
        return data.test(name)
      },
      errorMessage: 'Недопустимый формат',

    },
    {
      rule: 'required',
      errorMessage: 'Необходимо написать имя',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Необходимо написать телефон',
    },
    {
      validator: (tel, obj) => {
        const phone = selector.inputmask.unmaskedvalue()
        return phone.length === 10 && Number.isInteger(Number(phone));
      },
      errorMessage: 'Телефон неправильный',
    }
  ])
 .onSuccess((ev) => {
    document.querySelector('.contacts__form-contacts').submit()
  });

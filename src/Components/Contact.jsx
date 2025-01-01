import React, { useState } from 'react';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Mensagem enviada com sucesso! Logo mais entraremos em contato 😉');
          form.reset();

          setTimeout(() => setSuccessMessage(''), 4000);
        } else {
          setSuccessMessage('Ocorreu um erro. Tente novamente.');
        }
      })
      .catch(() => {
        setSuccessMessage('Ocorreu um erro. Tente novamente.');
      });
  };

  return (
    <section className='contact' id='contact'>
      <h2 className="section-text">Contato</h2>

      <div className="container-form">
        <form
          action="https://formsubmit.co/almeidadesousajoaoenrique@gmail.com"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <input type="text" name="firstName" id="firstName" placeholder='Primeiro Nome' className='input' required />
            <input type="text" name="lastName" id="lastName" placeholder='Sobrenome' className='input' required />
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Número de Telefone' className='input' required />
            <input type="email" name="email" id="email" placeholder='Seu E-mail' className='input' required />
          </div>
          <textarea
            name="message"
            id="message"
            cols="90"
            rows="7"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
          <input type="submit" value="Enviar" />
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>

       
      </div>
    </section>
  );
};

export default Contact;



import emailjs from 'emailjs-com';

import './infoform.style.css';

const Infoform = () => {
    const sendEmail = (event) => {
        event.preventDefault();
        const email = document.getElementById(`email`).value;
        const asunto = document.getElementById(`about`).value;
        if (email.length > 0 && asunto.length > 0 ) {
            var templateParams = {
                email_to: email, 
                message: asunto,
            };
    
            console.log(document.getElementById(`about`));
            emailjs.init('acqsgfL8-D3hasbbh');
            emailjs.send('service_fq0w3kb','template_4fn70ds', templateParams ) 
            .then((response) => {
                console.log(`esta es la respuesta ${response}`)
                console.log('SUCCESS!', response.status, response.text);
                alert("Se envío tu email");
            })
        } else {
            alert('Coteja tu información');
        }
        
    }
    return (
        <div className='__SectionInfoForm generalColorBlack'>
            <h2>Contáctanos</h2>
            <form onSubmit={sendEmail}>
                <div className='group-input'>
                    <label htmlFor="email">Correo electrónico: </label>
                    <input type="email" name="email" id="email" placeholder='Correo electrónico' />
                </div>
                <div className='group-input'>
                    <label htmlFor="about">Asunto: </label>
                    <input type="text" name="text" id="about" placeholder='Asunto'/>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Infoform;
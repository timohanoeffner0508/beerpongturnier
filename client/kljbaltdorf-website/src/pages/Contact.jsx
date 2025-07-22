import "./DivHeader.css"
import { useState } from "react";

function Contact(){

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [info, setInfo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, mail, message);

        try {
            const response = await fetch("http://localhost:8000/kontakt", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, mail, message}),
            });

            const data = await response.json();
            console.log(data)
            if (data.success) {
                setName("");
                setMail("");
                setMessage("");
                setInfo(`Vielen Dank, ${name}! Nachricht erfolgreich gesendet!`)
                setTimeout(() => setInfo(""),5000);
              } else {
                setInfo('Irgendwas ist schiefgelaufen, probier es später nochmal !')
                setTimeout(() => setInfo(""),5000);
              }
            } catch (error) {
              console.error("Fehler:", error);
              setInfo("Irgendwas ist schiefgelaufen, probier es später nochmal");
              setTimeout(setInfo(""),5000);
            }
        
        };



    return( 
    <div className="divheader">
        <h2>Kontakt</h2>
        <h3>Hast du Fragen, dann melde dich über das Kontaktformular.</h3>
    <form className="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" value={mail} onChange={(e) => setMail(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required></textarea>
        </div>

        <button className="SendButton" type="submit">Absenden</button>
        {info && <p>{info}</p>}
    </form>
    </div>
  );

}

export default Contact;
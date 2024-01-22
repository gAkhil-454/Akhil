import React, {useRef} from "react";
import emailjs from '@emailjs/browser';


function Contactme(){
    const form = useRef();
    function sendmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_1k7ljfs', 'template_2xf6vxv', form.current, '4j9wtaDIj6wnv_kNn')
          .then((result) => {
             alert(result.text);
          }, (error) => {
              alert(error.text);
          });
      }
    return (
       
        <div className="contactme" id="contactme">
        <div className="heading">
          <h1 >Contact Me</h1>
          <p >
            Have Questions or Exciting Projects in Mind? Im Here 
            to Listen and Innovate.</p>
        </div>  
        
        <div className="send">
            <form ref={form} onSubmit={sendmail}>
            <h1 >Send me a message</h1>
            <div className="em">
                <input type="text" id = "name" name="user_name" placeholder="Name" required /> <input type="email" id="email" name="user_email" placeholder="Email Id" required />
            </div>
            <div className="subject">
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="msg">
                <input type="text" id="message" name="message" placeholder="Message" required />
            </div>

            <div className="sendme">
                <button type="submit" value="send" onclick="reset();"> Send</button>
            </div>
            </form>
        </div>
        
        </div>
        
    );

}

export default Contactme;
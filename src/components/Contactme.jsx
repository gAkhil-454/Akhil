import React, {useRef} from "react";
import emailjs from '@emailjs/browser';


function Contactme(){
    const form = useRef();
    function sendmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ctrwsxq', 'template_bts9618', form.current, '8pIKYu3j3SGK9Xht7')
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
            Have questions or exciting projects in mind? Im here 
            to listen and innovate.</p>
        </div>  
        
        <div className="send">
            <form ref={form} autocomplete="off" onSubmit={sendmail}>
            <h1 >Send me a message</h1>
            <div className="em">
                <div className="input-element">
                <input type="text" id = "name" name="user_name"  required />
                <div class="ph">Name</div>
                </div>
                <div className="input-element">
                <input type="email" id="email" name="user_email"  required />
                <div class="ph">Email Id</div>
                </div>
                 
            </div>
            <div className="subject">
                <input type="text" id="subject" name="subject" required />
                <div class="ph-s">Subject</div>
            </div>
            <div className="msg">
                <input type="text" id="message" name="message"  required />
                <div class="ph-m">Message</div>
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
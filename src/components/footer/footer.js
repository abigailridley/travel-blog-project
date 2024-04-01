import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInbox } from '@fortawesome/free-solid-svg-icons';
import './footer.css'

const Footer = () => {
    return (
        <div>
           <div className="subscribe-form"> <div className="subscribe-msg"> <p>subscribe for email updates</p></div>  <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} /> </div>
           
        </div>
    );
}

export default Footer;

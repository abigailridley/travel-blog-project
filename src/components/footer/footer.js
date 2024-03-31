import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import './footer.css'

const Footer = () => {
    return (
        <div>
           <div className="subscribe-form"> <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} /> </div>
            <FontAwesomeIcon icon={faInbox} />
        </div>
    );
}

export default Footer;

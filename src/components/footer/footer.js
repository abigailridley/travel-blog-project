import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
            <FontAwesomeIcon icon={faSquare} />
        </div>
    );
}

export default Footer;

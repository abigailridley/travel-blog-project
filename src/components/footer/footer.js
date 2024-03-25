import MailchimpSubscribe from "react-mailchimp-subscribe"


const Footer= () => {
    return (
<div>
<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
</div>
    )}


    export default Footer;
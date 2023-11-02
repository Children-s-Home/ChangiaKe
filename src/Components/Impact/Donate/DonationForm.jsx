import MpesaImg from "../../../assets/mpesa.png";
import PaypalImg from "../../../assets/paypal.png";
import VisaImg from "../../../assets/visa.png";
import "./Donation.css";
import DonationPriceBtn from "./DonationPriceBtn";
import DonationCtaBtn from "./components/DonationCtaBtn";
import Rule from "./components/Rule";
function DonationForm() {
  return (
    <div className="donation-form">
      <form className="donation-form-left">
        <div className="my-donation-details">
          <p className="donation-label">My donation</p>
        </div>
        <div className="donation-price-btn-container">
          <DonationPriceBtn price={5} />
          <DonationPriceBtn price={20} />
          <DonationPriceBtn price={50} />
          <DonationPriceBtn price={80} />
          <DonationPriceBtn price={200} />
        </div>
        <Rule className="hr" />
        <p className="donation-label">Frequency</p>
        <div className="frequency-container">
          <div className="radio-container">
            <input type="radio" value="OneTime" name="payFrequency" />
            <span className="radio-lbl">One Time</span>
          </div>
          <div className="radio-container">
            <input type="radio" value="Monthly" name="payFrequency" />
            <span className="radio-lbl">Monthly</span>
          </div>
          <div className="radio-container">
            <input type="radio" value="Anually" name="payFrequency" />
            <span className="radio-lbl">Anually</span>
          </div>
        </div>
        <Rule className="hr" />
        <p className="donation-label">Personal Details</p>
        <div className="donation-inputs-container">
          <input
            className="donation-input"
            type="text"
            placeholder="First Name"
          />
          <input
            className="donation-input"
            type="text"
            placeholder="Last Name"
          />
          <input className="donation-input" type="text" placeholder="Email" />
          <input className="donation-input" type="text" placeholder="Country" />
        </div>
        <p className="donation-label">Specify Donation</p>
        <div className="donation-spec-container">
          <div className="radio-container">
            <input type="radio" value="OneTime" name="donationSpec" />
            <span className="radio-lbl">Girls only Children’s home</span>
          </div>
          <div className="radio-container">
            <input type="radio" value="Monthly" name="donationSpec" />
            <span className="radio-lbl">Elderly Homes</span>
          </div>
          <div className="radio-container">
            <input type="radio" value="Anually" name="donationSpec" />
            <span className="radio-lbl">Boys only Children’s home</span>
          </div>
          <div className="radio-container">
            <input type="radio" value="Anually" name="donationSpec" />
            <span className="radio-lbl">Any Children’s home</span>
          </div>
        </div>
        <DonationCtaBtn>Donate Now</DonationCtaBtn>
      </form>
      <Rule className="vr" />
      <div className="donation-form-right">
        <p className="payment-option-txt">Our payment options</p>
        <div className="payment-options-imgs">
          <img src={MpesaImg} className="payment-opt-img" />
          <img src={PaypalImg} className="payment-opt-img" />
          <img src={VisaImg} className="payment-opt-img" />
        </div>
      </div>
    </div>
  );
}

export default DonationForm;

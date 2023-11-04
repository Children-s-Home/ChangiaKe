import MpesaImg from "../../../assets/mpesa.png";
import PaypalImg from "../../../assets/paypal.png";
import VisaImg from "../../../assets/visa.png";
import DonationPriceBtn from "./components/DonationPriceBtn";
import DonationCtaBtn from "./components/DonationCtaBtn";
import DonationRadioContainer from "./components/DonationRadioContainer";
import RadioContainer from "./components/RadioContainer";
import Rule from "./components/Rule";
import "./Donation.css";

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
        <RadioContainer className="frequency-container">
          <DonationRadioContainer
            value={"OneTime"}
            label={"One Time"}
            name={"payFrequency"}
          />
          <DonationRadioContainer
            value={"Monthly"}
            label={"Monthly"}
            name={"payFrequency"}
          />
          <DonationRadioContainer
            value={"Anually"}
            label={"Anually"}
            name={"payFrequency"}
          />
        </RadioContainer>
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
        <RadioContainer className={"donation-spec-container"}>
          <DonationRadioContainer
            value={"GirlsOnly"}
            label={"Girls only Children’s home"}
            name={"donationSpec"}
          />
          <DonationRadioContainer
            value={"Elderly"}
            label={"Elderly Homes"}
            name={"donationSpec"}
          />
          <DonationRadioContainer
            value={"BoysOnly"}
            label={"Boys only Children’s home"}
            name={"donationSpec"}
          />
          <DonationRadioContainer
            value={"Any"}
            label={"Any Children’s home"}
            name={"donationSpec"}
          />
        </RadioContainer>
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

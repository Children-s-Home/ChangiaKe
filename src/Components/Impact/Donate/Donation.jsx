import DonationForm from "./DonationForm"
import "./Donation.css"

const pageContent =
  "At Changia you can make a donation to a specific Children’s home or a general donation that can be made to any of the reg children’s homes registered with us. We advise you to go through the Discover tab so that you can search for Children’s homes near you to give back to. Look for the children’s homes you fully resonate with and fill in the donation form in their respective pages.  The form below allows you to donate to any of the homes registered with us. Be it money, clothes or food they are all accumulated then distributed to the children’s homes equally. Your donation will help us to continue our work and make a difference in the world. Every dollar counts, and we are grateful for your support.";
function Donation() {
  return (
    <div className="donation-container">
      <p className="donation-details">{pageContent}</p>
      <DonationForm />
    </div>
  )
}

export default Donation
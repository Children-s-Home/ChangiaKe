import DollarSign from "../../../assets/dollarSign";
function DonationPriceBtn({ price }) {
  return (
    <button className="donation-price-btn">
      <DollarSign /> {price}
    </button>
  );
}

export default DonationPriceBtn;

import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import ChiBanner from "./ChiBanner"
import ChiContent from "./ChiContent"
import Leadership from "./Leadership"
import Need from "./Need"
import "./chi.css"

const ChildrenHomeIndividual = () => {
  return (
    <div className="chi-container">
      <Navbar />
      <ChiBanner />
      <ChiContent />
      <Need />
      <Leadership />
      <Footer />

    </div>
  )
}

export default ChildrenHomeIndividual
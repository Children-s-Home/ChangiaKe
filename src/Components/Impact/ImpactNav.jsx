import { NavLink } from 'react-router-dom';
import "./ImpactLayout.css"

function ImpactNav() {
  return (
    <div className='list-container'>
      <ul className="impact-links">
        <li>
          <NavLink to="donate">Donation</NavLink>
        </li>
        <li>
          <NavLink to="volunteer">Volunteering</NavLink>
        </li>
        <li>
          <NavLink to="fundraise">Fundraising</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ImpactNav
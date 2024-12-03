// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {name, id, teamImageUrl} = teamsData

  return (
    <li className="team-item-data">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={`${name}`} className="team-logo-img" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
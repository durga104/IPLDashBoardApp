// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const statusCode = await response.statusCode
    console.log(statusCode)

    const data = await response.json()
    console.log(data.teams)

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsList: formattedData, isLoading: false})
    console.log(formattedData)
  }

  render() {
    const {isLoading, teamsList} = this.state
    console.log(isLoading)

    return (
      <div className="dashboard-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        <ul className="teamsList-data-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsList.map(item => <TeamCard key={item.name} teamsData={item} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home

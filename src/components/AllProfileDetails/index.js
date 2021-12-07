import Cookies from 'js-cookie'
import {Component} from 'react'
import ProfileCard from '../ProfileCard'

class AllProfileDetails extends Component {
  state = {profileDetails: []}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch('https://apis.ccbp.in/profile', options)

    const data = await response.json()
    const x = data.profile_details

    const formattedData = {
      name: x.name,
      profileImageUrl: x.profile_image_url,
      shortBio: x.short_bio,
    }
    this.setState({profileDetails: formattedData})
  }

  render() {
    const {profileDetails} = this.state

    console.log(profileDetails)

    return (
      <div>
        {profileDetails.map(each => (
          <ProfileCard details={each} />
        ))}
      </div>
    )
  }
}
export default AllProfileDetails

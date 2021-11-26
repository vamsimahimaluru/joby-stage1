import {Component} from 'react'
import Cookies from 'js-cookie'

class AllProfileDetails extends Component {
  state = {profileDetails: []}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)
    if (response.ok === true) {
      const fetchedData = response.json()
      const updatedData = fetchedData.map(each => ({
        profileImageUrl: each.profile_image_url,
        name: each.name,
      }))
      this.setState({profileDetails: updatedData})
    }
  }

  render() {
    const {profileDetails} = this.state
    const {name} = profileDetails
    console.log(profileDetails)
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}
export default AllProfileDetails

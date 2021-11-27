import {Component} from 'react'
import Cookies from 'js-cookie'

class AllProfileDetails extends Component {
  state = {profileDetails: []}

  componentDidMount() {
    this.getProfileDetails()
  }

  //   getFormattedData = data => ({
  //     name: data.name,
  //     profileImageUrl: data.profile_image_url,
  //     shortBio: data.short_bio,
  //   })

  //   getProfileDetails = async () => {
  //     const jwtToken = Cookies.get('jwt_token')
  //     const api = 'https://apis.ccbp.in/profile'
  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //       method: 'GET',
  //     }
  //     const response = await fetch(api, options)
  //     const data = await response.json()
  //     console.log(data)
  //     this.setState({profileDetails: data})
  //     if (response.ok === true) {
  //       this.getFormattedData(data)
  //     }
  //     const updatedData = this.getFormattedData(response.profile_details)
  //   }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch('https://apis.ccbp.in/profile', options)
    const statusCode = await response.statusCode
    // console.log(statusCode)
    const data = await response.json()
    const x = data.profile_details
    // console.log(data)

    const formattedData = {
      name: x.name,
      profileImageUrl: x.profile_image_url,
      shortBio: x.short_bio,
    }
    this.setState({profileDetails: formattedData})
  }

  render() {
    const {profileDetails} = this.state
    const {name, shortBio} = profileDetails
    console.log(profileDetails)

    return (
      <div>
        <h1>{name}</h1>
        <p>{shortBio}</p>
      </div>
    )
  }
}
export default AllProfileDetails

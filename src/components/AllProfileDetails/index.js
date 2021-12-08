import Cookies from 'js-cookie'
import {Component} from 'react'
import ProfileCard from '../ProfileCard'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class AllProfileDetails extends Component {
  state = {
    profileDetails: [],
    employeeList: employmentTypesList,
    salaryRange: salaryRangesList,
  }

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
    const {profileDetails, employeeList, salaryRange} = this.state

    console.log(employeeList)

    return (
      <div>
        <ProfileCard details={(profileDetails, employeeList)} />
        <ul>
          {employeeList.map(eachEmp => (
            <ProfileCard employeeList={eachEmp} />
          ))}
        </ul>
      </div>
    )
  }
}
export default AllProfileDetails

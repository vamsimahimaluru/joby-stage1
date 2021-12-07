import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SearchDetails from '../SearchDetails/index'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobDetails extends Component {
  state = {
    jobDetails: [],
    searchInput: '',

    // jobType: '',
    // package: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.renderJobs()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderJobs = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = fetchedData.jobs.map(eachjob => ({
        companyLogoUrl: eachjob.company_logo_url,
        employmentType: eachjob.employment_type,
        jobDescription: eachjob.job_description,
        location: eachjob.location,
        packagePerAnnum: eachjob.package_per_annum,
        rating: eachjob.rating,
        title: eachjob.title,
      }))

      this.setState({
        jobDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderJobDetailsList = () => {
    const {jobDetails, searchInput} = this.state
    console.log(jobDetails)
    const searchResult = jobDetails.filter(eachUser =>
      eachUser.title.includes(searchInput),
    )
    return (
      <>
        <div className="search-container">
          <input
            placeholder="search"
            type="search"
            className="inputElement"
            onChange={this.onChangeInput}
          />
          <ul className="search">
            {searchResult.map(eachTitle => (
              <SearchDetails jobData={eachTitle} key={eachTitle.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderJobDetailsListFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
  )

  renderLoadingView = () => (
    <div className="primedeals-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetailsList()
      case apiStatusConstants.failure:
        return this.renderJobDetailsListFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}
export default JobDetails

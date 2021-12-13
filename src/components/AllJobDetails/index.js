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
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.renderJobs()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderJobs = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const jobsApiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(jobsApiUrl, options)

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
        id: eachjob.id,
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
          <div className="header_input">
            <input
              placeholder="Search"
              className="inputElement"
              type="Search"
              onChange={this.onChangeInput}
            />
            <button type="button" testid="searchButton">
              <i className="fas fa-search">0</i>
            </button>
          </div>

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
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="failure-image"
      />
      <button type="button" className="button">
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader
        type="ThreeDots"
        color="#0b69ff"
        height="50"
        width="50"
        testid="loader"
      />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
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

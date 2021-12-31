import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SkillsCard from '../SkillsCard'
import SimilarJobs from '../SimilarJobs'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  unsuccessful: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {jobData: {}, similarJobs: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getJobItemData()
  }

  getFormattedData = data => ({
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    jobDescription: data.job_description,
    id: data.id,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    title: data.title,

    description: data.life_at_company.description,
    imageUrl: data.life_at_company.image_url,

    skills: data.skills.map(skill => ({
      name: skill.name,
      imageUrl: skill.image_url,
    })),
  })

  getSimilarJobData = data => ({
    title: data.title,
    companyLogoUrl: data.company_logo_url,
    employmentType: data.employment_type,
    jobDescription: data.job_description,
    id: data.id,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
  })

  getJobItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_toke')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = this.getFormattedData(fetchedData.job_details)
      const updatedSimilarJobsData = fetchedData.similar_jobs.map(
        eachSimilarJob => this.getSimilarJobData(eachSimilarJob),
      )

      this.setState({
        jobData: updatedData,
        similarJobs: updatedSimilarJobsData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.unsuccessful,
      })
    }
  }

  renderJobItemDetailsView = () => {
    const {jobData, similarJobs} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      rating,
      title,
      description,
      imageUrl,
      imageUrlSkills,
      name,
      packagePerAnnum,
    } = jobData

    return (
      <>
        <div className="background">
          <div className="main-container">
            <div className="app-container1">
              <img
                className="logo1"
                src={companyLogoUrl}
                alt="job details company logo"
              />

              <div className="rating-head">
                <h1>{title}</h1>
                <div className="star">
                  <p>
                    <i className="fas fa-star" />
                    {rating}
                  </p>
                </div>
              </div>
            </div>
            <div className="package">
              <div className="loc-work">
                <i className="fas fa-map-marker-alt location" />
                <p>{location}</p>
                <i className="fas fa-briefcase work" />
                <p>{employmentType}</p>
              </div>
              <p className="perannum">{packagePerAnnum}</p>
            </div>
            <hr />
            <div>
              <div className="visited">
                <h1>Description</h1>
                <a href={companyWebsiteUrl}>Visit</a>
              </div>
              <p>{jobDescription}</p>
            </div>
            <div>
              <h1>skills</h1>
              <ul>
                <li className="unorder-list">
                  {jobData.skills.map(each => (
                    <SkillsCard datas={each} id={each.id} />
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <h1>Life at company</h1>
              <div className="life-at-company-logo">
                <p>{description}</p>
                <img src={imageUrl} alt="life at company" />
              </div>
            </div>
          </div>
          <div>
            <h1>Similar Jobs</h1>
            <ul>
              <li className="similar-job">
                {similarJobs.map(eachJob => (
                  <SimilarJobs jobsDetails={eachJob} id={eachJob.id} />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="">
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="failure-view-image"
      />
      <h1 className="">Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <Link to="/">
        <button type="button" className="button">
          Retry
        </button>
      </Link>
    </div>
  )

  renderJobItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobItemDetailsView()
      case apiStatusConstants.unsuccessful:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div>{this.renderJobItemDetails()}</div>
      </>
    )
  }
}
export default JobItemDetails

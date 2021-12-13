import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

class BlogItemDetails extends Component {
  state = {jobItemData: {}}

  componentDidMount() {
    this.getJobItemData()
  }

  getJobItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()
    console.log(data)
    const updatedData = {
      companyLogoUrl: data.job_details.company_logo_url,
      companyWebsiteUrl: data.job_details.company_website_url,
      employmentType: data.job_details.employment_type,
      id: data.job_details.id,
      jobDescription: data.job_details.job_description,
      location: data.job_details.location,
      rating: data.job_details.rating,
      title: data.job_details.title,
      lifeAtCompany: data.job_details.life_at_company,
      packagePerAnnum: data.job_details.package_per_annum,
      skills: data.job_details.skills,
      description: data.job_details.life_at_company.description,
      imageUrl: data.job_details.life_at_company.image_url,
      name: data.job_details.skills[2].name,
      imageUrlSkill: data.job_details.skills[2].image_url,
      similarJobs: data.similar_jobs,
    }
    this.setState({jobItemData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {jobItemData} = this.state
    console.log(jobItemData)
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
      imageUrlSkill,
      name,
      packagePerAnnum,
    } = jobItemData
    return (
      <>
        <Header />

        <div className="background">
          <div className="main-container">
            <div className="app-container1">
              <img className="logo1" src={companyLogoUrl} alt="image1" />
              <div className="rating-head">
                <h1>{title}</h1>
                <div className="star">
                  <i className="fas fa-star">{rating}</i>
                </div>
              </div>
            </div>
            <div className="package">
              <div className="loc-work">
                <i className="fas fa-map-marker-alt location">{location}</i>
                <i className="fas fa-briefcase work">{employmentType}</i>
              </div>
              <h1 className="perannum">{packagePerAnnum}</h1>
            </div>
            <hr />
            <div>
              <div className="visit-link">
                <h1>Description</h1>
                <a href={companyWebsiteUrl}>Visit</a>
              </div>
              <p>{jobDescription}</p>
            </div>
            <div className="docker-container">
              <h1>Skills</h1>
              <div className="skill-container">
                <div className="docker">
                  <img src={imageUrlSkill} alt="" />
                  <p>{name}</p>
                </div>
                <div className="docker">
                  <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" />
                  <p>Docker</p>
                </div>
                <div className="docker">
                  <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" />
                  <p>Docker</p>
                </div>
                <div className="docker">
                  <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" />
                  <p>Docker</p>
                </div>
                <div className="docker">
                  <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" />
                  <p>Docker</p>
                </div>
                <div className="docker">
                  <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" />
                  <p>Docker</p>
                </div>
              </div>
            </div>
            <div className="life-at-company">
              <div>
                <h1>Life at Company</h1>
                <p>{description}</p>
              </div>
              <img src={imageUrl} />
            </div>
          </div>
          <div>
            <h1>Similar Jobs</h1>
            <div className="item-card-container">
              <div className="item-app-container">
                <img
                  className="logo2"
                  src="https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
                  alt="image1"
                />

                <div className="rating-head">
                  <h1 className="item-heading">DevopsEnginner</h1>
                  <div className="star">
                    <i className="fas fa-star">{employmentType}</i>
                  </div>
                </div>
              </div>
              <div className="package">
                <div className="loc-work">
                  <i className="fas fa-map-marker-alt location">Delhi</i>
                  <i className="fas fa-briefcase work">4</i>
                </div>
                <h1 className="perannum">10LPA</h1>
              </div>
              <hr />
              <div>
                <h1>Description</h1>

                <p>
                  Our core philosophy is people over process. Our culture has
                  been instrumental to our success. It has helped us attract and
                  retain stunning colleagues, making work here more satisfying.
                  Entertainment, like friendship, is a fundamental human need,
                  and it changes how we feel and gives us common ground. We want
                  to entertain the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails

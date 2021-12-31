import {Link} from 'react-router-dom'
import './index.css'

const SearchDetails = props => {
  const {jobData} = props
  const {
    id,
    employmentType,
    location,
    packagePerAnnum,
    rating,
    title,
    companyLogoUrl,
    jobDescription,
  } = jobData
  return (
    <>
      <Link to={`jobs/${id}`}>
        <div className="background">
          <div className="main-container">
            <div className="app-container1">
              <img className="logo1" src={companyLogoUrl} alt="company logo" />

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
                <p>
                  <i className="fas fa-map-marker-alt location" />
                  {location}
                </p>
                <p>
                  <i className="fas fa-briefcase work" />
                  {employmentType}
                </p>
              </div>
              <h1 className="perannum">{packagePerAnnum}</h1>
            </div>
            <hr />
            <div>
              <h1>Description</h1>
              <p>{jobDescription}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
export default SearchDetails

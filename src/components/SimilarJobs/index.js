import './index.css'

const SimilarJobs = props => {
  const {jobsDetails} = props
  const {
    companyLogoUrl,
    location,
    employmentType,
    jobDescription,
    title,
    packagePerAnnum,
    rating,
  } = jobsDetails

  return (
    <li>
      <div className="item-card-container">
        <div className="item-app-container">
          <img
            className="logo2"
            src={companyLogoUrl}
            alt="similar job company logo"
          />
          <div>
            <h1>{title}</h1>
            <div>
              <i className="fas fa-star" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="package">
          <div className="loc-work">
            <div className="location">
              <i className="fas fa-map-marker-alt location">
                <p>{location}</p>
              </i>
            </div>
            <i className="fas fa-briefcase work" />
            <div className="employment-type">
              <p>{employmentType}</p>
            </div>
          </div>
          <h1 className="perannum">{packagePerAnnum}</h1>
        </div>
        <hr />
        <div>
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </div>
    </li>
  )
}
export default SimilarJobs

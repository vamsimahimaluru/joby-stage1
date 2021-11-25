import './index.css'

const SearchDetails = props => {
  const {jobData} = props
  const {
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
            <h1>Description</h1>
            <p>{jobDescription}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SearchDetails

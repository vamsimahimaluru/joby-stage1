import './index.css'

const ProfileCard = props => {
  const {details, employeeList} = props
  const {name, profileImageUrl, shortBio} = details
  const {label} = employeeList

  const setJobType = event => {
    console.log(event.target.value)
  }

  const setPackage = event => {
    console.log(event.target.value)
  }

  return (
    <div className="profile-container">
      <div className="app-container">
        <img src={profileImageUrl} alt="" />
        <h1>{name}</h1>
        <p>{shortBio}</p>
      </div>
      <hr />
      <div>
        <h1>Type of Employment</h1>
        <form onChange={setJobType.bind(this)}>
          <ul>
            <li>
              <input type="checkbox" value="label" />
              <label htmlFor="fulltime">{label}</label>
              <br />
              <input type="checkbox" value="label" />
              <label htmlFor="fulltime">Part Time</label>
              <br />
              <input type="checkbox" value="label" />
              <label htmlFor="fulltime">Freelancer</label>
              <br />
              <input type="checkbox" value="label" />
              <label htmlFor="fulltime">InternShip</label>
            </li>
            <br />
          </ul>
        </form>
      </div>
      <hr />
      <div>
        <h1>Salary Range</h1>
        <form onChange={setPackage.bind(this)}>
          <ul>
            <li>
              <input type="radio" name="10salaries" value="10Lpa" id="tenLpa" />
              <label htmlFor="tenLpa">10LPA and above</label>
              <br />
              <input
                type="radio"
                name="10salaries"
                value="20Lpa"
                id="twentyLpa"
              />
              <label htmlFor="twentyLpa">20 LPA and above</label>
              <br />
              <input
                type="radio"
                name="10salaries"
                value="30Lpa"
                id="thirtyLpa"
              />
              <label htmlFor="thirtyLpa">30 LPA and above</label>
              <br />
              <input
                type="radio"
                name="10salaries"
                value="40Lpa"
                id="fortyLpa"
              />
              <label htmlFor="fortyLpa">40 LPA and above</label>
            </li>
            <br />
          </ul>
        </form>
      </div>
    </div>
  )
}
export default ProfileCard

import './index.css'

const ProfileCard = props => {
  const {details} = props
  const {name} = details

  const setJobType = event => {
    console.log(event.target.value)
  }

  const setPackage = event => {
    console.log(event.target.value)
  }

  return (
    <div className="profile-container">
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          alt=""
        />
        <h1>{name}</h1>
        <p>Lead Software Developer and AI-ML expert</p>
      </div>
      <hr />
      <div>
        <h1>Type of Employment</h1>
        <form onChange={setJobType.bind(this)}>
          <input type="checkbox" value="Full Time" />
          <label htmlFor="fulltime">Full Time</label>
          <br />
          <input type="checkbox" value="Part Time" />
          <label htmlFor="fulltime">Part Time</label>
          <br />
          <input type="checkbox" value="Freelancer" />
          <label htmlFor="fulltime">Freelancer</label>
          <br />
          <input type="checkbox" value="Intership" />
          <label htmlFor="fulltime">InternShip</label>
          <br />
        </form>
      </div>
      <hr />
      <div>
        <h1>Salary Range</h1>
        <form onChange={setPackage.bind(this)}>
          <input type="radio" name="10salaries" value="10Lpa" id="tenLpa" />
          <label htmlFor="tenLpa">10LPA and above</label>
          <br />
          <input type="radio" name="10salaries" value="20Lpa" id="twentyLpa" />
          <label htmlFor="twentyLpa">20 LPA and above</label>
          <br />
          <input type="radio" name="10salaries" value="30Lpa" id="thirtyLpa" />
          <label htmlFor="thirtyLpa">30 LPA and above</label>
          <br />
          <input type="radio" name="10salaries" value="40Lpa" id="fortyLpa" />
          <label htmlFor="fortyLpa">40 LPA and above</label>
          <br />
        </form>
      </div>
    </div>
  )
}
export default ProfileCard

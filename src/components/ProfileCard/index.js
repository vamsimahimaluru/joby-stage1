import './index.css'

const ProfileCard = props => {
  const {details} = props
  const {name, profileImageUrl, shortBio} = details

  const setJobType = event => {
    console.log(event.target.value)
  }

  const setPackage = event => {
    console.log(event.target.value)
  }

  return (
    <div className="profile-container">
      <div className="app-container">
        <img src={profileImageUrl} alt="profile" />
        <h1>{name}</h1>
        <p>{shortBio}</p>
      </div>
      <hr />
    </div>
  )
}
export default ProfileCard

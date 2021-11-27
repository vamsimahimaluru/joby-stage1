import AllJobDetails from '../AllJobDetails'
import ProfileCard from '../ProfileCard'
import Header from '../Header'
import './index.css'

const JobsRoute = () => (
  <>
    <Header />
    <div className="container">
      <ProfileCard />
      <AllJobDetails />
    </div>
  </>
)
export default JobsRoute

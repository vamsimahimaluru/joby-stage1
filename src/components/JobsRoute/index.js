import AllJobDetails from '../AllJobDetails'

import AllProfileDetails from '../AllProfileDetails'
import Header from '../Header'

import './index.css'

const JobsRoute = () => (
  <>
    <Header />
    <div className="container">
      <AllProfileDetails />
      <AllJobDetails />
    </div>
  </>
)
export default JobsRoute

import Header from '../Header'
import './index.css'

const SearchDetails = props => {
  const {jobData} = props

  return (
    <>
      <Header />
      <div className="background">
        <div className="main-container">
          <div className="app-container1">
            <img
              className="logo1"
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
              alt="image1"
            />

            <div className="rating-head">
              <h1>DevopsEnginner</h1>
              <div className="star">
                <i className="fas fa-star">4</i>
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
            <div className="visit-link">
              <h1>Description</h1>
              <a href="www.favebook">visit</a>
            </div>
            <p>
              Our core philosophy is people over process. Our culture has been
              instrumental to our success. It has helped us attract and retain
              stunning colleagues, making work here more satisfying.
              Entertainment, like friendship, is a fundamental human need, and
              it changes how we feel and gives us common ground. We want to
              entertain the world
            </p>
          </div>
          <div className="docker-container">
            <h1>Skills</h1>
            <div className="skill-container">
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
              <div className="docker">
                <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" />
                <p>Docker</p>
              </div>
            </div>
          </div>
          <div className="life-at-company">
            <div>
              <h1>Life at Company</h1>
              <p>
                Our core philosophy is people over process. Our culture has been
                instrumental to our success. It has helped us attract and retain
                stunning colleagues, making work here more satisfying.
                Entertainment, like friendship, is a fundamental human need, and
                it changes how we feel and gives us common ground. We want to{' '}
              </p>
            </div>
            <img src="https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png" />
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
                  <i className="fas fa-star">*</i>
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
                Our core philosophy is people over process. Our culture has been
                instrumental to our success. It has helped us attract and retain
                stunning colleagues, making work here more satisfying.
                Entertainment, like friendship, is a fundamental human need, and
                it changes how we feel and gives us common ground. We want to
                entertain the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SearchDetails

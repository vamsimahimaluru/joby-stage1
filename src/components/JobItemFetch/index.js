import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class JobItemFetch extends Component {
  state = {jobsData: [], isLoading: true}

  componentDidMount() {
    this.getJobItemData()
  }

  getJobItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      }
      this.setState({jobsData: updatedData, isLoading: false})
    }
  }

  renderJobsItemDetails = () => {
    const {jobsData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = jobsData

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderJobsItemDetails()
        )}
      </div>
    )
  }
}

export default JobItemFetch

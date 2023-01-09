import {Component} from 'react'
import Cookies from 'js-cookie'

import {BiSearch} from 'react-icons/bi'

import VideoItem from '../VideoItem'
import Failure from '../Failure'
import EmptyList from '../ListEmptyView'

import NxtContext from '../../context/NxtContext'
import Loading from '../Loading'

import {
  VideosContainer,
  InPutBar,
  UlCon,
  SearchContainer,
} from './styleComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Videos extends Component {
  state = {
    videosList: [],
    apiStatus: apiConstants.inProgress,
    searchInput: '',
    searchIp: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearch = event => {
    event.preventDefault()
    this.setState({searchIp: event.target.value})
  }
  // this.get.videos() not use function calling

  onSearchInput = () => {
    const {searchIp} = this.state
    this.setState({searchInput: searchIp})
    this.getVideos()
  }

  getVideos = async () => {
    // console.log('Hai naveen')
    // this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      // console.log(data)
      const updateVideos = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbNailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      // console.log(updateVideos)
      this.setState(
        {videosList: updateVideos, apiStatus: apiConstants.success},
        this.getVideos,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {videosList} = this.state

    return (
      <div>
        {videosList.length > 0 ? (
          <UlCon>
            {videosList.map(each => (
              <VideoItem videoItem={each} key={each.id} />
            ))}
          </UlCon>
        ) : (
          <EmptyList />
        )}
      </div>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccess()
      case apiConstants.failure:
        return <Failure />
      case apiConstants.inProgress:
        return <Loading />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideosContainer isDark={isDark}>
              <SearchContainer isDark={isDark}>
                <InPutBar
                  isDark={isDark}
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                />
                <button
                  type="button"
                  onClick={this.onSearchInput}
                  data-testid="searchButton"
                >
                  <BiSearch className="search-icon" />
                </button>
              </SearchContainer>

              {this.renderVideos()}
            </VideosContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Videos

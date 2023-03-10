import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import LeftNav from '../LeftNavbar'

import Failure from '../Failure'
import Loading from '../Loading'
import EmptyList from '../ListEmptyView'
import GameItem from '../GameItem'

import NxtContext from '../../context/NxtContext'

import {UlContainer, Game, Circle, GamingHead} from './styledComponents'
import {RowContainer, BodyContainer} from '../Home/styleComponents'
import {TrendingBody, TrendingContainer} from '../Trending/styleComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamesList: [], apiStatus: apiConstants.inProgress}

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`

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

      const updateVideos = await data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbNailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      // console.log(updateVideos)
      this.setState(
        {gamesList: updateVideos, apiStatus: apiConstants.success},
        this.getVideos,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderGame = () => {
    const {gamesList} = this.state

    return (
      <div>
        {gamesList.length > 0 ? (
          <UlContainer>
            {gamesList.map(each => (
              <GameItem videoItem={each} key={each.id} />
            ))}
          </UlContainer>
        ) : (
          <EmptyList />
        )}
      </div>
    )
  }

  renderGames = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderGame()
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
            <TrendingContainer isDark={isDark} data-testid="trending">
              <Header />
              <RowContainer>
                <LeftNav />
                <BodyContainer>
                  <Game isDark={isDark}>
                    <Circle>
                      <SiYoutubegaming />
                    </Circle>
                    <GamingHead isDark={isDark}>Gaming</GamingHead>
                  </Game>
                  <TrendingBody isDark={isDark} className="body">
                    {this.renderGames()}
                  </TrendingBody>
                </BodyContainer>
              </RowContainer>
            </TrendingContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming

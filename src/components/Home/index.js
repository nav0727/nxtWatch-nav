import {Component} from 'react'

import {GrClose} from 'react-icons/gr'

import Header from '../Header'
import LeftNav from '../LeftNavbar'

import Videos from '../Video'
import {ButtonBg} from '../Header/styleComponents'
import {
  HomeContainer,
  RowContainer,
  BodyContainer,
  HomeWallPaper,
  RowJust,
  Button,
  NxtImg,
} from './styleComponents'

class Home extends Component {
  state = {hide: false, isDark: false}

  closeBtn = () => {
    this.setState({hide: true})
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {hide, isDark} = this.state
    console.log(isDark)
    return (
      <HomeContainer>
        <Header toggleTheme={this.toggleTheme} />
        <RowContainer>
          <div>
            <LeftNav />
          </div>

          <BodyContainer>
            <HomeWallPaper hide={hide}>
              <>
                <RowJust>
                  <NxtImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch"
                  />
                  <ButtonBg type="button" onClick={this.closeBtn}>
                    <GrClose />
                  </ButtonBg>
                </RowJust>
              </>
              <p>Buy Nxt watch Premium prepaid plans with UPI</p>
              <Button type="button">GET IT NOW</Button>
            </HomeWallPaper>

            <Videos />
          </BodyContainer>
        </RowContainer>
      </HomeContainer>
    )
  }
}

export default Home

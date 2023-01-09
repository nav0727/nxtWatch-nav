import {Component} from 'react'
import Header from '../Header'
import LeftNav from '../LeftNavbar'
import {
  BodyContainer,
  RowContainer,
  HomeContainer,
} from '../Home/styleComponents'
import NxtContext from '../../context/NxtContext'
import {NotFoundContainer, NotImg, HeadingNot} from './styleComponents'
import {Paragraph} from '../LeftNavbar/styleComponents'

class NotFound extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer>
              <Header toggleTheme={this.toggleTheme} />
              <RowContainer>
                <div>
                  <LeftNav />
                </div>

                <BodyContainer isDark={isDark}>
                  <NotFoundContainer isDark={isDark}>
                    <NotImg
                      src={
                        isDark
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      }
                      alt="not found"
                    />

                    <HeadingNot isDark={isDark}>Page Not Found</HeadingNot>
                    <Paragraph isDark={isDark}>
                      We are sorry, the page you requested could not be found.
                    </Paragraph>
                  </NotFoundContainer>
                </BodyContainer>
              </RowContainer>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NotFound

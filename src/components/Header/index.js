import {withRouter, Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {TiWeatherSunny} from 'react-icons/ti'
import Cookies from 'js-cookie'

import NxtContext from '../../context/NxtContext'

import {
  HeadContainer,
  HeaderItemsContainer,
  ButtonBg,
  Logout,
  NxtWatch,
  Profile,
} from './styleComponents'

const Header = props => {
  const onLogout = () => {
    const {history} = props

    const JWTToken = Cookies.remove('jwt_token')
    console.log(JWTToken)
    if (JWTToken !== undefined) {
      return history.replace('/')
    }
    return history.replace('/')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value

        const changeTheme = () => {
          toggleTheme()
        }

        return (
          <HeadContainer isDark={isDark} data-testid="banner">
            <Link to="/" style={{textDecoration: 'none'}}>
              <NxtWatch
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="nxt watch"
              />
            </Link>

            <HeaderItemsContainer>
              <ButtonBg
                type="button"
                isDark={isDark}
                onClick={changeTheme}
                data-testid="theme"
              >
                {isDark ? <FaMoon /> : <TiWeatherSunny />}
              </ButtonBg>

              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Logout type="button" onClick={onLogout}>
                Logout
              </Logout>
            </HeaderItemsContainer>
          </HeadContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)

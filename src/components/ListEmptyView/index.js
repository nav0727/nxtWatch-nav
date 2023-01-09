import {EmptyImage, EmptyListContainer} from './styleComponents'
import {Paragraph} from '../LeftNavbar/styleComponents'
import {HeadingNot} from '../NotFound/styleComponents'
import NxtContext from '../../context/NxtContext'

const EmptyList = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <EmptyListContainer className="empty-list-container">
          <EmptyImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="empty-image"
          />

          <HeadingNot isDark={isDark}>No Search results found</HeadingNot>
          <Paragraph isDark={isDark}>
            Try different key words or remove search filter
          </Paragraph>
          <button type="button">Retry</button>
        </EmptyListContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default EmptyList

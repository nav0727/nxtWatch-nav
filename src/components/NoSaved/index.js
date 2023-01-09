import {NoSaveImg, NoSaveContainer} from './styledComponents'
import {Paragraph} from '../LeftNavbar/styleComponents'

const NoSaved = () => (
  <NoSaveContainer>
    <NoSaveImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      alt="no saved videos"
    />
    <h1>No saved videos found</h1>
    <Paragraph>You can save your videos while watching them</Paragraph>
  </NoSaveContainer>
)
export default NoSaved

import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'

import {Paragraph} from '../VideoItem/styleComponents'
import {GameListItem, GameImage} from './styleComponents'

const GameItem = props => {
  const {videoItem} = props
  const {id, title, thumbNailUrl, viewCount} = videoItem
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GameListItem isDark={isDark}>
              <div>
                <GameImage
                  src={thumbNailUrl}
                  alt="thumbnail url"
                  className="thumb-img"
                />
                <Paragraph isDark={isDark}>{title}</Paragraph>
                <Paragraph isDark={isDark}>{viewCount} views</Paragraph>
              </div>
            </GameListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GameItem

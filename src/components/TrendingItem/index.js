import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'
import {Paragraph} from '../LeftNavbar/styleComponents'
import {Thumb, List, TrendItem} from './styleComponents'

const TrendingItem = props => {
  const {trendingItem} = props
  const {id, title, thumbNailUrl, viewCount} = trendingItem

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <List>
              <TrendItem>
                <Thumb src={thumbNailUrl} alt="thumbnail url" />

                <div>
                  <Paragraph isDark={isDark}>{title}</Paragraph>
                  <Paragraph isDark={isDark}>{viewCount} views</Paragraph>
                </div>
              </TrendItem>
            </List>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default TrendingItem

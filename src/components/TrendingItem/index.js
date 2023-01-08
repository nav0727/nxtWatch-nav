import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'
import {Paragraph} from '../LeftNavbar/styleComponents'

const TrendingItem = props => {
  const {trendingItem} = props
  const {id, title, thumbNailUrl, viewCount} = trendingItem

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <li className="list">
              <div className="trend-item">
                <img src={thumbNailUrl} alt="thumbnail url" className="thumb" />

                <div>
                  <Paragraph isDark={isDark}>{title}</Paragraph>
                  <Paragraph isDark={isDark}>{viewCount} views</Paragraph>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default TrendingItem

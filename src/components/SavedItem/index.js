import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {RowContainer} from '../Home/styleComponents'
import {Paragraph} from '../VideoItem/styleComponents'
import {Thumb, List} from '../TrendingItem/styleComponents'
import NxtContext from '../../context/NxtContext'

const SavedItem = props => {
  const {saveItem} = props
  const {id, title, thumbnailUrl, viewCount, publishedAt} = saveItem

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <List>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Thumb src={thumbnailUrl} alt="Thumb" />
              <Paragraph isDark={isDark}>{title}</Paragraph>
              <RowContainer>
                <Paragraph isDark={isDark}>{viewCount} Views</Paragraph>
                <Paragraph isDark={isDark}>
                  {formatDistanceToNow(new Date(publishedAt))}
                </Paragraph>
              </RowContainer>
            </Link>
          </List>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedItem

import {Component} from 'react'

// import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import NxtContext from '../../context/NxtContext'
import {
  RowOrder,
  RowC,
  CriLogo,
  ColDir,
  VideoItemCon,
  LikedOrNot,
  DisLiked,
  IsSavedNot,
} from './styleComponents'
import {ButtonBg} from '../Header/styleComponents'
import {RowJust} from '../Home/styleComponents'

class VideosPlayItem extends Component {
  state = {isLiked: false, isDisliked: false, isSaved: false}

  onLiked = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onDisLiked = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  onSave = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  onRemove = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  render() {
    const {videoItem} = this.props
    const {isLiked, isDisliked} = this.state

    const {
      title,
      id,
      videoUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoItem

    return (
      <NxtContext.Consumer>
        {value => {
          const {removeSaveItem, addSavedItem, savedList} = value
          const isSaved = savedList.some(each => each.id === videoItem.id)

          const onSave = () => {
            addSavedItem(videoItem)
          }
          const onRemove = () => {
            removeSaveItem(id)
          }

          /* const publish = () => {
            const published = formatDistanceToNow(new Date(publishedAt))
            return published
          } */

          return (
            <VideoItemCon>
              <ReactPlayer
                url={videoUrl}
                controls="controls"
                width="100%"
                loop="true"
                autoplay="autoplay"
                muted
                type="video/mp4"
              />
              <p>{title}</p>
              <RowOrder id={id}>
                <RowJust>
                  <p>{viewCount} views </p>
                  <p> published on {publishedAt} </p>
                </RowJust>
                <RowC>
                  <RowC>
                    <ButtonBg
                      type="button"
                      onClick={this.onLiked}
                      value={isLiked}
                    >
                      <LikedOrNot isLiked={isLiked}>
                        <AiOutlineLike />
                      </LikedOrNot>
                    </ButtonBg>
                    <LikedOrNot isLiked={isLiked} onClick={this.onLiked}>
                      Like
                    </LikedOrNot>
                  </RowC>
                  <RowC>
                    <ButtonBg
                      type="button"
                      className="btn-icon"
                      onClick={this.onDisLiked}
                      value={isDisliked}
                    >
                      <DisLiked isDisliked={isDisliked}>
                        <AiOutlineDislike />
                      </DisLiked>
                    </ButtonBg>

                    <DisLiked isDisliked={isDisliked} onClick={this.onDisLiked}>
                      Dislike
                    </DisLiked>
                  </RowC>
                  <RowC>
                    <ButtonBg
                      type="button"
                      className="btn-icon"
                      onClick={isSaved ? onRemove : onSave}
                    >
                      <IsSavedNot isSaved={isSaved}>
                        <BiListPlus />
                      </IsSavedNot>
                    </ButtonBg>
                    <IsSavedNot isSaved={isSaved}>
                      {isSaved ? 'Saved' : 'Save'}
                    </IsSavedNot>
                  </RowC>
                </RowC>
              </RowOrder>
              <hr />
              <RowC>
                <CriLogo src={profileImageUrl} alt="profile" />
                <ColDir>
                  <div>
                    <p>{name}</p>
                    <p>{subscriberCount} subscribers</p>
                  </div>

                  <p>{description}</p>
                </ColDir>
              </RowC>
            </VideoItemCon>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}
export default VideosPlayItem

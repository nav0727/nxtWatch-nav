import Header from '../Header'
import LeftNav from '../LeftNavbar'

import {SavedCon} from './styleComponents'
import NxtContext from '../../context/NxtContext'
import {RowContainer} from '../Home/styleComponents'
import {LeftNavContainer} from '../LeftNavbar/styleComponents'
import SavedItem from '../SavedItem'
import NoSaved from '../NoSaved'

const SavedVideos = () => {
  const renderSavedItems = savedList => (
    <div>
      {savedList.length === 0 ? (
        <NoSaved />
      ) : (
        <>
          <h1>Saved Videos</h1>
          {savedList.map(each => (
            <SavedItem key={each.id} saveItem={each} />
          ))}
        </>
      )}
    </div>
  )
  return (
    <NxtContext.Consumer>
      {value => {
        const {savedList, isDark} = value

        return (
          <div data-testid="savedVideos">
            <Header />
            <RowContainer>
              <LeftNavContainer>
                <LeftNav />
              </LeftNavContainer>

              <SavedCon isDark={isDark}>{renderSavedItems(savedList)}</SavedCon>
            </RowContainer>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedVideos

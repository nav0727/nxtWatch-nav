import Header from '../Header'
import LeftNav from '../LeftNavbar'

import NoSaved from '../NoSaved'

import {SavedCon} from './styleComponents'
import NxtContext from '../../context/NxtContext'
import TrendingItem from '../TrendingItem'

const SavedVideos = () => {
  const renderSavedItems = savedList => (
    <div>
      {savedList.length === 0 ? (
        <NoSaved />
      ) : (
        <>
          <h1>Saved Videos</h1>
          {savedList.map(each => (
            <TrendingItem key={each.id} trendingItem={each} />
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
          <div>
            <Header />
            <div className="row">
              <div className="left">
                <LeftNav />
              </div>
              <SavedCon isDark={isDark}>{renderSavedItems(savedList)}</SavedCon>
            </div>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedVideos

import NxtContext from '../../context/NxtContext'
import {FailureContainer} from './styleComponents'

const Failure = () => (
  <NxtContext>
    {value => {
      const {isDark} = value

      return (
        <FailureContainer isDark={isDark}>
          {isDark ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure"
              className="failure-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure"
              className="failure-image"
            />
          )}
          <h1>Oops! Something Went Wrong</h1>
          <p>
            We are having some trouble to complete your request. Please try
            again.
          </p>
          <button type="button">Retry</button>
        </FailureContainer>
      )
    }}
  </NxtContext>
)

export default Failure
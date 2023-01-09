import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styleComponents'

const Loading = () => (
  <LoaderContainer className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#fa2" height="50" width="50" />
  </LoaderContainer>
)

export default Loading

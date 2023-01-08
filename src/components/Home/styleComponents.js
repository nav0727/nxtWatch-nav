import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};

  background-color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const BodyContainer = styled.div` 
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  background-color: #020202;
  color: #fff;
::-webkit-scrollbar
  display: none;
`
export const HomeWallPaper = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  color: #cbd5e1;
  padding-bottom: 10px;
  padding-left: 20px;
  background-size: cover;
  display: ${props => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`

export const RowJust = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 100px;
  padding: 5px;
`

export const NxtImg = styled.img`
  height: 30px;
`
/*
.close {
  border: none;
  background: transparent;
}
.close:hover {
  background-color: #ff0b37;
  padding: 10px;
}
*/

import styled from 'styled-components'

export const HeadContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`
export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonBg = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  font-size: 25px;
`
export const Logout = styled.button`
  margin-right: 3vw;
`

export const NxtWatch = styled.img`
  height: 20px;
  margin-left: 3vw;
  margin-top: 1vh;
`
export const Profile = styled.img`
  height: 30px;
  margin-right: 1vw;
`

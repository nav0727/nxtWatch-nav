import styled from 'styled-components'

export const GamingHead = styled.h1`
  color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  font-size: 20px;
  font-family: 'Roboto';
`
export const Game = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5vw;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
`

export const GamingBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 90vh;
  flex-direction: column;
  
  }
`
export const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const IconContainer = styled.div`
  color: #ff0000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #231f20;
  height: 40px;
  width: 40px;
  margin-right: 1vw;
  border-radius: 20px;
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
  background-color: #020202;
  color: #fff;
`

export const ColumDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`

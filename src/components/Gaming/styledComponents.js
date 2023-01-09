import styled from 'styled-components'

export const GamingHead = styled.h1`
  color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  font-size: 23px;
  font-weight: bold;
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
  flex-wrap: wrap;
  overflow-y:scroll;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  
  }
`
export const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 79vh;
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
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.isDark ? '#181818' : '#323232')};
  height: 100vh;
  width: 100vw;
`

export const ColumDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`
export const Circle = styled.div`
  height: 50px;
  width: 50px;
  color: #ff0000;
  display: flex;
  margin-right: 1vw;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  justify-content: center;
  background-color: #323232;
  border-radius: 30px;
`

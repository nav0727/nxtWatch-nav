import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 90vh;
  flex-direction: column;
  
  }
`
export const FailureImage = styled.img`
  height: 200px;
  width: 250px;
`

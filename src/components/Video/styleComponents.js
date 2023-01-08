import styled from 'styled-components'

export const VideosContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
  color: ${props => (props.isDark ? '#020202' : '#f4f4f4')};

  @media screen and (min-width: 5677px) {
    font-size: 12px;
  }
`
export const InPutBar = styled.input`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  height: 15px;
  font-weight: bold;
  outline: none;
  border: none;
  width: 90%;
`

export const UlCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const SearchContainer = styled.div`
  border: 1px solid ${props => (props.isDark ? '#000000' : '#f0f0f0')};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 10px;
`

export const Input = styled.input``

/*
.search-icon {
  color: #020202;
  font-size: 20px;
}

*/

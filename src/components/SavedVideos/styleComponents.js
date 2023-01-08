/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const SavedCon = styled.div`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#f4f4f4')};

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 90vh;

  @media screen and (min-width: 5677px) {
    font-size: 12px;
  }
`

/*  .body-con {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  height: 90vh;

  flex-direction: column;
  background-color: #020202;
  color: #fff;
}
.body-con::-webkit-scrollbar {
  display: none;
}
.head-container::-webkit-scrollbar {
  display: none;
}
.row {
  display: flex;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  background-color: #fff;
  flex-wrap: wrap;
}
.left::-webkit-scrollbar {
  display: none;
}
*/

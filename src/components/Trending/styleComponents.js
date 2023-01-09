/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.isDark ? '#020202' : '#cccccc')};

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  font-size: 16px;
  @media screen and (max-width: 5677px) {
    font-size: 12px;
  }
`
export const TrendingBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;

  width: 100%;
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 87vh;
  flex-direction: column;
`
/*

.trend {
  display: flex;
  flex-direction: column;
}
.tre {
  width: 100%;
}
*/

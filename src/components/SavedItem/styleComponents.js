/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#bfbfbf' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  font-size: 16px;
  @media screen and (max-width: 5677px) {
    font-size: 12px;
  }
`

export const TrendItem = styled.div`
  display: flex;
  justify-content: space-around;
`
export const List = styled.li`
  display: flex;
  margin: 20px;
`

export const Thumb = styled.img`
  height: 150px;
  width: 250px;
  margin-right: 15px;
`

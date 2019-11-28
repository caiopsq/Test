import React from 'react'
import styled from 'styled-components'
import { STYLE } from '@/styles.js'

const Title = ({ className, img, text }) => (
  <div className={className}>
    {img && <img src={img} />}
    {text && <span>{text}</span>}
  </div>
)

const StyledTitle = styled(Title)`
  width: 400px;
  img {
    width: 100%;
  }
  span {
    width: 100%;
    display: block;
    height: 2em;
    margin: 10px 0 5px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    font-family: ${STYLE.fontFamily}, sans-serif;
  }
  text-align: center;
  margin: 20px 0 10px;

  @media (max-width: 480px) {
    width: 200px;
    margin: 20px auto 10px;
  }
`


export default StyledTitle

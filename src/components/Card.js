import React from 'react'
import styled from 'styled-components'


export default function Card({photo, alt, title, contenu}) {
  return (
    <Main>
      <div>
        <img src={photo} alt={alt}></img>
      </div>
      <div>
        <h2>Hi, i'm {title}</h2>
        <p>
          {contenu}
        </p>
      </div>
    </Main>
  )
}

const Main = styled.main`
display: flex;
gap: 3rem;
font-size: 1.5rem;
padding-left: 5rem;
padding-right: 5rem;

img {
  width: 40rem;
  height: auto;
  margin-top: 2.5rem;
}

h2 {
  margin-top: 15rem;
}

p {
  padding-bottom: 2rem;
}
`
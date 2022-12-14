import { useState } from "react"
import { Link } from "react-router-dom"
import catalogue from './Catalogue.json'
import styled from "styled-components"

const InStock = () => {

  const [items] = useState(catalogue)


  return (
    <Container>
      <Heading> Happy shopping</Heading>
      {
        items.Catalogue.map(({id, name, image, price, description}) => {
          return(
            <Cards key={id}>
              <div>
                <img src={image} alt="" />
              </div>
              <Details>
                <h1>{name}   ||   ${price}</h1>
                <p>{`${description.substring( 0, 200 )}...`}</p>
                <a href="/">More Details</a>
              </Details>

            </Cards>
          )
        })
      }
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Jura', sans-serif;

`
const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: whitesmoke;
`
const Cards = styled.div`
  display: flex;
  width: 70vw;
  height: 50vh;
  margin-bottom: 2rem;
  background-color: whitesmoke;
`
const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;

  h1{
    color: red;
    font-size: 2rem;
  }

  p{
    color: black;
    font-weight: 900;
  }

  a{
    font-size: 1.5rem;
    font-weight: 900;
    border: 2px solid red;
    padding: 1rem;
    text-decoration: none;
  }
`

export default InStock
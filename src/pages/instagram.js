import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Title = styled.h1`
  display: inline-block;
`

export default () => {
    return (
      <Layout>
        <div>
          <Title>Instagram Page</Title>
        </div>
      </Layout>
    )
  }
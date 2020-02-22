import React from 'react'
import { Footer, Divider, TechStacks, CopyRight } from './styled'

export default () => (
  <Footer>
    <TechStacks>Powered by React, Next.js, Apollo and GraphQL.</TechStacks>
    <Divider />
    <CopyRight>
      Copyright &copy; {new Date().getFullYear()} Yancey Inc. and its
      affiliates.
    </CopyRight>
  </Footer>
)

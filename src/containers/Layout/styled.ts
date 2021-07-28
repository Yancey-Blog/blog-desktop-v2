import styled from 'styled-components'
import breakpoints from 'src/styled/breakpoints'

export const Layouts = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
  overflow-x: hidden;

  @media only screen and ${breakpoints.device.laptop} {
    margin-top: 4.5rem;
  }
`

import styled from 'styled-components'
import breakpoints from 'src/styled/breakpoints'

export const Title = styled.div`
  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }
`

export const MusicWrapper = styled.section`
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and ${breakpoints.device.laptop} {
    padding: 0 1rem;
  }
`

export const SubTitle = styled.h2`
  padding: 2rem 0;
  font-size: 1.4rem;
  font-weight: 400;
`

export const LiveToursMusicNotes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;

  @media only screen and ${breakpoints.device.laptop} {
    display: block;
  }
`

export const MusicNotes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media only screen and ${breakpoints.device.laptop} {
    display: block;
  }
`

export const BestAlbumWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;

  @media only screen and ${breakpoints.device.laptop} {
    display: block;
  }
`

export const YanceyMusicWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media only screen and ${breakpoints.device.laptop} {
    display: block;
  }
`

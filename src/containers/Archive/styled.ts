import styled from 'styled-components'

export const ArchiveWrapper = styled.section`
  margin: 0 auto;
  width: 40rem;

  label {
    cursor: s-resize;
  }

  input {
    position: absolute;
    opacity: 0;
    z-index: ${({ theme }) => theme.zIndex.negative};
  }

  input:checked ~ .dayListContainer {
    max-height: 20rem;
    will-change: transform;
    transition: all 500ms linear;
  }
`

export const Year = styled.h2`
  margin-left: 5rem;
  font-size: 1.8rem;
`

export const YearList = styled.ul`
  position: relative;
  padding: 1rem 0;
  list-style: none;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 7rem;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.archiveBlue};
    z-index: ${({ theme }) => theme.zIndex.negative};
  }
`
export const Month = styled.span`
  display: block;
  position: relative;
  line-height: 2.4;
  color: ${({ theme }) => theme.text.header};

  &::after {
    position: absolute;
    content: '';
    top: 0.2rem;
    left: 6.5rem;
    width: 1.4rem;
    height: 1.4rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    z-index: ${({ theme }) => theme.zIndex.root};
  }

  &::before {
    position: absolute;
    content: '';
    top: 0.4rem;
    left: 6.7rem;
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.archiveBlue};
    border-radius: 50%;
    z-index: ${({ theme }) => theme.zIndex.positive};
  }
`

export const MonthTxt = styled.span`
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  top: -0.55rem;
  right: 2.5rem;
`

export const DayList = styled.ul`
  padding-left: 8.2rem;
  max-height: 0;
  will-change: transform;
  transition: all 1s linear;
`

export const DayItem = styled.li`
  position: relative;
  line-height: 2.4;
  white-space: nowrap;

  &::after {
    position: absolute;
    content: '';
    top: 0.65rem;
    left: -1.55rem;
    width: 1.1rem;
    height: 1.1rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    z-index: ${({ theme }) => theme.zIndex.negative};
  }

  &::before {
    position: absolute;
    content: '';
    left: -1.35rem;
    top: 0.85rem;
    width: 0.7rem;
    height: 0.7rem;
    background: ${({ theme }) => theme.colors.archiveBlue};
    border-radius: 50%;
    z-index: ${({ theme }) => theme.zIndex.positive};
  }

  a {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text.header};
    transition: all 200ms linear;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
      transition: all 200ms linear;
    }
  }
`

export const Day = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  width: 1.4rem;
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.archiveBlue};
`

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
    z-index: -1;
  }

  input:checked ~ .day_list_container {
    max-height: 20rem;
    will-change: transform;
    transition: all 1s linear;
  }
`

export const Year = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 6.8rem;
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
    background: #6ecaf5;
    z-index: -1;
  }
`
export const Month = styled.span`
  position: relative;
  display: block;
  line-height: 2.4;

  &::after {
    position: absolute;
    content: '';
    top: 0.2rem;
    left: 6.5rem;
    width: 1.4rem;
    height: 1.4rem;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 1px 1px 1px #bbb;
    z-index: 0;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0.4rem;
    left: 6.7rem;
    width: 1rem;
    height: 1rem;
    background: #00bbff;
    border-radius: 50%;
    z-index: 1;
  }
`

export const DayList = styled.ul`
  padding-left: 8.2rem;
  max-height: 0;
  will-change: transform;
  overflow: hidden;
  transition: all 1s linear;
`

export const DayItem = styled.li`
  position: relative;
  line-height: 2.4;

  &::after {
    position: absolute;
    content: '';
    top: 0.65rem;
    left: -1.55rem;
    width: 1.1rem;
    height: 1.1rem;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 1px 1px 1px #bbb;
    z-index: 0;
  }

  &::before {
    position: absolute;
    content: '';
    left: -1.35rem;
    top: 0.85rem;
    width: 0.7rem;
    height: 0.7rem;
    background: #00bbff;
    border-radius: 50%;
    z-index: 1;
  }

  .day {
    color: #00bbff;
    display: inline-block;
    width: 1.2rem;
    margin-right: 0.5rem;
  }

  a {
    font-size: 1rem;
    transition: all 200ms linear;

    &:hover {
      /* color: $orange; */
      transition: all 200ms linear;
    }
  }
`

export const Day = styled.span`
  color: #00bbff;
  display: inline-block;
  width: 1.2rem;
  margin-right: 0.5rem;
`

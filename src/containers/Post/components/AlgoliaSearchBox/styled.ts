import styled from 'styled-components'

export const Result = styled.div`
  position: fixed;
  top: 4.5rem;
  right: 0;
  width: 29.2rem;
  height: calc(100vh - 4.5rem);
  background: #fff;
  box-shadow: 0 0.13333rem 4.2rem 0 rgba(#000, 0.15);
  z-index: 201;
  overflow-y: scroll;
  transform: translateX(30rem);
  transition: transform 250ms ease;

  &.showSearchResultDrawer {
    transform: translateX(0);
    transition: transform 250ms ease;
  }

  .ais-Hits-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .ais-Highlight {
    margin-right: 4px;
    line-height: 1.8;
  }

  .ais-Snippet-nonHighlighted {
    line-height: 1.8;
  }

  .ais-Highlight-highlighted,
  .ais-Snippet-highlighted {
    border-bottom: 1px solid #5468ff;
    line-height: 1.8;
    font-style: normal;
    padding-bottom: 2px;
  }

  .ais-Hits-item {
    padding: 1.6rem 2.1rem;
    background-color: rgb(255, 255, 255);
    transition: background-color 0.2s ease-out;
  }

  .ais-Hits-item:hover {
    background-color: rgb(245, 245, 250);
    transition: background-color 0.2s ease-out;
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: center;
    margin: 1.6rem 0;
  }

  .ais-PoweredBy-logo {
    display: block;
    height: 1.2em;
    width: auto;
    margin-left: 0.3rem;
  }

  .ais-PoweredBy-text {
    font-size: 0.8rem;
  }
`

export const HitName = styled.div`
  margin-right: 4px;
  color: #5468ff;
`

export const HitDescription = styled.div`
  word-break: break-all;
  color: #23263b;
`

export const HitTag = styled.div`
  font-size: 10px;
  background: rgba(119, 122, 175, 0.2);
  border-radius: 4px;
  color: rgb(90, 94, 154);
  line-height: 14px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  font-weight: 600;
  display: inline-block;
  margin-right: 4px;
`

export const HitContent = styled.div``

export const SearchBoxWrapper = styled.div`
  .ais-SearchBox {
    position: fixed;
    top: 13px;
    right: 12.4rem;
    z-index: 201;
  }

  .ais-SearchBox-input {
    padding: 0.8rem;
    padding-left: 1.8rem;
    width: 16.8rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text.primary};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.text.primary};
    border-radius: 0.3rem;
    outline: none;
  }

  .ais-SearchBox-submit {
    left: 0.3rem;
  }

  .ais-SearchBox-submitIcon {
    width: 14px;
    height: 14px;
  }

  .ais-SearchBox-input::-webkit-search-cancel-button,
  .ais-SearchBox-input::-webkit-search-decoration,
  .ais-SearchBox-input::-webkit-search-results-button,
  .ais-SearchBox-input::-webkit-search-results-decoration {
    display: none;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    padding: 0;
    overflow: visible;
    font: inherit;
    line-height: normal;
    color: inherit;
    background: none;
    border: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ais-SearchBox-loadingIndicator,
  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    z-index: 1;
    width: 20px;
    height: 20px;
    top: 50%;
    right: 0.3rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`

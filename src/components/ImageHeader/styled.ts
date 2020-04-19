import styled from 'styled-components'

export const Header = styled.figure`
  width: 100%;
  height: 32rem;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
`

export const Title = styled.span`
  display: block;
  padding-top: 22rem;
  font-family: 'Ubuntu', sans-serif;
  font-size: 4rem;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(33%, #c4987a),
    color-stop(73%, #ffd5bf)
  );
  background: -webkit-linear-gradient(right, #c4987a 33%, #ffd5bf 73%);
  background: linear-gradient(to left, #c4987a 33%, #ffd5bf 73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-font-smoothing: antialiased;
  user-select: none;
`

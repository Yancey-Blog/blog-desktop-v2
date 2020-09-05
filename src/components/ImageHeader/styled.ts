import styled from 'styled-components'

export const ImageHeaderWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 32rem;
  margin-bottom: 4rem;
  text-align: center;

  source,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Title = styled.span`
  position: absolute;
  right: 0;
  bottom: 3rem;
  left: 0;
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

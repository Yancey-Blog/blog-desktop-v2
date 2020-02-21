import styled from 'styled-components'
import { flexMixin } from '../../lib/mixins'

const Header = styled.header`
  ${flexMixin()}
  width: 100%;
  height: 65px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
`

export default Header

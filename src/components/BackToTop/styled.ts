import styled from 'styled-components'
import { transitionMixin, animationMixin } from 'src/styled/mixins'
import { float } from 'src/styled/animations'

export const Cat = styled.div`
  position: fixed;
  top: -60rem;
  right: 2rem;
  width: 4.67rem;
  height: 60rem;
  background: url('static/yancey-official-blog-cat-scroll.png') no-repeat 0 0;
  cursor: pointer;
  ${transitionMixin('all', 600, 'cubic-bezier(0.25, 0.1, 0.3, 1.5)')}
  ${animationMixin(float, 2000, 'linear', 'infinite')}

  &.showCat {
    top: -10rem;
  }
`

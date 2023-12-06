import styled, { css } from 'styled-components'

import * as S from './styles'

export type HomeProps = {
  name?: string
}

const W = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.pano};
  `}
`

const H = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.palanquine};
  `}
`

const ExampleHomeStory = ({ name = 'React Boilerlate' }: HomeProps) => (
  <S.Wrapper>
    <div>
      <H>{name}</H>
      <a
        href="https://github.com/melquisedecfelipe/react-vite"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/melquisedecfelipe/react-vite
      </a>
      <W> dfaddf</W>
    </div>
  </S.Wrapper>
)

export default ExampleHomeStory

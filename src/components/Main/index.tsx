import * as S from './styles'
const Main = ({
    title = 'React Avançado',
    description = "TypeScript, ReactJS, NextJS, Styled Components"
}) => (
    <S.Wrapper>
        <S.Logo src="/img/logo.svg" alt="Imagem de um Atómo e React Avançado escrito ao lado"/>
        <S.Title>{title} </S.Title>
        <S.Description>{description} </S.Description>
        <S.Ilustration src="/img/hero-illustration.svg" alt="Um desenvolvedor de frente com a tela com código"></S.Ilustration>
    </S.Wrapper>
)
export default Main
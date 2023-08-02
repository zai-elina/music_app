import * as S from './PersonData.styles'

export function PersonData({ name }) {
    return (
      <S.Personal>
        <S.PersonalName>{name}</S.PersonalName>
        <S.PersonalAvatar></S.PersonalAvatar>
      </S.Personal>
    )
  }
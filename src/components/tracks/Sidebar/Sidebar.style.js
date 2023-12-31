import styled from 'styled-components'

export const Sidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const PlaylistsBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: box;
  display: flexbox;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  flex-direction: column;
  box-pack: start;
  flex-pack: start;
  justify-content: flex-start;
`
export const PlaylistsItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
export const PlaylistsItemLink = styled.div`
  width: 100%;
  height: 100%;
`

export const PlaylistsItemImage = styled.img`
  width: 100%;
  height: auto;
`

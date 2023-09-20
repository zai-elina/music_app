import styled from 'styled-components'

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`
export const MenuLink = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  @media (max-width: 1896px) {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 800px) {
    display: block;
    position: relative;
    right:0;
  }
`

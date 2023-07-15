import styled, { css } from 'styled-components'
import { Button } from '../../../App.style'

const activeMixin = css`
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`

export const Filter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterWrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const FilterButton = styled(Button)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  ${(props) => (props.$active === 'active' ? activeMixin : '')}
`

export const FilterItems = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 28px;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(75, 73, 73, 1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }
`
export const FilterItem = styled.li`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    text-decoration: underline rgba(182, 114, 255, 1);
    color: rgba(182, 114, 255, 1);
    cursor: pointer;
  }
`

export const FilterSelector = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  top: 50px;
  left: 0;
  border-radius: 12px;
  padding: 34px;
  background-color: rgb(49, 49, 49);
`

export const FilterSelectorYear = styled.div`
  position: absolute;
  width: 403px;
  height: 92px;
  top: 50px;
  left: 0;
  border-radius: 12px;
  padding: 34px;
  background-color: rgb(49, 49, 49);
`
export const FilterRadioButtons = styled.div`
  display: flex;
  column-gap: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`
export const FilterRadioButton = styled.input`
  display: none;
  &:checked + label:before {
    background: rgba(255, 255, 255, 1);
  }
`
export const FilterRadioButtonLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  user-select: none;
  &:before {
    margin-top: 2px;
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    width: 18px;
    height: 18px;
    background: rgb(49, 49, 49);
    border: 1px solid rgba(255, 255, 255, 1);
    margin-right: 13px;
    border-radius: 20px;
  }
`

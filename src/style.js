import styled from "styled-components"

export const VersionTag = styled.div`
  position: absolute;
  color: ${props => (props.color ? props.color : "#444")};
  font-size: ${props => (props.size ? `${props.size}px` : "10px")};
  ${props => props.top && `top: ${props.top}px`};
  ${props => props.right && `right: ${props.right}px`};
  ${props => props.bottom && `bottom: ${props.bottom}px`};
  ${props => props.left && `left: ${props.left}px`};

  @media (max-width: 767px) {
    display: none;
  }
`

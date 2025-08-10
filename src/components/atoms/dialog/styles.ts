import { css, styled } from '@mui/material'

export const BackdropWrapper = styled('div')<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1300;

  ${({ open }) =>
    open
      ? css`
          transform: translateY(0);
          transition: transform 0.3s ease-out;
        `
      : css`
          transform: translateY(-100%);
          transition: transform 0.3s ease-in;
        `}
`

export const ModalContent = styled('div')`
  min-width: 300px;
  z-index: 1;
`

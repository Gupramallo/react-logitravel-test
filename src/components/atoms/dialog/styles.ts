import { css, styled } from '@mui/material'

export const BackdropWrapper = styled('div')<{ open?: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

/* eslint-disable react/jsx-key */
import React from "react"
import { createIcon } from "@chakra-ui/react"

const [w, h] = [32, 32]
export const CreateAccountIcon = createIcon({
  displayName: "Create Account Icon",
  viewBox: `0 0 ${w} ${h}`,
  defaultProps: {
    width: `${w}px`,
    height: `${h}px`,
    fill: "currentColor",
  },
  path: [
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0411 3.95887L7.95888 3.95887L7.95888 28.0411L24.0411 28.0411L24.0411 3.95887ZM25.375 3.95875C25.375 3.22214 24.7779 2.625 24.0413 2.625L7.95876 2.625C7.22215 2.625 6.62501 3.22214 6.62501 3.95875L6.62501 28.0412C6.62501 28.7779 7.22215 29.375 7.95876 29.375L24.0412 29.375C24.7779 29.375 25.375 28.7779 25.375 28.0412L25.375 3.95875Z"
    />,
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0831 26C13.0831 25.6317 13.3817 25.3331 13.75 25.3331H18C18.3683 25.3331 18.6669 25.6317 18.6669 26C18.6669 26.3683 18.3683 26.6669 18 26.6669H13.75C13.3817 26.6669 13.0831 26.3683 13.0831 26Z"
    />,
    <path d="M17 6.375C17 6.92728 16.5523 7.375 16 7.375C15.4477 7.375 15 6.92728 15 6.375C15 5.82272 15.4477 5.375 16 5.375C16.5523 5.375 17 5.82272 17 6.375Z" />,
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 21.625C19.1066 21.625 21.625 19.1066 21.625 16C21.625 12.8934 19.1066 10.375 16 10.375C12.8934 10.375 10.375 12.8934 10.375 16C10.375 19.1066 12.8934 21.625 16 21.625ZM15.9389 11.8778L18.5143 15.7361L15.9389 17.2738L13.3635 15.7361L15.9389 11.8778ZM16 20.1222L18.6367 16.3204L16 17.9517L13.3633 16.3204L16 20.1222Z"
    />,
  ],
})

import React from 'react'
import MainNavbar from "./MainNavbar";

export default function Header() {
  return (
    <>
      <MainNavbar stickyTop={true} />
      <input type="hidden" id="anchor" />
    </>
  )
}

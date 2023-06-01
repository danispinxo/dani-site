import * as React from 'react'
import TopNavbar from './src/components/Navbar'

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (<>
    <TopNavbar />
    {element}
  </>)
}

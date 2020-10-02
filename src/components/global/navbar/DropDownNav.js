import React from 'react'
import {Link} from "react-router-dom"
const DropDownNav = () => {
  return (
    <div className="font-sans font-thin text-black float-right mr-8">
      <Link>About</Link> <Link>Gallery</Link> <Link>Programming</Link> <Link>Residency in Joy</Link> <Link>Donate</Link>
    </div>
  )
}

export default DropDownNav

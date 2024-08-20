import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
            <Link to='/' >Homepage</Link>
        </li>
     </ul> 
        <li>
            <Link to='/pricing' >pricing</Link>
        </li>
        <li>
            <Link to='/product' >product</Link>
        </li>
    </nav>
  )
}

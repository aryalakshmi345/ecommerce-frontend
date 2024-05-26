import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function UserMenu() {
  return (
    <div>
        <h4 className='text-center mt-4 mb-3'>Dashboard</h4>
    <ListGroup as="ul">
  <ListGroup.Item>
        <NavLink style={{textDecoration:'none',color:'black'}} to={'/dashboard/user/profile'} as="li" active>
          Profile
        </NavLink>
  </ListGroup.Item>
  <ListGroup.Item>
        <NavLink style={{textDecoration:'none',color:'black'}} to="/dashboard/user/orders" as="li">
          Orders
        </NavLink>
  </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default UserMenu
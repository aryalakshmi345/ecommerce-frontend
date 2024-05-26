import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function AdminMenu() {
  return (
    <div>
        <h4 className='text-center mt-4 mb-3'>Admin Panel</h4>
    <ListGroup as="ul">
  <ListGroup.Item>
        <NavLink style={{textDecoration:'none',color:'black'}} to="/admin/create-category" as="li" active>
          Create Category
        </NavLink>
  </ListGroup.Item>
  <ListGroup.Item>
        <NavLink style={{textDecoration:'none',color:'black'}} to="/admin/create-product" as="li">
          Create Product
        </NavLink>
  </ListGroup.Item>
   <ListGroup.Item>
        <NavLink style={{textDecoration:'none',color:'black'}} to="/admin/users" as="li" disabled>
          Users
        </NavLink>
  </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default AdminMenu
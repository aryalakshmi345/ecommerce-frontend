import React from 'react'
import Layout from '../../components/Layout'
import UserMenu from './UserMenu'
import { useAuth } from '../../context/auth'

function Dashboard() {
    const [auth] = useAuth()
  return (
    <Layout title={'Dashboard- Ecommerce App'}>
              <div className="container-fluid p-3 m-3">
        <div className="row">
            <div className="col-md-3">
                <UserMenu/>
            </div>
            <div className="col-md-3">
                <div className="card w-75 p-3">
                  Hi {auth.user.name}
                </div>
            </div>
        </div>
        </div>  
    </Layout>
  )
}

export default Dashboard
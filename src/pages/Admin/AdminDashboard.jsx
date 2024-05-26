import React from 'react'
import Layout from '../../components/Layout'
import AdminMenu from './AdminMenu'

function AdminDashboard() {
  return (
    <Layout>
        <div className='container-fluid p-5'>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard
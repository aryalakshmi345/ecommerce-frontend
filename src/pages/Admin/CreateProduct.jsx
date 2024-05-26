import React from 'react'
import AdminMenu from './AdminMenu'
import Layout from '../../components/Layout'

function CreateProduct() {
  return (
    <Layout title={'Dashboard - Create Category'}>
    <div className='container-fluid p-5'>
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9 p-3">
                    <h1>Create Product</h1>
            </div>
        </div>
    </div>
</Layout>
  )
}

export default CreateProduct
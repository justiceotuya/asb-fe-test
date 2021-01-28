import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'

export const Home = () => {
    return (
        <Layout>
            <p>This Page is under construction you can go to the <Link to="/divisions">Divisions Page</Link> </p>
        </Layout>
    )
}

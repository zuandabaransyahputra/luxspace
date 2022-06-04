import React from 'react'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import SiteMap from 'parts/SiteMap'
import PageErrorMessage from 'parts/PageErrorMessage'

const NotFound = () => {
    return (
        <>
            <Header />
            <PageErrorMessage />
            <SiteMap />
            <Footer />
        </>
    )
}

export default NotFound
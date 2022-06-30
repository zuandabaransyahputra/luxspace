import React from 'react'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import SiteMap from 'parts/SiteMap'
import PageErrorMessage from 'parts/PageErrorMessage'
import Document from 'parts/Document'

const NotFound = () => {
    return (
        <Document>
            <Header />
            <PageErrorMessage />
            <SiteMap />
            <Footer />
        </Document>
    )
}

export default NotFound
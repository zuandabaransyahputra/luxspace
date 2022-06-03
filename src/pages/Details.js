import React from 'react';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import SiteMap from 'parts/SiteMap';
import Breadcrumb from '../components/Breadcrumb';
import ProductDetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';

const Details = () => {
  return (
    <>
      <Header theme={'black'} />
      <Breadcrumb
        list={[
          {
            url: '/',
            name: 'Home',
          },
          {
            url: '/categories/12313',
            name: 'Office Room',
          },
          {
            url: '/categories/12313/products/948651',
            name: 'Details',
          },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <SiteMap />
      <Footer />
    </>
  );
};

export default Details;

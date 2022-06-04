import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import SiteMap from 'parts/SiteMap';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import ShippingDetails from 'parts/Cart/ShippingDetails';

const Cart = () => {
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
            url: '/cart',
            name: 'Shopping Cart',
          },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      {/* <ProductDetails />
      <Suggestion /> */}
      <SiteMap />
      <Footer />
    </>
  );
};

export default Cart;

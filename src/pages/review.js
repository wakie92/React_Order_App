import React from 'react';
import Layout from 'components/Layout/Layout'
import ReviewContainer from 'containers/ReviewContainer';
import Footer from 'components/UI/Footer/Footer';

const review = ({location}) => {
  return (
    <>
      <Layout>
        <ReviewContainer/>
      </Layout>
      <Footer/>
    </>
  )
}

export default review;
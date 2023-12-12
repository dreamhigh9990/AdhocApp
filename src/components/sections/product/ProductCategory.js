import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCategory.scss';

import Slider from 'react-slick';

import ProductCategoryItem from '../../UI/products/ProductCategoryItem';
import BucketsBox from '../../UI/products/BucketsBox';


export default function ProductCategory() {

    const settings_category = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
      };
return (
    <div className='menu-screen'>
        <div className='productCategorySection pt-4 pb-5'>
            <Slider {...settings_category}>
                <ProductCategoryItem imgSrc="images/product/buckets.png" categoryid="buckets-ordering" categoryName="Buckets"/>
                <ProductCategoryItem imgSrc="images/product/boxes.png" categoryid="boxes-ordering" categoryName="Boxes"/>
                <ProductCategoryItem imgSrc="images/product/menu.png" categoryid="menu-ordering" categoryName="Menu"/>
                <ProductCategoryItem imgSrc="images/product/wraps.png" categoryid="wraps-ordering" categoryName="Wraps"/>
                <ProductCategoryItem imgSrc="images/product/burgers.png" categoryid="burgers-ordering" categoryName="Burgers"/>
                <ProductCategoryItem imgSrc="images/product/chicken.png" categoryid="chicken-ordering" categoryName="Chicken pieces"/>
            </Slider>
        </div>

        <div className='productBucketBoxSectionTitle' id="buckets-ordering">Buckets</div>
        <div className='productBucketBoxSection row'>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/buckets.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/buckets.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/buckets.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
                
        </div>

        <div className='productBucketBoxSectionTitle' id="boxes-ordering">Boxes</div>
        <div className='productBucketBoxSection row'>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/boxes.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/boxes.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/boxes.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
                <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/boxes.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            
        </div>

        <div className='productBucketBoxSectionTitle' id="menu-ordering">Menu</div>
        <div className='productBucketBoxSection row'>
          
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/menu.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/menu.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            
            
        </div>

        <div className='productBucketBoxSectionTitle' id="wraps-ordering">Wraps</div>
        <div className='productBucketBoxSection row'>
            
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/wraps.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/wraps.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/wraps.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/wraps.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            
        </div>

        <div className='productBucketBoxSectionTitle' id="burgers-ordering">Burgers</div>
        <div className='productBucketBoxSection row'>
            
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/burgers.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
            
        </div>

        <div className='productBucketBoxSectionTitle' id="chicken-ordering">Chicken pieces</div>
        <div className='productBucketBoxSection row'>
            <div className='col-xl-4 col-md-6 col-sm-12'><BucketsBox imgSrc="images/product/chicken.png" title="American Bucket" description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price="62,00" unit="RON" /></div>
        </div>

    </div>
    )
}
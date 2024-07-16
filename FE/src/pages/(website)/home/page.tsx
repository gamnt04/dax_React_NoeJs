import Banner from './_component/Banner'
import Services from './_component/Services'
import BestDispensary from './_component/BestDispensary'
import Comment from './_component/Comment'
import FilterProduct from '@/components/FilterProduct'
import ListProduct2 from '@/components/ListProduct2'
import Order from './_component/Order'
import WhatMake from './_component/WhatMake'
import BlogShop from './_component/Blog/BlogShop'
import BlogUs from './_component/Blog/BlogUs'

const HomePage = () => {
    return (
        <>

 <Banner/>
  <Services/>
< BestDispensary />
  <Comment/>
  <div className="lg:w-[1200px] mx-auto sm:w-[95vw] mb:w-[342px] flex flex-col lg:py-24 mb:py-7">
    <strong
      className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.7px]">CHOOSE
      YOUR WEED</strong>
<FilterProduct/>
<ListProduct2/>
  </div>
<Order/>
<WhatMake/>
  <div className="lg:w-[1200px] mx-auto sm:w-[95vw] mb:w-[342px] flex flex-col lg:mt-[20.5px] lg:pt-24 mb:pt-[39px]">
    <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.8px]">RECENTLY ADDED</strong>
<FilterProduct/>
<ListProduct2/>
  </div>
  <BlogShop/>
  <BlogUs/>
        </>
    )
}

export default HomePage

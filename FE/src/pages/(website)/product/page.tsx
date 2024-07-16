import ListProduct from "@/components/ListProduct"
import DescriptionShop from "./_components/DescriptionShop"
import FilterShop from "./_components/Filter"
import HeaderShop from "./_components/HeaderShop"
import RenderProductShop from "@/components/RenderProductShop"
import Contentratest from "./_components/Contentratest"
import ProductBestSell from "./_components/ProductBestSell"
import ListPage from "./_components/ListPage"


const ShopPage = () => {


    return (
      <div className="pb-[199px]">
          <div className="w-full lg:py-10 py-4 border pb-[199px]">
        <div className="lg:container lg:mx-auto lg:w-[1315px] mb:w-full grid lg:grid-cols-[304px_978px] mb:grid-cols-[100%] *:w-full justify-between">
            <FilterShop/>
<div className="w-full flex flex-col mb:items-center lg:items-start">
      <div className="mb:w-[342px] lg:w-full flex justify-between items-center border-b lg:pb-6 mb:pb-4">
        <HeaderShop/>
      </div>

        <div className="lg:w-[864px] mb:w-[342px]  lg:pb-8 mb:pb-6 mb:mt-6">
        <DescriptionShop/>
        </div>
 <div className="bg-[#F2F6F4] w-full lg:rounded-2xl lg:pt-[25px] lg:pb-6 lg:px-8 pt-[22px] pb-4">
                    <strong className="lg:text-2xl mb:text-lg lg:tracking-[-0.5px] mb:mx-11 lg:mx-0 font-medium">Top Selling</strong>
                     <ProductBestSell/>

 </div>
                <RenderProductShop/>
                <Contentratest/>
                <RenderProductShop/>
                <ListPage/>
         
             
             
    
</div>
         </div>
         </div>
      </div>
    )
}

export default ShopPage

import { useProductQuery } from "@/common/hooks/useProductQuery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DesktopLeft from "./_components/DesktopLeft";
import DesktopRight from "./_components/DesktopRight";
import ListProduct1 from "@/components/ListProduct1";

const DetailProduct = () => {
      return (
        <div className="font-lexend">
             <main className="w-full *:lg:w-[1312px] *:w-[342px] *:mx-auto *:h-full lg:py-10 mb:py-6 lg:mt-0 mb:mt-0.5">
    <div className="lg:grid lg:grid-cols-[573px_640px] justify-between border-b">
      <DesktopLeft/>
      <DesktopRight/>
      </div>
   <div className="lg:mt-6 mb:-mt-1 lg:pt-[58px] mb:pt-[34px]">
          <span className="lg:text-2xl text-xl lg:tracking-[-0.5px]">Featured Product</span>
          <ListProduct1/>
    </div>
  </main>
  </div>
      )}
      export default DetailProduct
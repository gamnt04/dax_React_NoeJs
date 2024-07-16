import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductManagement from "@/pages/(dashboard)/product/page";
import Signin from "@/pages/(website)/(auth)/Signin";
import NotFound from "@/pages/(website)/404/page";

import CartPage from "@/pages/(website)/cart/page";

import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import DetailProduct from "@/pages/(website)/product/detail/page";
import ShopPage from "@/pages/(website)/product/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="products/:id" element={<DetailProduct />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="cart" element={<CartPage />} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
<Route path="productManager" element={<ProductManagement/>}/>


                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;

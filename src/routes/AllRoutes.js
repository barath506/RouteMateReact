import { Home, ProductList, ProductDetail, Contact, ContactIn, ContactUs, ContactOther, PageNotFound, Admin } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const AllRoutes = () => {
    
    const user = true;
    console.log(user);
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="contact" element={<Contact />} >
                    <Route path="in" element={<ContactIn />} />
                    <Route path="us" element={<ContactUs />} />
                    <Route path="*" element={<ContactOther />} />
                </Route>
                <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
                <Route path="*" element={<PageNotFound title="404" />} />
            </Routes>
        </>
    )
}

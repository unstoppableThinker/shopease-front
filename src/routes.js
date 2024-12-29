import { createBrowserRouter } from "react-router-dom";
import Shop from './Shop';
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import { loadProductBySlug } from "./routes/products";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <ShopApplicationWrapper />,
		children: [
			{
				path: '/',
				element: <Shop />
			},
			{
				path: '/kids',
				element: <ProductListPage categoryType={'KIDS'} />
			},
			{
				path: '/women',
				element: <ProductListPage categoryType={'WOMEN'} />
			},
			{
				path: '/men',
				element: <ProductListPage categoryType={'MEN'} />
			},
			{
				path: '/products/:slug',
				loader: loadProductBySlug,
				element: <ProductDetails />
			}
		]
	},
]);
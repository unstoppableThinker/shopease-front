import { createBrowserRouter } from "react-router-dom";
import Shop from './Shop';
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import { loadProductBySlug } from "./routes/products";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import AuthenticationWrapper from "./pages/AuthenticationWrapper";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";

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
	{
		path: '/v1',
		element: <AuthenticationWrapper />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '/oauth2/callback',
		element: <OAuth2LoginCallback />
	}
]);
import Vue from "vue";
import VueRouter from "vue-router";
import Checkout from '@/views/Checkout/Checkout';
import Products from '@/views/Checkout/views/1_Products/1_Products';
import Shipping from '@/views/Checkout/views/2_Shipping';
import Payment from '@/views/Checkout/views/3_Payment';
import Delivery from '@/views/Checkout/views/4_Delivery';

Vue.use(VueRouter);

const routes = [
	{
		path: "/checkout",
		component: Checkout,
		children:[
			{
				path: "/",
				component: Products,
				name: "Products"
			},
			{
				path: "/shipping",
				component: Shipping,
				name: "Shipping"
			},
			{
				path: "/payment",
				component: Payment,
				name: "Payment"
			},
			{
				path: "/delivery",
				component: Delivery,
				name: "Delivery"
			},
		]
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;

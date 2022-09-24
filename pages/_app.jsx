import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { Router } from "next/router";
import nprogress from "nprogress";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import queryClient from "../queries";
import "../styles/globals.css";

nprogress.configure({
	minimum: 0.3,
	easing: "ease",
	speed: 800,
	showSpinner: true,
});

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

const App = (props) => {
	useEffect(() => {
		const check = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	return (
		<>
			<Head>
				<title>LU Sidebar</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<AppWithQuery {...props} />
				{process.env.NODE_ENV === "development" && (
					<ReactQueryDevtools
						initialIsOpen={true}
						// position="top-right"
					/>
				)}
			</QueryClientProvider>
		</>
	);
};

const AppWithQuery = ({ Component, pageProps }) => {
	return (
		<div className="flex h-screen select-none overflow-x-hidden overflow-y-scroll bg-neutral-100 scrollbar-hide dark:bg-neutral-900">
			<div className="bg-neutral-100 dark:bg-neutral-900 h-screen w-screen flex-col">
				<Component {...pageProps} />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
};

export default App;

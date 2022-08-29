import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Router } from "next/router";
import nprogress from "nprogress";
import { useEffect } from "react";
import "styles/globals.css";
import { Navbar } from "submodules/shared/components/organisms";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

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
				<title>LU Next Template</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<AppWithQuery {...props} />
				{process.env.NODE_ENV === "development" && (
					<ReactQueryDevtools initialIsOpen={true} />
				)}
			</QueryClientProvider>
		</>
	);
};

const AppWithQuery = ({ Component, pageProps }) => {
	return (
		<div className="flex h-screen select-none flex-col overflow-x-hidden overflow-y-scroll bg-slate-100 scrollbar-hide dark:bg-neutral-900 sm:flex-row">
			<div className="bg-slate-100 dark:bg-neutral-900 h-screen w-screen">
				<header>
					<Navbar />
				</header>
				<div className="mx-auto mt-6 min-h-navScreenSpaced w-full max-w-9xl px-4 text-slate-900 dark:text-slate-200 sm:px-6 lg:px-14">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
};

export default App;

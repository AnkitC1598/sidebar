import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { Router } from "next/router";
import nprogress from "nprogress";
import { useEffect } from "react";
import { useSidebarStore } from "../store/store";
import "../styles/globals.css";

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
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);
	useEffect(() => {
		const check = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};
		check();
		window.addEventListener("resize", check);
		dispatchToSidebar({
			type: "SET_STATE_TYPE",
			payload: { type: "user", value: user },
		});
		dispatchToSidebar({
			type: "SET_STATE_TYPE",
			payload: { type: "loaded", value: true },
		});
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
	const loaded = useSidebarStore((store) => store.loaded);

	return (
		<div className="flex h-screen select-none overflow-x-hidden overflow-y-scroll bg-neutral-100 scrollbar-hide dark:bg-neutral-900">
			<div className="bg-neutral-100 dark:bg-neutral-900 h-screen w-screen flex-col">
				{loaded ? <Component {...pageProps} /> : null}
			</div>
		</div>
	);
};

export default App;

import { useQuery } from "@tanstack/react-query";
import ChatQueries from "../../../queries/chat";
import { useSidebarStore } from "../../../store/store";
import CookieService from "../../../submodules/shared/services/cookie.service";

const useGetChats = () => {
	const { user, dispatchToSidebar } = useSidebarStore((store) => ({
		user: store.user,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const { isLoading, isError, data, error } = useQuery(
		["chats", user?.uid],
		ChatQueries.getChats,
		{
			retry: 1,
			retryDelay: (attempt) => attempt * 1000,
			enabled:
				Boolean(CookieService.getLocalAccessToken()) && Boolean(user),
			onSuccess: (data) => {
				dispatchToSidebar({
					type: "SET_STATE_TYPE",
					payload: { type: "chats", value: data },
				});
			},
		}
	);

	return {
		isLoading,
		isError,
		data,
		error,
	};
};

export default useGetChats;

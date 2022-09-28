import { useQuery } from "@tanstack/react-query";
import ChatQueries from "../../../queries/chat";
import CookieService from "../../../submodules/shared/services/cookie.service";

const useGetChatDetails = ({ chatId }) => {
	const { isLoading, isError, data, error } = useQuery(
		[`chatDetail-${chatId}`, chatId],
		ChatQueries.getChatDetail,
		{
			retry: 1,
			retryDelay: (attempt) => attempt * 1000,
			enabled:
				Boolean(CookieService.getLocalAccessToken()) && Boolean(chatId),
		}
	);

	return {
		isLoading,
		isError,
		data,
		error,
	};
};

export default useGetChatDetails;

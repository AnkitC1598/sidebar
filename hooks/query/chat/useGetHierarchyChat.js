import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ChatQueries from "../../../queries/chat";
import { useSidebarStore } from "../../../store/store";
import CookieService from "../../../submodules/shared/services/cookie.service";
import { groupifyChat } from "../../../submodules/shared/utils";

const classCodes = [
	"63306544cc1ba0336678046d",
	"633062f4022082335c03ad9d",
	"632606debfc8f8343f7bfb13",
	"6325d4d09dea1534311e0eee",
	"631ccbf724ba8b30628209e0",
];
const hierarchyLevel = ["cohort", "term", "subject", "chapter", "topic"];

const useGetHierarchyChat = () => {
	const { query } = useRouter();
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);
	const classCode = classCodes[query.slug?.length - 1];
	const hierarchy = hierarchyLevel[query.slug?.length - 1];

	useQuery(
		[`${hierarchy}-chat-${classCode}`, classCode],
		ChatQueries.getHierarchyChat,
		{
			retry: false,
			enabled:
				Boolean(CookieService.getLocalAccessToken()) &&
				Boolean(query.slug),
			onSuccess: (data) => {
				dispatchToSidebar({
					type: "SET_STATE_TYPE",
					payload: {
						type: "discussionChats",
						value: groupifyChat(
							data.map((m) => ({
								...m,
								isDeleted: false,
							})),
							[]
						),
					},
				});
			},
		}
	);
	return null;
};

export default useGetHierarchyChat;

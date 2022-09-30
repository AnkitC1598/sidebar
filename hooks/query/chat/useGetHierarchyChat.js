import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ChatQueries from "../../../queries/chat";
import { useSidebarStore } from "../../../store/store";
import CookieService from "../../../submodules/shared/services/cookie.service";
import { groupifyChat } from "../../../submodules/shared/utils";

const classCodes = [
	"62b2bd07b5b2876af60c7102",
	"62b418ba28bfcb6b045f700b",
	"62b58da7b5b2876af60c82d1",
	"62b961ddab10132aeca3bf10",
	"62baa4a1794bd52adef5595f",
];
const hierarchyLevel = ["cohort", "term", "subject", "chapter", "topic"];

const useGetHierarchyChat = () => {
	const { query } = useRouter();
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	const slugBased = Boolean(query.slug);

	const classCode =
		classCodes[slugBased ? query.slug?.length : Object.keys(query)?.length];
	const hierarchy =
		hierarchyLevel[
			slugBased ? query.slug?.length : Object.keys(query)?.length
		];

	useQuery(
		[`${hierarchy}-chat-${classCode}`, classCode],
		ChatQueries.getHierarchyChat,
		{
			retry: false,
			enabled:
				Boolean(CookieService.getLocalAccessToken()) &&
				Boolean(hierarchy) &&
				Boolean(classCode),
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

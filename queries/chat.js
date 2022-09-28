import { fetchWithToken } from "../submodules/shared/services/axios";

const ChatQueries = {
	initGroup: (data) => {
		return fetchWithToken.post("/v1/groups/group", data);
	},
	initChat: (data) => {
		return fetchWithToken.post("/v1/groups/single", data);
	},
	getChats: async ({ queryKey }) => {
		const [_, uid] = queryKey;
		let resp = await fetchWithToken.get("/v1/groups");
		resp = resp.data.results.data;
		resp = resp.map((res) => {
			if (res.type === "single")
				res.title = res.members.filter(
					(member) => member.uid !== uid
				)[0].name;
			return res;
		});
		return resp;
	},
	getChatDetail: async ({ queryKey }) => {
		const [_, chatId] = queryKey;
		let resp = await fetchWithToken.get(`/v1/groups/details/${chatId}`);
		return resp.data.results.data;
	},
	addToChat: ({ chatId, uid }) => {
		return fetchWithToken.post(`/v1/groups/${chatId}/members/${uid}/add`);
	},
};

export default ChatQueries;

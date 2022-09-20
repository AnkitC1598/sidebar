import React from "react";
import { useSidebarStore } from "../../../store/store";
import { Input } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";
import { LRChat } from "..";

const msgGroups = [
	{
		user: {
			name: "chand babu",
			role: "member",
			username: "jafri.nbj490",
			profileImageUrl:
				"https://cdn.letsupgrade.net/z2X67mhn2DQVsnAOcuEulR8Hy4c2/profile/displayImage_1657896636650.png",
			uid: "z2X67mhn2DQVsnAOcuEulR8Hy4c2",
		},
		type: "message",
		createdAt: "2022-08-23T16:36:32.385Z",
		messages: [
			{
				_id: "630502103aa452a69619b3a6",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "class se ho gaya",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:36:32.385Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "SHUBHAM KUMAR",
			role: "member",
			username: "clboy768670",
			profileImageUrl:
				"https://cdn.letsupgrade.net/fq3cc3YVO1UFoZmSL3EnNqntsM92/profile/displayImage_1656083352105.png",
			uid: "fq3cc3YVO1UFoZmSL3EnNqntsM92",
		},
		type: "message",
		createdAt: "2022-08-23T16:36:35.726Z",
		messages: [
			{
				_id: "630502133aa452a69619b3aa",
				roomId: "6304a26e8dd6364d543e5b66",
				message:
					"yes mam clear hai pr thoda aaj practice krenge koi doubt hua to kl puchenge",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:36:35.726Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "chand babu",
			role: "member",
			username: "jafri.nbj490",
			profileImageUrl:
				"https://cdn.letsupgrade.net/z2X67mhn2DQVsnAOcuEulR8Hy4c2/profile/displayImage_1657896636650.png",
			uid: "z2X67mhn2DQVsnAOcuEulR8Hy4c2",
		},
		type: "message",
		createdAt: "2022-08-23T16:36:38.720Z",
		messages: [
			{
				_id: "630502483aa452a69619b3d6",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "main sab class se kar lunga",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:37:28.205Z",
				isDeleted: false,
			},
			{
				_id: "6305023f3aa452a69619b3d1",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "isse rehne deta maam",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:37:19.581Z",
				isDeleted: false,
			},
			{
				_id: "630502163aa452a69619b3af",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "ab isse bhi karna kia",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:36:38.720Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Satyam Prakash Mohite",
			profileImageUrl:
				"https://cdn.letsupgrade.net/cJVbIfMiSzYZOCYar01n2u0BGZP2/profile/displayImage_1657552085523.png",
			role: "member",
			uid: "cJVbIfMiSzYZOCYar01n2u0BGZP2",
			username: "satyammohite17906",
		},
		type: "message",
		createdAt: "2022-08-23T16:38:26.965Z",
		messages: [
			{
				_id: "6305028f3aa452a69619b3f9",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "ook",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:38:39.014Z",
				isDeleted: false,
			},
			{
				_id: "630502823aa452a69619b3f2",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "chalo  its dinner time now !! see u tmr  good night",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:38:26.965Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Mohammed Yasin Shaikh",
			role: "member",
			username: "ilu1995.mh239",
			profileImageUrl: null,
			uid: "bnf8Z26yQYMDtLc5BvGRtTrWYVC3",
		},
		type: "message",
		createdAt: "2022-08-23T16:38:51.553Z",
		messages: [
			{
				_id: "6305029b3aa452a69619b403",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "Enjoy ma'am ",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:38:51.553Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Satyam Prakash Mohite",
			profileImageUrl:
				"https://cdn.letsupgrade.net/cJVbIfMiSzYZOCYar01n2u0BGZP2/profile/displayImage_1657552085523.png",
			role: "member",
			uid: "cJVbIfMiSzYZOCYar01n2u0BGZP2",
			username: "satyammohite17906",
		},
		type: "message",
		createdAt: "2022-08-23T16:38:57.827Z",
		messages: [
			{
				_id: "630502a13aa452a69619b406",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "enjoy ",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:38:57.827Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "chand babu",
			role: "member",
			username: "jafri.nbj490",
			profileImageUrl:
				"https://cdn.letsupgrade.net/z2X67mhn2DQVsnAOcuEulR8Hy4c2/profile/displayImage_1657896636650.png",
			uid: "z2X67mhn2DQVsnAOcuEulR8Hy4c2",
		},
		type: "message",
		createdAt: "2022-08-23T16:39:00.433Z",
		messages: [
			{
				_id: "630502a43aa452a69619b40a",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "please delever me mithai",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:39:00.433Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "SHUBHAM KUMAR",
			role: "member",
			username: "clboy768670",
			profileImageUrl:
				"https://cdn.letsupgrade.net/fq3cc3YVO1UFoZmSL3EnNqntsM92/profile/displayImage_1656083352105.png",
			uid: "fq3cc3YVO1UFoZmSL3EnNqntsM92",
		},
		type: "message",
		createdAt: "2022-08-23T16:39:05.171Z",
		messages: [
			{
				_id: "630502a93aa452a69619b40e",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "pic dekhna hai hme bhi",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:39:05.171Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "chand babu",
			role: "member",
			username: "jafri.nbj490",
			profileImageUrl:
				"https://cdn.letsupgrade.net/z2X67mhn2DQVsnAOcuEulR8Hy4c2/profile/displayImage_1657896636650.png",
			uid: "z2X67mhn2DQVsnAOcuEulR8Hy4c2",
		},
		type: "message",
		createdAt: "2022-08-23T16:39:22.025Z",
		messages: [
			{
				_id: "630502c93aa452a69619b428",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "deliver kar dena",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:39:37.986Z",
				isDeleted: false,
			},
			{
				_id: "630502be3aa452a69619b421",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "mele se",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:39:26.617Z",
				isDeleted: false,
			},
			{
				_id: "630502ba3aa452a69619b41d",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "mithai bhej dena",
				replyTo: null,
				seekTime: 15.465331,
				createdAt: "2022-08-23T16:39:22.025Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "SHUBHAM KUMAR",
			role: "member",
			username: "clboy768670",
			profileImageUrl:
				"https://cdn.letsupgrade.net/fq3cc3YVO1UFoZmSL3EnNqntsM92/profile/displayImage_1656083352105.png",
			uid: "fq3cc3YVO1UFoZmSL3EnNqntsM92",
		},
		type: "message",
		createdAt: "2022-08-23T16:39:42.285Z",
		messages: [
			{
				_id: "630502df3aa452a69619b43a",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "good night mam",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:39:59.069Z",
				isDeleted: false,
			},
			{
				_id: "630502ce3aa452a69619b42f",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "wo bhi paste bin me daal dena aap",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:39:42.285Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Ariyanta Sarkar ",
			role: "member",
			username: "Ariyanta3",
			profileImageUrl: "",
			uid: "ccadwklb2cQosOFOwCNj8NBkK3P2",
		},
		type: "message",
		createdAt: "2022-08-23T16:40:01.430Z",
		messages: [
			{
				_id: "630502e13aa452a69619b43e",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "gd nt mam",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:40:01.430Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "G.Prabhakar Babu",
			role: "member",
			username: "prabhakarbabu786821",
			profileImageUrl: "",
			uid: "NFX0z6mhpTf1zA4zaQJnIx06hRB2",
		},
		type: "message",
		createdAt: "2022-08-23T16:40:03.927Z",
		messages: [
			{
				_id: "630502e33aa452a69619b442",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "good nite mam",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-23T16:40:03.927Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Biruntha Anbazhagan",
			role: "member",
			username: "birunthaanbazhagan927",
			profileImageUrl: "",
			uid: "urDzBuZdTzgdWpuFFj165hD85zP2",
		},
		type: "message",
		createdAt: "2022-08-23T16:40:23.047Z",
		messages: [
			{
				_id: "630503013aa452a69619b452",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "Iyes mam",
				replyTo: null,
				seekTime: 87.567914,
				createdAt: "2022-08-23T16:40:33.098Z",
				isDeleted: false,
			},
			{
				_id: "630502f73aa452a69619b44f",
				roomId: "6304a26e8dd6364d543e5b66",
				message: "Good nte mam",
				replyTo: null,
				seekTime: 87.567914,
				createdAt: "2022-08-23T16:40:23.047Z",
				isDeleted: false,
			},
		],
	},
];

const InboxChat = () => {
	const userId = useSidebarStore((store) => store.user.uid);

	return (
		<>
			<ul className="flex w-full flex-col-reverse overflow-hidden overflow-y-scroll h-navScreen h-screen-ios rounded-md pt-0.5 scrollbar-hide space-y-2 space-y-reverse p-4">
				{msgGroups.map((msgGroup, idx) => (
					<li
						key={idx}
						className={classNames(
							"group flex w-2/3",
							msgGroup.user.uid === userId &&
								"self-end justify-end"
						)}
					>
						<LRChat msgGroup={msgGroup} />
					</li>
				))}
			</ul>
			<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
				<Input placeholder="Send Message" />
			</div>
		</>
	);
};

export default InboxChat;

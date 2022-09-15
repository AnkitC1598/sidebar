import { Tab, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon as ArrowLeftOnRectangleIconOutline,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconOutline,
	ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
	Cog6ToothIcon as Cog6ToothIconOutline,
	FolderIcon as FolderIconOutline,
	HandRaisedIcon as HandRaisedIconOutline,
	UserGroupIcon as UserGroupIconOutline,
} from "@heroicons/react/24/outline";
import {
	ArrowRightOnRectangleIcon as ArrowRightOnRectangleIconSolid,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
	ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
	Cog6ToothIcon as Cog6ToothIconSolid,
	FolderIcon as FolderIconSolid,
	HandRaisedIcon as HandRaisedIconSolid,
	UserGroupIcon as UserGroupIconSolid,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";
import {
	Agendas,
	Chats,
	Doubts,
	Participants,
	PasteBin,
	Profile,
	Settings,
} from "..";
import { useSidebarStore } from "../../../store/store";
import { Tooltip } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";

const agendas = [
	{ id: "FMDDa_f-fiww8YAh", text: "For Loop", isCompleted: false },
	{ id: "UrFaOcRk7p_285-L", text: "For in Loop", isCompleted: true },
	{ id: "wdMhkhqlLokPQ6b_", text: "For of Loops", isCompleted: false },
	{ id: "T4YWUt6QHEttf22k", text: "Do While Loop", isCompleted: false },
	{ id: "mAFbN446ez13RofL", text: "While Loops", isCompleted: false },
];

const messages = [
	{
		user: {
			name: "Gourav Ghosal",
			role: "trainer",
			username: "gouravg497",
			profileImageUrl: null,
			uid: "o9BDwo6afWM6OwXJCBoNVk1r1TH2",
		},
		type: "message",
		createdAt: "2022-07-30T04:39:27.491Z",
		messages: [
			{
				_id: "62f11aba3aa452a696162912",
				roomId: "619cbd8f374c30723c502e6a",
				message: "❤️",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-08T14:16:26.774Z",
				isDeleted: false,
			},
			{
				_id: "62f116f73aa452a696162799",
				roomId: "619cbd8f374c30723c502e6a",
				message: "👍",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-08T14:00:23.221Z",
				isDeleted: false,
			},
			{
				_id: "62f116f43aa452a696162796",
				roomId: "619cbd8f374c30723c502e6a",
				message: "😄",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-08T14:00:20.253Z",
				isDeleted: false,
			},
			{
				_id: "62f116f03aa452a696162791",
				roomId: "619cbd8f374c30723c502e6a",
				message: "👎",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-08T14:00:16.220Z",
				isDeleted: false,
			},
			{
				_id: "62f114ed3aa452a69616271a",
				roomId: "619cbd8f374c30723c502e6a",
				message: "❤️",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-08T13:51:41.039Z",
				isDeleted: false,
			},
			{
				_id: "62ea0fe53aa452a696156036",
				roomId: "619cbd8f374c30723c502e6a",
				message: "❤️ ❤",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-03T06:04:21.104Z",
				isDeleted: false,
			},
			{
				_id: "62ea0fce3aa452a696156033",
				roomId: "619cbd8f374c30723c502e6a",
				message: "test for 🤔",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-03T06:03:58.232Z",
				isDeleted: false,
			},
			{
				_id: "62ea0faf3aa452a69615602d",
				roomId: "619cbd8f374c30723c502e6a",
				message: "test for ❤ ",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-08-03T06:03:27.158Z",
				isDeleted: false,
			},
			{
				_id: "62e4b62f3aa452a69614d120",
				roomId: "619cbd8f374c30723c502e6a",
				message: '["test","for","🤔","emoji"]',
				replyTo: null,
				seekTime: null,
				createdAt: "2022-07-30T04:40:15.081Z",
				isDeleted: false,
			},
			{
				_id: "62e4b5ff3aa452a69614d11d",
				roomId: "619cbd8f374c30723c502e6a",
				message: '["test","for","emojifying","🤔"]',
				replyTo: null,
				seekTime: null,
				createdAt: "2022-07-30T04:39:27.491Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Shoieb A Shaikh",
			profileImageUrl:
				"https://cdn.letsupgrade.net/hLShHebZhNMGKuURZ0fgLf0n3Me2/profile/displayImage_1627756520573.png",
			role: "admin",
			uid: "hLShHebZhNMGKuURZ0fgLf0n3Me2",
			username: "shoieb_shaikh",
		},
		type: "message",
		createdAt: "2022-07-28T12:41:53.826Z",
		messages: [
			{
				_id: "62e284413aa452a6961449c3",
				roomId: "619cbd8f374c30723c502e6a",
				message: "❤️",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-28T12:42:41.641Z",
				isDeleted: false,
			},
			{
				_id: "62e284343aa452a6961449bc",
				roomId: "619cbd8f374c30723c502e6a",
				message: "🤔",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-28T12:42:28.566Z",
				isDeleted: false,
			},
			{
				_id: "62e284323aa452a6961449b9",
				roomId: "619cbd8f374c30723c502e6a",
				message: "😄",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-28T12:42:26.116Z",
				isDeleted: false,
			},
			{
				_id: "62e284113aa452a6961449b4",
				roomId: "619cbd8f374c30723c502e6a",
				message: ":🎉:",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-28T12:41:53.826Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Ankit Chaudhari",
			profileImageUrl:
				"https://cdn.letsupgrade.net/U9dXRa7WQMMz2Us5g4YkBIGZgdp1/profile/displayImage.png",
			role: "admin",
			username: "ankit1598",
			uid: "U9dXRa7WQMMz2Us5g4YkBIGZgdp1",
		},
		type: "message",
		createdAt: "2022-07-26T15:38:38.150Z",
		messages: [
			{
				_id: "62e00a7e1455bc03d5e6d0cb",
				roomId: "619cbd8f374c30723c502e6a",
				message: ".",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-07-26T15:38:38.150Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Ankit Chaudhari",
			profileImageUrl:
				"https://cdn.letsupgrade.net/aVNhQHe1N8ZibeFmGh5zK8eAh9t2/profile/displayImage.png",
			role: "trainer",
			username: "ankit_chaudhari",
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
		},
		type: "message",
		createdAt: "2022-07-26T15:32:31.217Z",
		messages: [
			{
				_id: "62e0090f1455bc03d5e6cd8f",
				roomId: "619cbd8f374c30723c502e6a",
				message: ".",
				replyTo: null,
				seekTime: 0.010766020980834961,
				createdAt: "2022-07-26T15:32:31.217Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Shoieb A Shaikh",
			profileImageUrl:
				"https://cdn.letsupgrade.net/hLShHebZhNMGKuURZ0fgLf0n3Me2/profile/displayImage_1627756520573.png",
			role: "admin",
			uid: "hLShHebZhNMGKuURZ0fgLf0n3Me2",
			username: "shoieb_shaikh",
		},
		type: "message",
		createdAt: "2022-07-23T11:59:39.946Z",
		messages: [
			{
				_id: "62e008c51455bc03d5e6cca3",
				roomId: "619cbd8f374c30723c502e6a",
				message: ".",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-26T15:31:17.504Z",
				isDeleted: false,
			},
			{
				_id: "62dbe2ab1455bc03d5e6627d",
				roomId: "619cbd8f374c30723c502e6a",
				message: "3",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-23T11:59:39.946Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Ankit Chaudhari",
			profileImageUrl:
				"https://cdn.letsupgrade.net/U9dXRa7WQMMz2Us5g4YkBIGZgdp1/profile/displayImage.png",
			role: "admin",
			username: "ankit1598",
			uid: "U9dXRa7WQMMz2Us5g4YkBIGZgdp1",
		},
		type: "message",
		createdAt: "2022-07-23T11:59:38.168Z",
		messages: [
			{
				_id: "62dbe2aa1455bc03d5e6627a",
				roomId: "619cbd8f374c30723c502e6a",
				message: "2",
				replyTo: null,
				seekTime: null,
				createdAt: "2022-07-23T11:59:38.168Z",
				isDeleted: false,
			},
		],
	},
	{
		user: {
			name: "Shoieb A Shaikh",
			profileImageUrl:
				"https://cdn.letsupgrade.net/hLShHebZhNMGKuURZ0fgLf0n3Me2/profile/displayImage_1627756520573.png",
			role: "admin",
			uid: "hLShHebZhNMGKuURZ0fgLf0n3Me2",
			username: "shoieb_shaikh",
		},
		type: "message",
		createdAt: "2022-07-23T11:59:35.679Z",
		messages: [
			{
				_id: "62dbe2a71455bc03d5e66276",
				roomId: "619cbd8f374c30723c502e6a",
				message:
					"111111111111111111111111111111111111111111111111111111111111111111111111111111",
				replyTo: null,
				seekTime: 37.492937032424926,
				createdAt: "2022-07-23T11:59:35.679Z",
				isDeleted: false,
			},
		],
	},
];

const participants = [
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
		name: "Ankit Chaudhari",
		username: "ankit_chaudhari",
		profileImageUrl:
			"https://cdn.letsupgrade.net/aVNhQHe1N8ZibeFmGh5zK8eAh9t2/profile/displayImage.png",
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
		name: "Ankit Chaudhari",
		username: "ankit_chaudhari",
		profileImageUrl:
			"https://cdn.letsupgrade.net/aVNhQHe1N8ZibeFmGh5zK8eAh9t2/profile/displayImage.png",
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
		name: "Ankit Chaudhari",
		username: "ankit_chaudhari",
		profileImageUrl:
			"https://cdn.letsupgrade.net/aVNhQHe1N8ZibeFmGh5zK8eAh9t2/profile/displayImage.png",
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
		name: "Ankit Chaudhari",
		username: "ankit_chaudhari",
		profileImageUrl:
			"https://cdn.letsupgrade.net/aVNhQHe1N8ZibeFmGh5zK8eAh9t2/profile/displayImage.png",
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
];
const user = {
	uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
	bannerImg: "https://source.unsplash.com/1600x900/?technology",
	profileImage:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
	name: "Ashley Porter",
	username: "@ashleyporter",
	email: "ashleyporter@email.com",
	number: "+911234567890",
	title: "Code Storming 💻",
	bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
	location: "New York, NY, USA",
	learningHours: "500",
	socials: {
		twitter: "http://twitter.com",
		instagram: "https://instagram.com",
		linkedin: "https://linkedin.com",
		facebook: "https://facebook.com",
		github: "https://github.com",
		web: "https://letsupgrade.in",
	},
};

const resources = [
	{
		_id: "62f12eaf3aa452a696164150",
		roomId: "619cbd8f374c30723c502e6a",
		size: null,
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam soluta placeat ut possimus quas voluptatem repellat nemo eligendi, natus ab perspiciatis obcaecati sunt perferendis. Facere quisquam blanditiis vel praesentium atque, iste odio optio minus repudiandae consequuntur amet! Facilis libero quam voluptas, reprehenderit alias ducimus. Inventore maiores illum natus deleniti aliquam quibusdam a amet ab! Enim saepe laudantium ratione eos corrupti hic, vel pariatur laborum eum animi earum, beatae repellat autem facere cum officiis ipsam laboriosam, non error iusto culpa dignissimos. Similique molestiae nihil quam accusamus nobis tenetur alias excepturi, quod quis commodi hic quae consectetur non nemo quisquam quaerat?",
		link: [],
		createdAt: "2022-08-08T15:41:35.217Z",
		ext: null,
		source: "input",
		name: null,
		isImage: null,
		isVisible: true,
		user: {
			name: "Gourav Ghosal",
			username: "gouravg497",
			profileImageUrl: null,
			uid: "o9BDwo6afWM6OwXJCBoNVk1r1TH2",
		},
	},
	{
		_id: "62f12d9c3aa452a696163fd9",
		roomId: "619cbd8f374c30723c502e6a",
		size: "0 Bytes",
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1659973017806_Lorem ipsumdolor sitamet onsectetur dipisicing elit.ncidunthic. Sequiadipisci fugiatUllam,mollitia nisinam dignissimos,laboriosam bcaecativoluptatem ducimus minus at accusamus dit.Hicnihil upiditate.txt",
		createdAt: "2022-08-08T15:37:00.789Z",
		ext: "txt",
		source: "file",
		name: "Lorem ipsumdolor sitamet onsectetur dipisicing elit.ncidunthic. Sequiadipisci fugiatUllam,mollitia nisinam dignissimos,laboriosam bcaecativoluptatem ducimus minus at accusamus dit.Hicnihil upiditate.txt",
		isImage: false,
		isVisible: false,
		user: {
			name: "Gourav Ghosal",
			username: "gouravg497",
			profileImageUrl: null,
			uid: "o9BDwo6afWM6OwXJCBoNVk1r1TH2",
		},
	},
	{
		_id: "62a1d7deee52df04f7234d18",
		roomId: "619cbd8f374c30723c502e6a",
		size: "7.77 MB",
		text: "ViVeTool.GUI.Setup.exe",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1654773718574_ViVeTool.GUI.Setup.exe",
		createdAt: "2022-06-09T11:22:06.779Z",
		ext: "exe",
		source: "file",
		name: "ViVeTool.GUI.Setup.exe",
		isImage: false,
		isVisible: true,
		user: {
			name: "Viral Patel",
			profileImageUrl:
				"https://cdn.letsupgrade.net/WtUddNsMKtfFpIsII2GexZaV90A2/profile/displayImage_1659186035541.png",
			uid: "WtUddNsMKtfFpIsII2GexZaV90A2",
			username: "viralp",
		},
	},
	{
		_id: "62a1d7d92ddd760509cf5b0e",
		roomId: "619cbd8f374c30723c502e6a",
		size: null,
		text: "ViVeTool.GUI.Setup.exe",
		link: [],
		createdAt: "2022-06-09T11:22:01.283Z",
		ext: null,
		source: "input",
		name: null,
		isImage: null,
		isVisible: true,
		user: {
			name: "Viral Patel",
			profileImageUrl:
				"https://cdn.letsupgrade.net/WtUddNsMKtfFpIsII2GexZaV90A2/profile/displayImage_1659186035541.png",
			uid: "WtUddNsMKtfFpIsII2GexZaV90A2",
			username: "viralp",
		},
	},
	{
		_id: "62a1d30e2ddd760509cf5ade",
		roomId: "619cbd8f374c30723c502e6a",
		size: "7.77 MB",
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1654772468044_ViVeTool.GUI.Setup.exe",
		createdAt: "2022-06-09T11:01:34.553Z",
		ext: "exe",
		source: "file",
		name: "ViVeTool.GUI.Setup.exe",
		isImage: false,
		isVisible: true,
		user: {
			name: "Ankit Chaudhari",
			profileImageUrl:
				"https://cdn.letsupgrade.net/U9dXRa7WQMMz2Us5g4YkBIGZgdp1/profile/displayImage.png",
			username: "ankit1598",
			uid: "U9dXRa7WQMMz2Us5g4YkBIGZgdp1",
		},
	},
	{
		_id: "628647a571448d0788138d62",
		roomId: "619cbd8f374c30723c502e6a",
		size: 475649,
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1652967331403_Screenshot 2021-09-17 at 12.32.27 PM.png",
		createdAt: "2022-05-19T13:35:33.550Z",
		ext: "png",
		source: "file",
		name: "Screenshot 2021-09-17 at 12.32.27 PM.png",
		isImage: true,
		isVisible: true,
		user: {
			name: "Kriti Thakrar",
			profileImageUrl:
				"https://cdn.letsupgrade.net/SEngVJlov6MU9EJuM5Wl80wY8YA3/profile/displayImage_1628451830815.png",
			uid: "SEngVJlov6MU9EJuM5Wl80wY8YA3",
			username: "kritithakrar",
		},
	},
	{
		_id: "6286471d71448d0788138d60",
		roomId: "619cbd8f374c30723c502e6a",
		size: 322612,
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1652967193680_Screenshot 2021-09-17 at 12.32.06 PM.png",
		createdAt: "2022-05-19T13:33:17.272Z",
		ext: "png",
		source: "file",
		name: "Screenshot 2021-09-17 at 12.32.06 PM.png",
		isImage: true,
		isVisible: true,
		user: {
			name: "Kriti Thakrar",
			profileImageUrl:
				"https://cdn.letsupgrade.net/SEngVJlov6MU9EJuM5Wl80wY8YA3/profile/displayImage_1628451830815.png",
			uid: "SEngVJlov6MU9EJuM5Wl80wY8YA3",
			username: "kritithakrar",
		},
	},
	{
		_id: "628646a2db98e5079462e772",
		roomId: "619cbd8f374c30723c502e6a",
		size: 475649,
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1652967071958_Screenshot 2021-09-17 at 12.32.27 PM.png",
		createdAt: "2022-05-19T13:31:14.391Z",
		ext: "png",
		source: "file",
		name: "Screenshot 2021-09-17 at 12.32.27 PM.png",
		isImage: true,
		isVisible: true,
		user: {
			name: "Kriti Thakrar",
			profileImageUrl:
				"https://cdn.letsupgrade.net/SEngVJlov6MU9EJuM5Wl80wY8YA3/profile/displayImage_1628451830815.png",
			uid: "SEngVJlov6MU9EJuM5Wl80wY8YA3",
			username: "kritithakrar",
		},
	},
	{
		_id: "6286463adb98e5079462e76f",
		roomId: "619cbd8f374c30723c502e6a",
		size: 475649,
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1652966966384_Screenshot 2021-09-17 at 12.32.27 PM.png",
		createdAt: "2022-05-19T13:29:30.180Z",
		ext: "png",
		source: "file",
		name: "Screenshot 2021-09-17 at 12.32.27 PM.png",
		isImage: true,
		isVisible: true,
		user: {
			name: "Kriti Thakrar",
			profileImageUrl:
				"https://cdn.letsupgrade.net/SEngVJlov6MU9EJuM5Wl80wY8YA3/profile/displayImage_1628451830815.png",
			uid: "SEngVJlov6MU9EJuM5Wl80wY8YA3",
			username: "kritithakrar",
		},
	},
	{
		_id: "628645c3db98e5079462e767",
		roomId: "619cbd8f374c30723c502e6a",
		size: 415,
		text: "",
		link: "https://media.letsupgrade.net/lms/pastebin/619cbd8f374c30723c502e6a/1652966849271_index.html",
		createdAt: "2022-05-19T13:27:31.350Z",
		ext: "html",
		source: "file",
		name: "index.html",
		isImage: false,
		isVisible: true,
		user: {
			name: "Kriti Thakrar",
			profileImageUrl:
				"https://cdn.letsupgrade.net/SEngVJlov6MU9EJuM5Wl80wY8YA3/profile/displayImage_1628451830815.png",
			uid: "SEngVJlov6MU9EJuM5Wl80wY8YA3",
			username: "kritithakrar",
		},
	},
];

const Tabs = [
	{
		label: "agenda",
		component: <Agendas agendas={agendas} />,
		outlineIcon: <ClipboardDocumentListIconOutline className="h-5 w-5" />,
		solidIcon: <ClipboardDocumentListIconSolid className="h-5 w-5" />,
	},
	{
		label: "chat",
		component: <Chats messages={messages} />,
		outlineIcon: (
			<ChatBubbleBottomCenterTextIconOutline className="h-5 w-5" />
		),
		solidIcon: <ChatBubbleBottomCenterTextIconSolid className="h-5 w-5" />,
	},
	{
		label: "doubt",
		component: <Doubts />,
		outlineIcon: <HandRaisedIconOutline className="h-5 w-5" />,
		solidIcon: <HandRaisedIconSolid className="h-5 w-5" />,
	},
	{
		label: "pastebin",
		component: <PasteBin resources={resources} />,
		outlineIcon: <FolderIconOutline className="h-5 w-5" />,
		solidIcon: <FolderIconSolid className="h-5 w-5" />,
	},
	{
		label: "users",
		component: <Participants participants={participants} user={user} />,
		outlineIcon: <UserGroupIconOutline className="h-5 w-5" />,
		solidIcon: <UserGroupIconSolid className="h-5 w-5" />,
	},
	{
		label: "profile",
		component: <Profile user={user} />,
		icon: (
			<img
				className="aspect-square h-7 w-7 rounded-md"
				src={user.profileImage}
			/>
		),
	},
	{
		label: "settings",
		component: <Settings />,
		outlineIcon: <Cog6ToothIconOutline className="h-5 w-5" />,
		solidIcon: <Cog6ToothIconSolid className="h-5 w-5" />,
	},
];

const Sidebar = ({ enabledSections, toolTipDir }) => {
	if (Object.prototype.toString.call(enabledSections) !== "[object Array]")
		return null;

	const { sideBarOpen, sideBarSection, dispatchToSidebar } = useSidebarStore((store) => ({
		sideBarOpen: store.sideBarOpen,
		sideBarSection: store.sideBarSection,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const findTabIndex = (tabLabel) => {
		const found = Tabs.filter((tab) =>
			enabledSections.includes(tab.label)
		).findIndex((tab) => tab.label === tabLabel);
		if (found) return found;
		return 0;
	};

	return (
		<>
			<div className="relative flex h-full w-full bg-neutral-50 dark:bg-neutral-900">
				<>
					<Tab.Group
						selectedIndex={findTabIndex(sideBarSection)}
						onChange={(idx) =>
							dispatchToSidebar({
								type: "SET_SIDEBAR_SECTION",
								payload: enabledSections[idx],
							})
						}
					>
						<Tab.List className="z-20 h-screen h-screen-ios flex flex-col border-x border-neutral-200 dark:border-neutral-800 bg-neutral-50 px-2 py-3 dark:bg-neutral-900 space-y-5 md:rounded-none md:p-2 md:pr-2">
							{Tabs.filter((tab) =>
								enabledSections.includes(tab.label)
							).map((tab) => (
								<span
									key={tab.label}
									className={classNames(
										tab.label === "profile"
											? "flex flex-grow flex-col justify-end space-y-3"
											: ""
									)}
								>
									<Tab
										className={({ selected }) =>
											classNames(
												"group relative flex aspect-square w-full flex-col items-center justify-center rounded-md text-sm transition-all duration-200 focus-visible:outline-0",
												selected && sideBarOpen
													? "bg-neutral-200 text-slate-900 dark:bg-neutral-800 dark:text-slate-100"
													: "bg-neutral-50 text-slate-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-700"
											)
										}
									>
										{({ selected }) => (
											<>
												{tab.icon
													? tab.icon
													: selected
													? tab.solidIcon
													: tab.outlineIcon}
												<Tooltip
													position={toolTipDir}
													label={tab.label}
												/>
											</>
										)}
									</Tab>
								</span>
							))}
							<span
								className={classNames(
									enabledSections.includes("profile")
										? ""
										: "flex flex-grow flex-col justify-end space-y-3"
								)}
							>
								<span
									className="group relative flex aspect-square w-full flex-col items-center justify-center rounded-full p-3 text-sm transition-all duration-200focus-visible:outline-0 bg-neutral-50 text-slate-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-700"
									onClick={() =>
										dispatchToSidebar({
											type: "TOGGLE_SIDEBAR_STATE",
										})
									}
								>
									{sideBarOpen ? (
										<ArrowRightOnRectangleIconSolid className="h-5 w-5" />
									) : (
										<ArrowLeftOnRectangleIconOutline className="h-5 w-5" />
									)}
									<Tooltip
										position={toolTipDir}
										label={
											sideBarOpen
												? "Close Sidebar"
												: "Open Sidebar"
										}
									/>
								</span>
							</span>
						</Tab.List>
						<Transition
							as={Fragment}
							show={sideBarOpen}
							enter="transition ease-in-out duration-500 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-500 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Tab.Panels className="z-10 w-full bg-neutral-50 dark:bg-neutral-900 border-x border-neutral-200 dark:border-neutral-800">
								{Tabs.filter((tab) =>
									enabledSections.includes(tab.label)
								).map((tab) => (
									<Tab.Panel
										key={tab.label}
										className="h-full w-full divide-y divide-neutral-200 bg-neutral-50 outline-none transition-all duration-200 dark:divide-neutral-800 dark:bg-neutral-900"
									>
										<div className="flex h-16 w-full items-center space-x-2 bg-neutral-50 py-2 px-4 text-slate-900 dark:bg-neutral-900 dark:text-slate-200">
											<span className="flex-1 text-xl capitalize">
												{tab.label}
											</span>
										</div>
										{tab.component}
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Transition>
					</Tab.Group>
				</>
			</div>
		</>
	);
};

Sidebar.defaultProps = {
	enabledSections: [
		// "agenda",
		"chat",
		// "doubt",
		"pastebin",
		"users",
		"profile",
		"settings",
	],
	toolTipDir: "left",
};

export default Sidebar;

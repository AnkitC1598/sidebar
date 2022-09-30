import { Input } from "../../../submodules/shared/components/atoms";
import { Resource } from "../../molecules";

const handouts = [
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
		link: "https://lucdn.letsupgrade.net/20220823_73_99af8b3d57.pdf",
		createdAt: "2022-05-19T13:27:31.350Z",
		ext: "pdf",
		source: "file",
		name: "Final-M-Tech-CTIS.pdf",
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

const Handouts = () => {
	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen">
				{handouts.length ? (
					<>
						<ul className="flex h-full w-full flex-col-reverse divide-y divide-y-reverse divide-neutral-200 overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-screen">
							{handouts.map((handout, idx) => (
								<Resource
									key={handout._id}
									resource={handout}
								/>
							))}
						</ul>
						<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Add Handout" />
						</div>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							{/* <img
								src="/assets/img/noResource.png"
								alt="No Agenda's Listed"
								className="w-[25%] md:w-[60%]"
							/> */}
							<div className="text-slate-500">
								No Handouts Found
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Handouts;

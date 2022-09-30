import { Input } from "../../../submodules/shared/components/atoms";
import { Resource } from "../../molecules";

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
];

const PasteBin = () => {
	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen">
				{resources.length ? (
					<>
						<ul className="flex h-full w-full flex-col-reverse divide-y divide-y-reverse divide-neutral-200 overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-screen">
							{resources.map((resource, idx) => (
								<Resource
									key={resource._id}
									resource={resource}
								/>
							))}
						</ul>
						<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Add Resource" />
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
								No Resources Found
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default PasteBin;

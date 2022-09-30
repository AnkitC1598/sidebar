import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { FileResource } from "..";
import { Options, Toggle } from "../../../submodules/shared/components/atoms";
import { classNames, urlify } from "../../../submodules/shared/utils";

const Handout = ({ resource }) => {
	const [copied, setCopied] = useState(false);
	const handleToggleVisibility = (resource) => {
		console.log(!resource.isVisible);
		// toggleVisibility({
		// 	_id: resource._id,
		// 	roomId: pasteBinRoomId || classCode,
		// 	isVisible: !resource.isVisible,
		// });
	};

	const copy = () => {
		let text;
		if (resource.link.length)
			text =
				typeof resource.link === "object"
					? resource.link[0]
					: resource.link;
		text += resource.text;
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<li className="group flex flex-col bg-neutral-50 p-4 dark:bg-neutral-900">
				<div className="flex flex-col space-y-1 items-start text-sm">
					{/* {resource.link.length ? (
							<LinkPreview
								url={
									typeof resource.link === "object"
										? resource.link[0]
										: resource.link
								}
								imageHeight={0}
								descriptionLength={0}
								borderRadius={5}
								openInNewTab={true}
								className="mb-2 break-words"
							/>
						) : null} */}
					{resource.link.length ? (
						<div
							className="break-all"
							dangerouslySetInnerHTML={{
								__html: urlify(
									typeof resource.link === "object"
										? resource.link[0]
										: resource.link
								).text,
							}}
						/>
					) : null}
					<div
						className="break-all"
						dangerouslySetInnerHTML={{
							__html: resource.text,
						}}
					/>
				</div>
				<span className="flex justify-between items-center">
					<span className="text-xs text-slate-300 dark:text-slate-700">
						{formatDistanceToNow(new Date(resource.createdAt), {
							addSuffix: true,
							includeSeconds: true,
						})}
					</span>
					<span className="flex space-x-2 items-center">
						<span
							className={classNames(
								"inline-flex items-center p-2 text-sm font-medium text-gray-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-0 cursor-pointer",
								copied ? "block" : "group-hover:block hidden"
							)}
						>
							{copied ? (
								<span className="text-green-500 text-xxs">
									Copied
								</span>
							) : null}
							<DocumentDuplicateIcon
								className={classNames(
									"h-5 w-5",
									copied
										? "text-green-500"
										: "text-slate-900 dark:text-slate-200"
								)}
								onClick={copy}
							/>
						</span>
						<Toggle
							value={resource.isVisible}
							size="sm"
							onChange={() => handleToggleVisibility(resource)}
						/>
						<Options
							options={[
								{
									label: "Report",
									action: () =>
										console.log("Report Handout"),
								},
							]}
						/>
					</span>
				</span>
			</li>
		</>
	);
};

export default Handout;

import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { formatDistanceToNow } from "date-fns";
import { FileResource } from "..";
import { Toggle } from "../../../submodules/shared/components/atoms";
import { urlify } from "../../../submodules/shared/utils";

const Resource = ({ resource }) => {
	const handleToggleVisibility = (resource) => {
		console.log(!resource.isVisible);
		// toggleVisibility({
		// 	_id: resource._id,
		// 	roomId: pasteBinRoomId || classCode,
		// 	isVisible: !resource.isVisible,
		// });
	};

	return (
		<>
			<li className="flex flex-col space-y-4 bg-neutral-50 p-4 dark:bg-neutral-900">
				<div className="flex items-start">
					<div className="w-full">
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
								className="break-words"
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
							className="break-words"
							dangerouslySetInnerHTML={{
								__html: resource.text,
							}}
						/>
					</div>
				</div>
				<span className="flex justify-between">
					<span className="text-xs text-slate-300">
						{formatDistanceToNow(new Date(resource.createdAt), {
							addSuffix: true,
							includeSeconds: true,
						})}
					</span>
					<Toggle
						value={resource.isVisible}
						size="sm"
						onChange={() => handleToggleVisibility(resource)}
					/>
				</span>
			</li>
		</>
	);
};

export default Resource;

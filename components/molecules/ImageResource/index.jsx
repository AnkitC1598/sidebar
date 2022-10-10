import React, { useState } from "react";
import { classNames } from "../../../submodules/shared/utils";
import { ResourcePreview } from "..";

const ImageResource = ({ resource, handleToggleVisibility }) => {
	const [showPreview, setShowPreview] = useState(false);

	const closePreview = () => {
		setShowPreview(false);
	};
	return (
		<>
			<div className="flex justify-center space-x-2 w-full">
				<div className="flex content-center justify-center min-w-[25%] max-w-[75%]">
					<img
						src={
							resource.ext === "svg"
								? "https://cdn2.iconfinder.com/data/icons/business-and-marketing-17/64/Image-512.png"
								: resource.link
						}
						alt={
							resource.ext === "svg"
								? "Could Not Load Resource"
								: resource.name
						}
						title={
							resource.ext === "svg"
								? "Could Not Load Resource"
								: resource.name
						}
						className={classNames(
							"rounded-lg",
							resource.ext === "svg" && "w-10"
						)}
						onClick={() => {
							if (resource.ext !== "svg") {
								setShowPreview(true);
							}
						}}
					/>
				</div>
				<div
					className="break-all"
					dangerouslySetInnerHTML={{
						__html: resource.text,
					}}
				/>
			</div>
			<ResourcePreview
				isOpen={showPreview}
				close={closePreview}
				resource={resource}
				handleToggleVisibility={() => handleToggleVisibility(resource)}
			/>
		</>
	);
};

export default ImageResource;

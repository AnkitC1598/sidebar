import { z } from "zod";

const ChatSchema = {
	initGroup: z.object({
		title: z
			.string({
				required_error: "Title is required",
				invalid_type_error: "Title must be string.",
			})
			.max(25, {
				message: "The title should be less that 25 characters.",
			}),
		description: z
			.string({
				invalid_type_error: "Description must be string.",
			})
			.max(512, {
				message: "Description must be less than 512 characters.",
			}),
	}),
	initChat: z.object({
		user: z.string({
			required_error: "User uid is required.",
		}),
	}),
	addToChat: z.object({
		chatId: z.string({
			required_error: "Chat ID is required.",
			invalid_type_error: "Chat ID must be string.",
		}),
		uid: z.string({
			required_error: "User uid is required.",
			invalid_type_error: "User uid must be string.",
		}),
	}),
};

export default ChatSchema;

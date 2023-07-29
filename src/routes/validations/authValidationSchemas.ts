import vine, { VineObject } from "@vinejs/vine";

export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string(),
});

export const registerSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(8).maxLength(32).confirmed(),
});

// const fields = {
//   email: "email",
//   password: "password",
// };
// export const requiredMessages = {
//   required: "the {{field}} is required",
// };
// export const loginValidations = {
//   schema: loginSchema,
//   fields,
//   messages: requiredMessages,
// };

import {updateUserSchema, createUserSchema} from "../../utils/dataValidations/user.js";

export default async function (req, res, next) {
  try {
    const result = await (req.method === 'POST' ? createUserSchema : updateUserSchema).validateAsync(req.body)
    return next();
  } catch (e) {
    next(e);
  }

}
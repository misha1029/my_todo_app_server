import {User} from './../db/models';


export async function createUser(req, res, next) {
  try {
    const createdUser = await User.create( req.body);
    if (createdUser){
      return res.stat (201).send (createdUser);
    }
  }catch (e) {
    next(e);
  }

}
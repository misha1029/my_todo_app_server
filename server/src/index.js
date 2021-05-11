/*import {User} from './db/models'

function createUser(user) {

}

async function getUser(id) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      return user.get();
    } else {
      throw new Error('404')
    }
  } catch (e) {
    console.error(e)
  }
}

async function updateUser(id, data) {
  try {
    const oldUser = await User.findByPk(id)
    const updatedUser = await oldUser.update(data)
    return updatedUser.get();
  } catch (e) {
    throw e
  }
}

getUser(87)
  .then(console.log)
  .catch(console.error);

updateUser(87,{firstName: 'Messi'})
  .then(console.log)
  .catch(console.error);*/

////////////////////////////////////////////////////////////

/*import {User, Task} from './db/models'

async function getAllUsersWithTasks() {
  try {
    const users = await User.findAll({
                                       include: [
                                         {
                                           model: Task
                                         }
                                       ]
                                     })
    return users.map(user => user.toJSON())
  } catch (e) {

  }
}

getAllUsersWithTasks().then(console.log).catch(console.error)*/

//////////////////////////////////////////////////////////////////////////////
// трансакция
/*
import {sequelize, CreditCard} from './db/models';

/!**
 *
 * @param {any} fromCardId
 * @param {any}tocardId
 * @param {number} value
 * @return {Promise<void>}
 *!/
async function transaction(fromCardId, toCardId, value) {
  if (value > 0) {

    const fromCard = await CreditCard.findByPk(fromCardId);
    const toCard = await CreditCard.findByPk(toCardId);
    if (fromCard && toCard) {
      const t = sequelize.transaction();
      const updatedFromCard = await fromCard.update({
                                                      balance: fromCard.get().balance - value,
                                                      transaction: t,
                                                    });
      if (updatedFromCard.balance < 0) {
        await t.rollback();
        throw new Error();
      }
      await toCard.update({
                            balance: toCard.get().balance + value,
                            transaction: t,
                          });
      await t.commit()
    }

  }
}

transaction(1, 2, 10000)
  .then(console.log)
  .catch(console.error);*/
///////////////////////////////////////////////////////////////

import express from 'express';
const cors = require('cors');
import router from "./router";
import errorHandler from "./middlewares/errorHandler.js";

const PORT = 7777;

const app = express();
app.use(cors());
app.use(express.json()) //Content-type application/json

app.use(router);
app.use (errorHandler);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
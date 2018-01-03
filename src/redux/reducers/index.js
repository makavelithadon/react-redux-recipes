import { combineReducers } from "redux";
import recipes from './recipes'
import ingredients from './ingredients'
import filter from './searchFilter'

const app = combineReducers({
  recipes,
  ingredients,
  filter
})

export default app

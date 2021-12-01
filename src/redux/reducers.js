import { COMPUTE_FORMULA } from "../actions/types";

//value of A for default settings of 1000, 1, 1
const defaultSetting = ( 1000 * (1 + (0.01 * 1)) );

export default function result(state = defaultSetting, action) {
  switch (action.type) {
    case COMPUTE_FORMULA:
	  //rate input must be moved 2 decimal places
	  const fraction = (action.rate / 100);
	  //A=P(1+rt) main formula
      return action.principal * (1 + (fraction * action.time));
    default:
	  return state;
  }
};
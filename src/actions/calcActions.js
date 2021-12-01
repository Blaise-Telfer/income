import { COMPUTE_FORMULA } from "./types";

//action called in the component
export const calculate = (principal, rate, time) => {
  return {
    type: COMPUTE_FORMULA,
    principal, rate, time
  };
}
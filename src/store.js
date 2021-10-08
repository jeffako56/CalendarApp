import { init } from "@rematch/core";
import * as models from "./models/events";

const store = init({ models });

export default store;

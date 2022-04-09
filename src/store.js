import { createStore } from "redux";
import data from "./assets/InitialDashboardData";
import rootReducer from "./redux/reducer";

const dataStorage = JSON.parse(window.localStorage.getItem("dashBoardData"));

const initialState = () => {
  if (dataStorage && dataStorage.lists) {
    return dataStorage;
  } else {
    window.localStorage.setItem("dashBoardData", JSON.stringify(data));
    return data;
  }
};

const initialData = {
  data: initialState()
}

const store = createStore(
  rootReducer,
  initialData
);

export default store;
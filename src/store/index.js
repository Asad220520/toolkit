import { todoSlice } from "./reducers/TodoSlice";
import { TodoSlice2 } from "./reducers/TodoSlice2";
import TodoSlice3 from "./reducers/TodoSlice3";
import { userSlice } from "./reducers/UserSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  todo2: TodoSlice2.reducer,
  user: userSlice.reducer,
  todo3: TodoSlice3,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

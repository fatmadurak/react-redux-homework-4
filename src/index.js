import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { favoritesReducer } from "./store/reducers/FavoritesReducer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(favoritesReducer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
 <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

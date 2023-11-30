
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux-toolkit/store.tsx";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
     <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    <App  />
  </PersistGate>
  </Provider>,
  document.getElementById("root")

);


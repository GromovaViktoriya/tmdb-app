import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import App from "./app/ui/App.tsx";
import {store} from "@/app/model/store.ts";
import 'react-loading-skeleton/dist/skeleton.css';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Provider store = {store}>
          <App />
      </Provider>
  </BrowserRouter>,
)

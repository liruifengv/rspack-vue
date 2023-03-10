import { RouterLink, RouterView } from 'vue-router'
import vueLogo from "./assets/vue.svg";
import "./App.css";

export default {
  name: "App",

  setup() {
    return () => (
      <div class="App">
        <header>
          <h1>Rspack + Vue JSX</h1>
          <div>
            <a href="https://vuejs.org" target="_blank">
              <img src={vueLogo} class="logo vue" alt="Vue logo" />
            </a>
          </div>
          <nav>
            <RouterLink class="nav-item" to="/">Home</RouterLink>
            <RouterLink class="nav-item" to="/about">About</RouterLink>
          </nav>
        </header>
        <RouterView />
      </div>
    );
  },
};

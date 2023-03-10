import { useCounterStore } from '../stores/counter.js'

export default {
  name: "Counter",

  setup() {
    const store = useCounterStore()

    return () => (
      <div class="Counter">
        <div class="card">
          <div>
            count is {store.count}
          </div>
          <div>
            doubleCount is {store.doubleCount}
          </div>
          <button onClick={()=>store.increment()}>increment</button>
        </div>
      </div>
    );
  },
};

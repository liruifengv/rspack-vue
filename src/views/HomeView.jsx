import { ref, onMounted, onUnmounted } from 'vue';
import Counter from '../components/Counter.jsx'

export default {
  name: "Home",

  setup() {
    const x = ref(0)
    const y = ref(0)

    function update(event) {
      x.value = event.pageX
      y.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return () => (
      <div class="Home">
        <h1>This is an home page</h1>
        <div>
          Mouse position is at: { x.value }, { y.value }
        </div>
        <Counter/>
      </div>
    );
  },
};

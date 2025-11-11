import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.directive("fade", {
    beforeMount(el) {
        // état initial invisible
        el.style.opacity = 0;
        el.style.transform = "translateY(10px)";
        el.style.transition = "opacity .6s ease, transform .6s ease";
    },
    mounted(el) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.style.opacity = 1;
                        el.style.transform = "translateY(0)";
                        observer.unobserve(el); // ne se rejoue pas à chaque scroll
                    }
                });
            },
            {
                threshold: 0.2 // 20% visible → fade in
            }
        );

        observer.observe(el);
    }
});

app.mount('#app')

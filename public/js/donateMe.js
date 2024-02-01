// let donateCounter = document.querySelector('#donate-counter');
// let index = 1;

// donateCounter.addEventListener('click', () => {
//     let el = document.querySelector(`.article-content > div:nth-child(${index})`);
//     if (el) {
//         el.style.display = 'block';
//         index++;
//     }
// })


Vue.createApp({
    data() {
        return {
            message: '斗內有什麼好處?',
            index: 0
        }
    },
    methods: {
        donateControl() {
            this.index++;
        },
    },
    mounted() {
        console.log(1);
    }
}).mount('#introduce');
const { createApp } = Vue  //creo un objeto VUE llamdo createApp

createApp({
    data() {
return {
    url: 'https://api-fotos-juli.onrender.com/api/fotos/',
    //url: 'https://rickandmortyapi.com/api/character/',
    photos: [],
 
  
    }
},
methods: {
    async fetchData(url) {
        const res = await fetch(url);
        data = await res.json();
        
        this.photos = data;
      
        }
},
async created() {
    await this.fetchData(this.url)
}
}).mount('#app')

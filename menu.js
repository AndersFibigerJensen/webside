const baseurl="http://localhost:5276/"

const app = Vue.createApp({
    data() {
        return {
            StoreCluster:0,
            ProductCluster:0
        };
    },
    async created()
    {
        this.products=await this.getproducts()
        this.stores=await this.getstores()
    },
    methods: 
        {
            async getstores()
            {
                try
                {
                     await axios.get(baseurl + "Api/ProductCluster" + "?category="-1 +"&store_id=" + 1 +"&cluster=" +1)
                }
                catch(ex)
                {
                    alert(ex.message)
                }         
            },      
            async getproducts()
            {
                try
                {
                     await axios.get(baseurl + "Api/StoreCluster")
                }
                catch(ex)
                {
                    alert(ex.message)
                }  
            }
        }
    });

app.mount('#App');
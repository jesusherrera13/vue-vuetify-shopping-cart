<template>
  <MainComponent 
    v-if="authenticated" 
    :user="user" 
    :cart="cart" 
    @logout="logout" 
    @addToCart="addToCart"
    @deleteProduct="deleteProduct"
  />
  <LoginComponent v-else @login="login" />
</template>
<script>
export default {
  data() {
    return {
      user: {},
      authenticated: false,
      cart: [],
    }
  },
  created() {
    // let request = window.indexedDB.open("notes_db", 1);
    // console.log(request);
    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.authenticated = true;
    }
  },
  methods: {
    login(user) {
      this.user = user;
      this.authenticated = true;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout() {
      this.user = {};
      this.authenticated = false;
      localStorage.clear();
    },
    addToCart(product) {
      product.quantity = parseInt(product.quantity);

      if(product.quantity > 0) {
        let _product = this.cart.find(item => item.id == product.id);
        
        if(_product == undefined) this.cart.push({...product, total: parseFloat((product.quantity * product.price).toFixed(2))});
        else {
          let index = this.cart.findIndex(item => item.id == _product.id);
          this.cart[index].quantity += product.quantity;
          this.cart[index].total = parseFloat((this.cart[index].quantity * this.cart[index].price).toFixed(2));
        }
      }
    },
    deleteProduct(product) {
      this.cart = this.cart.filter(item => item.id != product.id);
    }
  }
}
</script>
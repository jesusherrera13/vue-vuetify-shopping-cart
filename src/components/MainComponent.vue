<template>
    <v-card>
      <v-layout>
        <v-app-bar>
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </template>
          <v-app-bar-title>Product & Cart</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn class="text-none" stacked>
            <v-badge :content=cart.length color="error">
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>

          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              :title=user.name
            >
              <template v-slot:append>
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      size="small"
                      variant="text"
                      icon="mdi-menu-down"
                      v-bind="props"
                    >
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                      :value="index"
                    >
                      <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                      </template>
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                    
                    <v-divider></v-divider>
                    
                    <v-list-item value="11"
                      @click="$emit('logout')"
                    >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-logout" ></v-icon>
                      </template>
                      <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-list-item>
          </v-list>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              :title=user.name
              :subtitle=user.email
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Products" value="products" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-cart" title="Cart" value="shared" to="/cart"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="min-height: 300px;">
          <router-view 
            :cart="cart"
            :user="user"
            @addToCart="addToCart" 
            @deleteProduct="deleteProduct" 
          >
          </router-view>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  <script>
  // import axios from 'axios';
  import { db } from '@/data/db';
  export default {
    props: {
      user: Object,
      cart: Array,
    },
    data() {
      return {
        products: [],
        drawer: null,
        items: [
          { text: 'My Files', icon: 'mdi-folder' },
          { text: 'Shared with me', icon: 'mdi-account-multiple' },
          { text: 'Starred', icon: 'mdi-star' },
          { text: 'Recent', icon: 'mdi-star' },
          { text: 'Offline', icon: 'mdi-check-circle' },
          { text: 'Uploads', icon: 'mdi-upload' },
          { text: 'Backups', icon: 'mdi-cloud-upload' },
        ],
        fav: true,
        menu: false,
        message: false,
        hints: true,
      }
    },
    created() {
      // axios.get(`https://randomuser.me/api/`)
      //   .then(response => this.products = response.data.results);
  
        // Object.assign(this.currentCar, this.cart);
      this.products = db.map(item => {return {...item, quantity: 0}});

      // console.log(this.products)
    },
    methods: {
      fullName(product) {
        return  product.name + ' (' + product.id +')';
      },
      addToCart(product) {
        this.$emit('addToCart', product);
      },
      deleteProduct(product) {
        this.$emit('deleteProduct', product);
      }
    }
  }
  </script>
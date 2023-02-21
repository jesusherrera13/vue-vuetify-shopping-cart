<template>

    <v-container>
        <v-row>
            <v-col cols="3" v-for="(product, i) in products" :key="i">
              <ProductItem
                :name="product.name"
                :product=product
                @addToCart="addToCart"
              >

              </ProductItem>
              <!-- <v-card :title=fullName(product) subtitle="Subtitle">
                  <v-card-text>
                    <v-row align="center" no-gutters>
                        <v-col
                        cols="5"
                        >
                        Type:
                        </v-col>

                        <v-col cols="7">
                        {{  product.type }}
                        </v-col>
                    </v-row>
                    <v-row align="center" no-gutters>
                        <v-col
                        cols="5"
                        >
                        Price:
                        </v-col>

                        <v-col cols="7">
                        ${{  product.price }}
                        </v-col>
                    </v-row>
                    <v-row align="center" no-gutters>
                        <v-col
                        cols="5"
                        >
                        Quantity:
                        </v-col>

                        <v-col cols="7">
                        <v-text-field 
                          v-model="product.quantity"
                          type="number"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" @click="$emit('addToCart', product)">Add to cart</v-btn>
                  </v-card-actions>
              </v-card> -->
            </v-col>
        </v-row>
    </v-container> 

</template>

<script>
  // import axios from 'axios';
  import { db } from '@/data/db';
  
  export default {
    props: {
      user: Object
    },
    data() {
      return {
        currentUser: {},
        cart: [],
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
  
      //   Object.assign(this.currentUser, this.user);
      this.products = db.map(item => {return {...item, quantity: 0}});
    },
    methods: {
      fullName(product) {
        return  product.name + ' (' + product.id +')';
      },
      addToCart(product) {
        this.$emit('addToCart', product);
      }
    }
  }
  </script>
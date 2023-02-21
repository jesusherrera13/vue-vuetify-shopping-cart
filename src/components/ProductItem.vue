<template>
    <v-card :title=fullName(product) subtitle="Subtitle">
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
                    v-model="currentProduct.quantity"
                    type="number"
                ></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange" @click="$emit('addToCart', currentProduct)">Add to cart</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    props: {
        product:{ 
            type: Object
        },
        name:{ 
            type: String
        },
    },
    data() {
      return {
        currentProduct: {}
      }
    },
    created() {
        Object.assign(this.currentProduct, this.product);
    },
    methods: {
      fullName(product) {
        return  product.name + ' (' + product.id +')';
      }
    }
  }
  </script>
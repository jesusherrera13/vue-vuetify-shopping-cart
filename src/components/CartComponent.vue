<template>
    <v-table>
        <thead>
        <tr>
            <th class="text-left">
                Name
            </th>
            <th class="text-left">
                Qty
            </th>
            <th class="text-left">
                Price
            </th>
            <th class="text-left">
                Total
            </th>
            <th class="text-left">
                
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="product in cart"
            :key="product.id"
        >
            <td>{{ product.name }}</td>
            <td>
                <v-text-field
                    v-model="product.quantity"
                    type="number"
                    @input="calculate(product)"
                >
                </v-text-field>
            </td>
            <td>${{ product.price }}</td>
            <td>${{ product.total }}</td>
            <td>
                <v-btn
                    icon="mdi-trash-can"
                    color="error"
                    @click="$emit('deleteProduct', product)"
                >
                </v-btn>
            </td>
        </tr>
        </tbody>
    </v-table>
</template>
<script>
export default {
    props: {
        cart: Array
    },
    data() {
        return {
            dialog: false
        }
    },
    methods: {
        calculate(product) {
            product.total = parseFloat((product.quantity * product.price).toFixed(2));
        }
    }
}
</script>
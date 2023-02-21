<template>
    <v-container fill-height>
      <v-row class="justify-center align-center">
        <v-col cols="12" sm="8" xs="8" md="6" lg="4">
            <v-card>
                <v-card-title>
                    Login
                </v-card-title>
                <v-card-text>
                    <v-form fast-fail @submit.prevent="login">
                        <v-text-field
                            v-model="user.email"
                            label="Email"
                            type="email"
                        ></v-text-field>

                        <v-text-field
                            v-model="user.password"
                            label="Password"
                            type="password"
                        ></v-text-field>

                        <v-btn type="submit" block class="mt-2">Submit</v-btn>
                    </v-form>
                </v-card-text>
            </v-card> 
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
export default {
    data() {
        return {
            user: {
                email: 'jesusherrera13@gmail.com',
                name: 'Jesús Herrera',
                password: '12345',
            }
        }
    },
    methods: {
        login() {
            delete this.user.password;
            this.$emit('login', this.user);
        }
    }
}
</script>
<template>
    <v-container fill-height>
        <v-sheet class="pa-12" rounded>
            <v-card class="mx-auto px-6 py-8" max-width="344">
                <v-form
                    @submit.prevent="login"
                >
                    <v-text-field
                        v-model="user.email"
                        class="mb-2"
                        clearable
                        label="Email"
                    ></v-text-field>

                    <v-text-field
                        v-model="user.password"
                        clearable
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                    ></v-text-field>

                    <br>

                    <v-btn
                        block
                        color="success"
                        size="large"
                        type="submit"
                        variant="elevated"
                    >
                    Sign In
                    </v-btn>
                </v-form>
            </v-card>
        </v-sheet>
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
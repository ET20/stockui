<template>
<div id="LoginContainer" class="pageContainer">
    <div class="pageContentAbsolut">
<img src="/img/wall.jpg" class="wall-login">
        <section class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <b-field label="Password" class="inpute">
                        <b-input type="password" maxlength="30" password-reveal> </b-input>
                    </b-field>

                    <b-field label="Username" type="is-success" class="inpute" message="This username is available">
                        <b-input  ></b-input>
                    </b-field>
                </div>
            </div>

        </section>

        
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            user: '',
            password: '',
            error: false
        }
    },
    components: {},
    methods: {
        login() {
            this.$http
                .post('/auth', {
                    user: this.user,
                    password: this.password
                })
                .then(request => this.loginSuccessful(request))
                .catch(() => this.loginFailed())
        },

        loginSuccessful(req) {
            if (!req.data.token) {
                this.loginFailed()
                return;
            }

            localStorage.token = req.data.token
            this.error = false

            this.$router.replace(this.$route.query.redirect || '/authors')
        },

        loginFailed() {
            this.error = 'Login failed!';
            delete localStorage.token
        }
    },
    created() {
        this.$store.commit('SET_LAYOUT', 'login-layout')
    }
}
</script>

<style scoped>
@import "Login.min.css";
</style>

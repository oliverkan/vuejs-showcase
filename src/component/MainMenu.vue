<template>
    <div class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link to="/home" class="nav-link">
                <font-awesome-icon icon="home"/>
                Home
            </router-link>
        </li>
        <li class="nav-item">
            <router-link v-if="isUserAdmin" to="/user" class="nav-link">Users</router-link>
        </li>
    </div>
</template>

<script>
    export default {
        name: "MainMenu",
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            },
            isUserAdmin() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('ROLE_ADMIN');
                }
                return false;
            }
        }
    }
</script>

<style scoped>

</style>
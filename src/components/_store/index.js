import { alert } from './alert.module'
import { account } from './account.module'
import { users } from './users.module'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        users
    }
})
<template>
  <div style="background-color: #1a1a1a;">
    <q-layout view="hHh Lpr lff" container style="height: 787px" class="shadow-2 rounded-borders">
      <q-header elevated  style="background-color: #59b984;">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Employees Information System</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        style="background-color: #242424;"
        class=" text-white"
      >
        <q-scroll-area class="fit" >
          <q-list padding class="menu-list">

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <router-link to="/Home" style="text-decoration: none;">
                <q-item-section class=" text-white">
                DashBoard
                </q-item-section>
              </router-link>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <router-link to="/employee_list" style="text-decoration: none;">
                <q-item-section class=" text-white">
                  Employee list
                </q-item-section>
              </router-link>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <router-link to="/about" style="text-decoration: none;">
                <q-item-section class=" text-white">
                  About
                </q-item-section>
              </router-link>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <q-img
       
        src="https://www.freevector.com/uploads/vector/preview/17784/FreeVector-Global-Business-Background-1.jpg"
        style="max-width: 100%; height: 700px;"
        :fit="mode"
      >
       </q-img>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello";

const count = ref(0)
const message  = ref("Q-Music")

const hi = () => {
  sayHello().then(response=>{
    message.value = response.data
  })

}


</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="count++">点击次数{{count}}</q-btn>
  <br>
  <br>
  <q-btn color="primary" @click="hi">请求接口</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

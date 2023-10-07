<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div>
                <input placeholder="Search..." class="form-control mb-2 w-auto form-control-sm" type="text" v-model="searchValue">
                <EasyDataTable buttons-pagination alternating :headers="Header" :items="Item" :rows-per-page="10" :search-field="searchField"  :search-value="searchValue">
                  <template #item-action="{ id }">
                    <button class="btn btn-success btn-sm" @click="itemClick(id)">View Details</button>
                  </template>
                </EasyDataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script setup>

import {ref, onBeforeMount } from "vue";
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter();


const searchField = ["title", "stock"];
const searchValue = ref();


const Header = [
  { text: "TITLE", value: "title" },
  { text: "UNIT PRICE", value: "price"},
  { text: "ITEMS", value: "stock"},
  { text: "ACTIONS", value: "action"},
];

const Item = ref([])


const getProductList = async () => {
  const url = 'https://dummyjson.com/products'; 

  const data = await axios.get(url);
  Item.value = data.data.products;
}

onBeforeMount(() => {
    getProductList();
})


const itemClick = (id) => {
  router.push('/product/' + `${id}`)
}



</script>

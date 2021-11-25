<template>
  <div class="quantity-input">
      <button @click="increase">+</button>
      <input type="text" 
        @keypress="filtraNumeros" 
        @keyup="$emit('quantityChanged', this.quantity)" 
        v-model.number="quantity"/>
      <button @click="decrease">-</button>
  </div>
</template>

<script>
export default {
    name: "QuantityInput",
     data() {
        return {
            quantity: this.quantityInit
        }
    },
    props: {
        quantityInit: Number
    },
    methods: {
        filtraNumeros(e) {
            if(e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
            }
        },
        increase() {
            this.quantity++;
            this.$emit('quantityChanged', this.quantity)
        },
        decrease() {
            if (this.quantity > 0) {
            this.quantity--;
            this.$emit('quantityChanged', this.quantity)
            }
        }
    }

}
</script>

<style>
.quantity-input {
    display: flex;
    align-items:center;
}
input {
    width: 40px;
    height: 25px;
    border: none;
    border-radius: 5px;
}
button {
    width: 30px;
    height: 30px;
    background-color: #F67754;
    border: 2px solid #F67754;
    border-radius: 8px;
    font-size: 2rem;
    line-height: 25px;
    padding-left: 4px;
    color: white;
}
</style>
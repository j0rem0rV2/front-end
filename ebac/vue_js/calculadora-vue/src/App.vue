<script setup>

</script>

<template>
  <div class="calculadora">
    <h1>calculadora</h1>
    <div  class="teclado">
      <input type="number" placeholder="Número 1" />
      <select>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    </div>
  </div>
</template>

<style scoped>

  h1{
    font-size: 3em;
  }
  .calculadora{
  text-align: center;
  margin-top: 80px;
  }
  input, select {
  margin: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>

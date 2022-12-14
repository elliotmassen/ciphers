<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  plainText: "hello world",
});

const cipherText = computed(() => {
  return Array.from(state.plainText.toLowerCase())
    .map((letter) => {
      let index = letterToIndex(letter, 97);

      if (index < 0 || index > 25) {
        return letter;
      }

      index = 25 - index;

      return indexToLetter(index % 26, 97);
    })
    .join("");
});

function letterToIndex(letter, offset) {
  return letter.charCodeAt(0) - offset;
}

function indexToLetter(index, offset) {
  return String.fromCharCode(index + offset);
}
</script>

<template>
  <div>
    <h2>Atbash cipher</h2>
    <p>
      This is a substituion cipher that uses a reversed alphabet to create
      ciphertext. This implementation only handles letters, other characters
      will be ignored.
    </p>

    <div class="field">
      <label for="input">Input</label>
      <input id="input" type="text" v-model="state.plainText" />
    </div>

    <div class="field">
      <label for="cipher">Cipher text</label>
      <span id="cipher">{{ cipherText }}</span>
    </div>
  </div>
</template>

<style scoped>
.field {
  margin-bottom: 1rem;
}

label {
  width: 100%;
  margin: 0 0 0.5rem;
}

@media screen and (min-width: 40em) {
  label {
    width: 10rem;
  }
}
</style>

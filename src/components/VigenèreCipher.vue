<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  plainText: "hello world",
  key: "ab",
});

const cipherText = computed(() => {
  return Array.from(state.plainText.toLowerCase())
    .map((letter, i) => {
      console.log(letter);

      let index = letterToIndex(letter, 97);

      if (index < 0 || index > 25) {
        return letter;
      }

      return indexToLetter((index + getRotation(i)) % 26, 97);
    })
    .join("");
});

const cleanKey = computed(() => {
  return Array.from(state.key.toLowerCase())
    .filter((letter) => {
      console.log(letter);

      let index = letterToIndex(letter, 97);

      return index >= 0 && index < 26;
    })
    .join("");
});

function letterToIndex(letter, offset) {
  console.log(letter);

  return letter.charCodeAt(0) - offset;
}

function indexToLetter(index, offset) {
  return String.fromCharCode(index + offset);
}

function getRotation(i) {
  console.log(cleanKey);
  let keyArray = Array.from(cleanKey.value);
  i = i % keyArray.length;
  let index = letterToIndex(keyArray[i], 97);

  if (index < 0 || index > 25) {
    return i;
  }

  return index;
}
</script>

<template>
  <div>
    <h2>Vigenère cipher</h2>
    <p>
      This is a substituion cipher that uses rotation derived from a key to
      create ciphertext. When using a single letter key, it functions the same
      as the <router-link :to="{ name: 'Caeser' }">Caeser cipher</router-link>.
      This implementation only handles letters, other characters will be
      ignored.
    </p>

    <div class="field">
      <label for="input">Input</label>
      <input id="input" type="text" v-model="state.plainText" />
    </div>

    <div class="field">
      <label for="key">Key</label>
      <input id="key" type="text" v-model="state.key" />
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

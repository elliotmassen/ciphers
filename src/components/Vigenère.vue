<template>
  <div>
    <h2>Vigenère cipher</h2>
    <p>This is a substituion cipher that uses rotation derived from a key to create ciphertext. When using a single letter key, it functions the same as the <router-link :to="{name: 'Caeser'}">Caeser cipher</router-link>. This implementation only handles letters, other characters will be ignored.</p>
    
    <div class="field">
      <label for="input">Input</label>
      <input id="input" type="text" v-model="input">
    </div>
    
    <div class="field">
      <label for="key">Key</label>
      <input id="key" type="text" v-model="key">
    </div>
      
    <div class="field">
      <label for="cipher">Cipher text</label>
      <span id="cipher">{{cipherText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vigenère",
  data() {
    return {
      input: "hello world",
      key: "ab",
    };
  },
  computed: {
    cipherText () {
      return Array.from(this.input.toLowerCase()).map((letter, i) => {
        let index = this.letterToIndex(letter, 97)
                                       
        if (index < 0 || index > 25) {
          return letter
        }
        
        return this.indexToLetter((index + this.getRotation(i)) % 26, 97)
      }).join("")
    },
    cleanKey () {
      return Array.from(this.key.toLowerCase()).filter((letter) => {
        let index = this.letterToIndex(letter, 97)
                                       
        return index >= 0 && index < 26
      }).join("")
    }
  },
  methods: {
    letterToIndex(letter, offset) {
      return letter.charCodeAt(0) - offset
    },
    indexToLetter(index, offset) {
      return String.fromCharCode(index+ offset) 
    },
    getRotation(i) {
      let keyArray = Array.from(this.cleanKey)
      i = i % keyArray.length
      let index = this.letterToIndex(keyArray[i], 97)
                                       
      if (index < 0 || index > 25) {
        return i
      }

      return index
    }
  }
};
</script>

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
<template>
  <div>
    <h2>Caeser cipher</h2>
    <p>This is a substituion cipher that uses a set rotation integer to create ciphertext. This implementation only handles letters, other characters will be ignored.</p>
    
    <div class="field">
      <label for="input">Input</label>
      <input id="input" type="text" v-model="input">
    </div>
    
    <div class="field">
      <label for="rotation">Rotation</label>
      <input id="rotation" type="number" v-model="rotation">
    </div>
      
    <div class="field">
      <label for="cipher">Cipher text</label>
      <span id="cipher">{{cipherText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caeser",
  data() {
    return {
      input: "hello world",
      rotation: 2,
    };
  },
  computed: {
    cipherText () {
      return Array.from(this.input.toLowerCase()).map((letter) => {
        let index = this.letterToIndex(letter, 97)
                                       
        if (index < 0 || index > 25) {
          return letter
        }
        
        return this.indexToLetter((index + parseInt(this.rotation)) % 26, 97)
      }).join("")
    }
  },
  methods: {
    letterToIndex(letter, offset) {
      return letter.charCodeAt(0) - offset
    },
    indexToLetter(index, offset) {
      return String.fromCharCode(index+ offset) 
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
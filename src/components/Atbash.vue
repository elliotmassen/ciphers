<template>
  <div>
    <h2>Atbash cipher</h2>
    <p>This is a substituion cipher that uses a reversed alphabet to create ciphertext. This implementation only handles letters, other characters will be ignored.</p>
    
    <div class="field">
      <label for="input">Input</label>
      <input id="input" type="text" v-model="input">
    </div>
      
    <div class="field">
      <label for="cipher">Cipher text</label>
      <span id="cipher">{{cipherText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Atbash",
  data() {
    return {
      input: "hello world"
    };
  },
  computed: {
    cipherText () {
      return Array.from(this.input.toLowerCase()).map((letter) => {
        let index = this.letterToIndex(letter, 97)
                                       
        if (index < 0 || index > 25) {
          return letter
        }

        index = 25 - index
        
        return this.indexToLetter((index) % 26, 97)
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
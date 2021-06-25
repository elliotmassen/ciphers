<template>
  <div>
    <h1>Ciphers</h1>

    <p>This is a little project where I intend to implement various ciphers in Vue, just for kicks. You can find the implementations in the <a href="https://github.com/elliotmassen/ciphers">Github repository</a>, please feel free to raise issues for improvements or corrections.</p>

    <nav>
      <ul>
        <li><router-link to="/caeser">Caeser</router-link></li>
        <li><router-link to="/vigenere">Vigenère</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Ciphers',
}
</script>

<style>
  label {
    display: inline-block;
    font-weight: 700;
    margin-right: 1rem;
  }

  input[type=text], input[type=number] {
    width: 100%;
		border:1px solid #bbb;
		border-radius:0.5rem;
		padding:0.5rem;
  }

  @media screen and (min-width: 40em) {
    input[type=text], input[type=number] {
      width: 20rem;
    }
  }
</style>
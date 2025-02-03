<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Your Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Your Email"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div v-if="formSubmitted" class="thank-you-message">
      <p>Thank you for contacting us!</p>
    </div>

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const formSubmitted = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('https://xyz1234.execute-api.us-west-2.amazonaws.com/contact', {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    });

    console.log('Response:', response);
    formSubmitted.value = true;
    form.value = { name: '', email: '', message: '' };
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'There was an issue submitting the form. Please try again later.';
  }
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 120px;
  resize: vertical;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.thank-you-message {
  margin-top: 20px;
  text-align: center;
  color: #28a745;
}
</style>


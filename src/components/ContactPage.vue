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
// import axios from 'axios';

const WEB3FORMS_ACCESS_KEY ="d36f3135-7068-45bf-a9f4-cf05c93f3d4c"

const form = ref({
  name: '',
  email: '',
  message: ''
});

const formSubmitted = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
 try {
    const response :any = await fetch('https://api.web3forms.com/submit', {
      method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            apikey: WEB3FORMS_ACCESS_KEY,
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
          }),
        });
    const result = await response.json();
    if (response.ok) {
      formSubmitted.value = true;
      form.value = { name: '', email: '', message: '' };
    } else {
      errorMessage.value = result.error || 'Failed to submit the form';
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'Failed to submit the form. Please try again later.';
  }
};
</script>

<style scoped>
.contact-page {
  background-color: black;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  background-color: #333;
  color: white;
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
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.thank-you-message {
  margin-top: 20px;
  text-align: center;
  color: #28a745;
}

.error-message {
  margin-top: 20px;
  text-align: center;
  color: #dc3545;
}

/* Responsive Design for Small Screens */
@media (max-width: 768px) {
  .contact-page {
    padding: 10px;
  }

  .form-group {
    margin-bottom: 10px;
  }

  button {
    font-size: 14px;
    padding: 8px;
  }
}
</style>


import { redirect } from 'react-router-dom';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*"
  ],
  theme: {


    extend: {

      fontFamily: {
        "pop": "'Poppins', sans-serif",
        "Aer": "'ADLaM Display', cursive",
        "Aer": "'Roboto', sans-serif"
      }


    },
    plugins: [],
  }
}
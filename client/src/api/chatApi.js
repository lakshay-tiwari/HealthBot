// // Dummy API function that simulates API response
// export const getChatResponse = async (question) => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // Dummy responses - Replace this with actual API call
//   const responses = {
//     "hello": "Hello! How can I help you with your health today?",
//     "how are you": "I'm doing well! How can I assist you with your health concerns?",
//     "what is diabetes": "Diabetes is a chronic condition that affects how your body turns food into energy. There are different types of diabetes, with Type 1 and Type 2 being the most common.",
//     "default": "I'm here to help you with health-related questions. Could you please be more specific?"
//   };

//   return {
//     answer: responses[question.toLowerCase()] || responses.default
//   };
// };
import axios from 'axios';
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

export const getChatResponse = async (question) => {
  const reqBody = {
    question
  }
  try {
    const res = await axios.post(`${BACKEND_URI}`,reqBody)
    return res.data; 
  } catch (error) {
    return { answer: "Something wrong occurs"};
  }
};

// Configuração do projeto Firebase "estoque-antonovicz"
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDD0Npchz9DYiVvT702IiCsh6e92zQXask",
  authDomain: "estoque-antonovicz.firebaseapp.com",
  projectId: "estoque-antonovicz",
  storageBucket: "estoque-antonovicz.firebasestorage.app",
  messagingSenderId: "642128222677",
  appId: "1:642128222677:web:3bfd62320bf88f19cd055c"
};

// Usado para montar o login: "joao" + fazenda "boavista" vira "joao.boavista@fazenda.app"
const DOMINIO_LOGIN = "fazenda.app";

// Leitura de notas com IA (Firebase AI Logic > Gemini Developer API).
// O app tenta os modelos nesta ordem e usa o primeiro que estiver disponível.
const GEMINI_MODELOS = ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-2.5-flash"];

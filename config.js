// Configuração do projeto Firebase "fazenda-estoque"
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB7ddLsYUrdaCt6-9gSF4lGHg9-ZmMdIWA",
  authDomain: "fazenda-estoque.firebaseapp.com",
  projectId: "fazenda-estoque",
  storageBucket: "fazenda-estoque.firebasestorage.app",
  messagingSenderId: "85791925534",
  appId: "1:85791925534:web:d489b42e1ae10d9282150f"
};

// Usado para montar o login: "joao" + fazenda "boavista" vira "joao.boavista@fazenda.app"
const DOMINIO_LOGIN = "fazenda.app";

// Leitura de notas com IA (Firebase AI Logic > Gemini Developer API).
// O app tenta os modelos nesta ordem e usa o primeiro que estiver disponível.
const GEMINI_MODELOS = ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-2.5-flash"];

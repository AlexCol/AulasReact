'use client';

import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="light">
        <Button />
        {children}
      </body>
    </html>
  );
}

function Button() {
  //esse controle precisa ficar num contexto global
  //e possívelmente salvo no cadastro do usuário para manter em acessos futuros
  const [isDarkMode, setIsDarkMode] = useState(false);
  const buttonText = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';

  function toggleDarkMode() {
    if (isDarkMode) {
      document.body.classList.remove('dark'); //ou documentElement ser no Html
      document.body.classList.add('light'); //ou documentElement ser no Html
    } else {
      document.body.classList.remove('light'); //ou documentElement ser no Html
      document.body.classList.add('dark'); //ou documentElement ser no Html
    }
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {

  }, []);

  return (
    <button
      id='dark-mode'
      className="bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded"
      onClick={toggleDarkMode}
    >{buttonText}</button>
  );
}

import type { Metadata } from "next";

import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/owl.carousel.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/templatemo-style.css'

export const metadata: Metadata = {
  title: "Задачи для всех",
  description: "Веб-приложение, реализующее сервис Задачи для всех",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
          <title> Задачи для всех</title>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
          <meta name="description" content=""/>
          <meta name="keywords" content=""/>
          <meta name="author" content="Alex"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </head>
      <body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        {children}
         <script async src="/js/jquery.js"></script>
         <script async src="/js/bootstrap.min.js"></script>
         <script async src="/js/owl.carousel.min.js"></script>
         <script async src="/js/smoothscroll.js"></script>
         <script async src="/js/custom.js"></script>
      </body>
    </html>
  );
}

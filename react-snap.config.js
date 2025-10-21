module.exports = {
    // Динамическая генерация маршрутов для /material/* и /work/*
    include: [
      "/",
      "/production",
      "/aboutUs",
      "/reviews",
      "/materials",
      ...Array.from({ length: 7 }, (_, i) => `/material/${i + 1}`), // Генерация /material/1 до /material/7
      "/ourWorks",
      ...Array.from({ length: 7 }, (_, i) => `/work/${i + 1}`), // Генерация /work/1 до /work/7
      "/contacts"
    ],
    // Минимизация HTML
    minifyHtml: {
      collapseWhitespace: true,
      removeComments: true
    },
    // Параметры Puppeteer
    puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    // Ждём полной загрузки страницы
    waitUntil: "networkidle0",
    puppeteer: {
      waitForTimeout: 10000 // Увеличено до 10 секунд для страниц с видео
    },
    // Игнорировать ресурсы, которые могут замедлить рендеринг (опционально)
    skipThirdPartyRequests: true,
    // Убедитесь, что все ресурсы загружаются локально
    fixWebpackChunksIssue: "CRA" // Для проектов, созданных через Create React App
  };
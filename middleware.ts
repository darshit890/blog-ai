module.exports = {
    load: {
      before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
      after: ['parser', 'router'],
    },
    settings: {
      cors: {
        enabled: true,
        origin: ['*'], // Allow all origins
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'], // Specify allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
      },
    },
  };
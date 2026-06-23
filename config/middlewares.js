module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx, callback) => {
        const origin = ctx.request?.header?.origin || ctx.header?.origin || '';
        const allowed = [
          'http://localhost:5173',
          'http://localhost:3000',
          'http://localhost:3001',
          process.env.FRONTEND_URL || '',
        ];
        const isVercel = origin.endsWith('.vercel.app');
        const isAllowed = isVercel || allowed.includes(origin);
        callback(null, isAllowed ? origin : false);
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

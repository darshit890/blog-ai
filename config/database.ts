import path from 'path';

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-us-east-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.ztizrwplgqzdxesdgtma'),
      password: env('DATABASE_PASSWORD', 'oFAv7OsmCSL9L1om'),
      ssl: env.bool("DATABASE_SSL", false),
    },
    useNullAsDefault: true,
  },
});
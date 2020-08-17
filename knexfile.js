// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:khuljaa@localhost/faculty-network',
    // connection: { user: 'postgres', database: 'faculty-network', password: 'khuljaa' }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // connection: { user: 'postgres', database: 'faculty-network', password: 'khuljaa' }
  }
};

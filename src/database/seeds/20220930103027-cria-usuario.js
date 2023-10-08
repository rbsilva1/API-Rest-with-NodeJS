const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz',
          email: 'luiz@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Joao Pedro',
          email: 'jpedro@gmail.com',
          password_hash: await bcrypt.hash('518259', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Otavio',
          email: 'otavio@gmail.com',
          password_hash: await bcrypt.hash('12123567213', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {},
};

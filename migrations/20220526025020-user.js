"use strict";

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("user",
          {
            id: {
              type: Sequelize.STRING,
              primaryKey: true,
              allowNull: true,
            },
            token:{
              type: Sequelize.STRING,
              defaultValue: "user",
              allowNull: false,
            },
            name: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            email: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            password: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal("now()"),
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal("now()"),
            },
            deleted_at: {
              type: Sequelize.DATE,
              allowNull: true,
            }
          }, {transaction});

      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("user", {transaction});
      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw err;
    }
  }
};

module.exports = (sequelize, DataTypes) => {
  const Number = sequelize.define(
    "Number",
    {
      round: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      number1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number6: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberBon: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }
  );

  return Number;
}
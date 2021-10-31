module.exports = (sequelize, DataTypes) => {
  const Number = sequelize.define(
    "Number",
    {
      round: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }
  
  );
  Number.associate = (db) => {
    db.Number.belongsTo(db.Round);
  }

  return Number;
}
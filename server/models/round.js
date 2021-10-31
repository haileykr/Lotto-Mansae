module.exports = (sequelize, DataTypes) => {
  const Round = sequelize.define(
    "Round",
    {
      round: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    }
  
  );
  Round.associate = (db) => {
    db.Round.hasMany(db.Number);
  }

  return Round;
}
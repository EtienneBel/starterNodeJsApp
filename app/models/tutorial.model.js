// module.exports = (sequelize, Sequelize) => {
//   const Tutorial = sequelize.define("tutorial", {
//     title: {
//       type: Sequelize.STRING,
//     },
//     description: {
//       type: Sequelize.STRING,
//     },
//     published: {
//       type: Sequelize.BOOLEAN,
//     },
//   });

//   return Tutorial;
// };

module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return Tutorial;
};

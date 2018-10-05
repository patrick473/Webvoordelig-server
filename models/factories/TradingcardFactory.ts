import * as Sequelize from "sequelize";
import ITradingcard from "./interfaces/ITradingcard";

type TradingcardInstance = Sequelize.Instance<ITradingcard> & ITradingcard;

function TradingcardFactory(sequelize: Sequelize.Sequelize) {
  const attributes = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: Sequelize.STRING,
    name: Sequelize.STRING,
    cardset: Sequelize.STRING,
    quality: Sequelize.STRING,
    rarity: Sequelize.STRING,
    holo: Sequelize.STRING,
    price: Sequelize.STRING,
    collectornumber: Sequelize.STRING,
    extra: Sequelize.STRING,
    picture: Sequelize.STRING,
    amount: Sequelize.INTEGER
  };
  return sequelize.define<TradingcardInstance, ITradingcard>(
    "tradingcards",
    attributes,
    {
      timestamps: false
    }
  );
}

export default TradingcardFactory;

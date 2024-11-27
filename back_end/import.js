const fs = require("fs");
const Faq = require("./models/faqModel");

const data = JSON.parse(
  fs.readFileSync("./data/faq.json", { encoding: "utf8" })
);

const importData = async (data) => {
  try {
    await Faq.create(data);
    console.log("data has been imported successfuly");
  } catch (err) {
    console.error(err);
  }
};

module.exports = importData;

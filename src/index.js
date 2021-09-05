const fs = require("fs");
const { parseAsync } = require("json2csv");

const fields = ["name", "email", "phone"];

const data = [
  {
    name: "Matheus",
    email: "matheuskael@gmail.com",
    phone: "11999999999",
  },
  {
    name: "Teste",
    email: "tste@gmail.com",
    phone: "11999999999",
  },
];

parseAsync(data, { fields }).then((csv) => {
  const csvtest = csv.split('"').join("");
  console.log(csv.split('"').join(""));

  fs.writeFile("file.xlsx", csvtest, "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
});

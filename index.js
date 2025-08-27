function generateRandomNum(num) {
  return Math.floor(Math.random() * num);
}

const messageStructure = {
  madeUpName: ["Liam", "Toni", "Isaac"],
  madeUpCar: ["VW Golf", "Ford F-150", "Toyota Previa"],
  carRole: ["Full send!", "Go to IKEA", "Take a roadtrip"],
};

let driverCarInfo = [];

for (let info in messageStructure) {
  let option = generateRandomNum(messageStructure[info].length);
  switch (info) {
    case "madeUpName":
      driverCarInfo.push(`Your name is ${messageStructure[info][option]}.`);
      break;
    case "madeUpCar":
      driverCarInfo.push(`You're driving a ${messageStructure[info][option]}.`);
      break;
    case "carRole":
      driverCarInfo.push(
        `Your objective is to ${messageStructure[info][option]}`
      );
      break;
    default:
      driverCarInfo.push("There is not enough info");
  }
}

const formatMessage = (message) => {
  console.log(driverCarInfo.join("\n"));
};

formatMessage(driverCarInfo);

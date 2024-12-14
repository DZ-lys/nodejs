const http = require("http");
const moment = require("moment");
const { faker } = require('@faker-js/faker');
const randomName = faker.person.fullName();
function createRandomUser() {
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
  }
  

http.createServer((req, res) => {
    const fakeUser = createRandomUser
    const birthday = "2006-12-15";
    const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(fakeUser));
})
.listen(8080);

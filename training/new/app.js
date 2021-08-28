const express = require("express");
const { v4: uuidv4 } = require('uuid');


const { sequelize, Users, AadharCardDetails, Addresses, Roles, UserRoles } = require("./models");

const app = express();

app.use(express.json());


// create the users with aadhar details
app.post("/create-user", async (req, res) => {
  const { full_name, country_code, aadharNumber, name } = req.body;

  // create unique id for user
  const uuid = uuidv4();
  try {
    const aadhar = await AadharCardDetails.create({aadharNumber, name});
    const user = await Users.create({ full_name, country_code, aadharId: aadhar.id, uuid });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// add addresses for the users
app.post("/add-address", async (req, res) => {
  const { name, street, city, country, uuid } = req.body;

  try {
    const user = await Users.findOne({ where: { uuid: uuid } });
    const address = await Addresses.create({ name, street, city, country, userId: user.id });

    return res.json(address);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// create a new role
app.post("/create-role", async (req, res) => {
  const { name } = req.body;

  try {
    const roleUuid = uuidv4();
    const role = await Roles.create({ roleUuid,name });

    return res.json(role);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


// add a role to user
app.post("/add-role", async (req, res) => {
  const { userId, roleId } = req.body;

  try {
    const user = await Users.findOne({ where: { uuid: userId } });
    const role = await Roles.findOne({ where: { roleUuid: roleId } });

    const userrole = await UserRoles.create({ roleId: role.id, userId: user.id });

    return res.json({message: `${role.name} role added to user ${user.full_name}`});
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// fetch user details with uuid
app.get("/fetch-user/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await Users.findOne({
      where: { uuid: uuid },
      include: ["adhaar","addresses"],
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


// fetch all roles of user with uuid
app.get("/fetch-userRole/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {

    const user = await Users.findOne({ where: {uuid : uuid}})
    const userrole = await UserRoles.findAll({
      where: { userId: user.id },
      include: ["role"],
    });

    return res.json(userrole);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database Connected");
});

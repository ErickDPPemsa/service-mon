import { AppDataSource } from './src/data/data_source';
import { User } from "./src/models/User";

import { v4 as uuidv4 } from 'uuid';
console.log('Erick');

AppDataSource.initialize()
    .then(async () => {

        console.log("Connected")
        // console.log("Inserting a new user into the database...")
        // const user = new User()
        // user.firstName = "Timber"
        // user.lastName = "Saw"
        // user.age = 25
        // await AppDataSource.manager.save(user)
        // console.log("Saved a new user with id: " + user.id)

        // console.log("Loading users from the database...")
        // const users = await AppDataSource.manager.find(User)
        // console.log("Loaded users: ", users)

        // console.log("Here you can setup and run express / fastify / any other framework.")
        // const user = new User();
        // const id = uuidv4();
        // user.createdBy = '5F32433E-F36B-1410-841F-0016620B22F7';
        // user.roles = 'roles';
        // user.fullName = 'Erick Andrade'
        // user.email = 'erick.andr@pemxd-sa.com'
        // user.userName = 'erick-Arrrdx'
        // user.password = 'Erick1234'

        // await AppDataSource.manager.save(user);

        // const user2 = new User();

        // user2.createdBy = id;
        // user2.roles = 'roles';
        // user2.fullName = 'Erick Andrade'
        // user2.email = 'erick.andrade@pem-sa.com'
        // user2.userName = 'erick-A'
        // user2.password = 'Erick1234'


    }).catch(error => console.log(error))

const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("social_network", "tatyana", "123456abc", {
      host: "localhost",
      dialect: "mysql",
    });

    (async () => {
        const User = sequelize.define(
              "User",
              {
                id: {
                  type: DataTypes.INTEGER,
                  autoIncrement: true,
                  primaryKey: true,
                  allowNull: false,
                },
                firstName: {
                  type: DataTypes.STRING,
                  allowNull: false,
                },
                lastName: {
                  type: DataTypes.STRING,
                },
              },
              {
                tableName: "users",
                timestamps: false,
              }
            );
            
            User.sync();

            const ivan = await User.create({firstName: 'Ivan', lastName: 'Ivanov'});
   const pavel = await User.create({firstName: 'Pavel', lastName: 'Petrov'});

   const Post = sequelize.define("Post", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {  timestamps: false
    });

    Post.sync();

    const post1 = await Post.create({
        title: "Moscow",
        body: "ossljkxx",
        author_id: 14,
         });
        const post2 = await Post.create({
        title: "Paris",
        body: "qksodkcjg",
        author_id: 13,
        });

        const Like = sequelize.define("Like", {
              id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
              },
              user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
            });
            
            Like.sync();

            const like1 = await Like.create({
                user_id: 1,
                post_id: 1,
                 });
                const like2 = await Like.create({
                    user_id: 14,
                    post_id: 15,
                });

//         const users = await User.findAll();

//    users.forEach(user => console.log(user.id, user.firstName));

   
//    const lola = await User.findOne({ where: { firstName: 'Lola' } });


// lola.firstName = 'Alex';
//    await lola.save();
//    let users = await User.findAll();
//    users.forEach(user => console.log(user.id, user.firstName));

//    await User.destroy({
//     where: {
//         id: 2
//     }
//  });

const users = User.findAll({
    where: {
      [Op.or]: [
        { firstName: 'Bob' },
        { firstName: 'Alex'}
      ]} 
     
  }); 
           
        })();

        
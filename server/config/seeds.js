const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Date Night" },
    { name: "Gluten-Free" },
    { name: "Vegetarian" },
    { name: "Kid-Approved" },
    { name: "Dessert" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Asparagus Shrimp Pasta",
      description:
        "This is a healthy, hearty, yet elegant recipe that is good enough for guests. It is also very easy and can be made with little notice.",
      image: "AsparagusShrimpPastas.jpg",
      category: categories[0]._id,
      price: 10.99
    },
    {
      name: "Hawaiian Pork Chops",
      description:
        "Quick and Easy Hawaiian Pork Chops. Pan fried pork chops simmered in a sweet and tangy Hawaiian sauce. Ready in under 25 minutes!",
      image: "HawaiianPorkChop.JPG",
      category: categories[0]._id,
      price: 9.99
    },
    {
      name: "Ground Chicken Tacos with Poblanos",
      category: categories[0]._id,
      description:
        "These 20 minute ground chicken tacos with poblano peppers come together so fast for an easy and healthy dinner recipe.",
      image: "GroundChickenTaco.JPG",
      price: 9.99
    },
    {
      name: "Crispy Monglian Beef",
      category: categories[0]._id,
      description:
        "This Mongolian Beef recipe is super easy to make. Whip this up in under 20 minutes and have the perfect mid-week dinner meal!",
      image: "CrispyMongolianBeef.JPG",
      price: 10.99
    },
    {
      name: "Beef Stew",
      category: categories[1]._id,
      description:
        "This gluten-free beef stew is also beefless! This stew is an easy healthy plant-base version of a classic comfor meal we all grew up with.",
      image: "Beefstew.jpg",
      price: 9.99
    },
    {
      name: "Gluten Free Pizza",
      category: categories[1]._id,
      description:
        "You won't miss the gluten in this crust! Topped with cheesy goodness and turkey pepperoni, this pizza is bound to be a hit with the whole family.",
      image: "gluten-free-pizza.jpg",
      price: 9.99
    },
    {
      name: "Pan Fried Catfish",
      category: categories[1]._id,
      description:
        "Instead of a traditional crunchy coating, you use a Cajun spice blend to season the fish and pan-fried it in a pan coated with cooking spray, which helps keep calories in check and is less involved than deep-fat frying.",
      image: "pan-fried-catfish-with-cajun-tartar-sauce-gf.jpg",
      price: 10.99
    },
    {
      name: "Tomato Basil Sausage Pasta",
      category: categories[1]._id,
      description:
        "Ripe, summer tomatoes are juicy and delicious in this pasta dish, with no seeding or peeling necessary.",
      image: "tomato-basil-sausage-pasta-gf.jpg",
      price: 9.99
    },
    {
      name: "Greek Quinoa Salad",
      category: categories[2]._id,
      description:
        "This healthy Greek Quinoa Salad is an easy make-ahead vegetarian side dish that is ready to rock your plate!",
      image: "GreekQuinoaSalad.JPG",
      price: 9.99
    },
    {
      name: "Rainbow Veggie Wrap",
      category: categories[2]._id,
      description:
        "There's definitely a sushi vibe to these wraps, which are stuffed with vegetables, cheese and hummus and then rolled and sliced. They look impressive but they're easy enough to assemble for an easy lunch or dinner.",
      image: "RainbowVeggieWrap.JPG",
      price: 9.99
    },
    {
      name: "Vegan Pesto Zoodles",
      category: categories[2]._id,
      description:
        "This is a simple summer meal that is bursting with flavor, and ready in under thirty minutes. Bam!",
      image: "VeganPestoZoodles.JPG",
      price: 9.99
    },
    {
      name: "Ratatouille",
      category: categories[2]._id,
      description:
        "This is the best French summer vegetable stew that you can stir up in one pot within 30 minutes.",
      image: "VeganRatatouille.JPG",
      price: 9.99
    },
    {
      name: "Ravioli Casserole",
      category: categories[3]._id,
      description:
        "The whole family will love the fun, cheesy flavor of this ravioli casserole. It's like lasagna without all the fuss! Children can help you assemble this one.",
      image: "RavioliCasserole.JPG",
      price: 4.99
    },
    {
      name: "Tangy Sweet and Sour Meatballs",
      category: categories[3]._id,
      description:
        "A fabulous sauce, green peppers, and pineapple chunks transform premade meatballs into something special.",
      image: "TangySweetandSoutMeatballs.jpg",
      price: 4.99
    },
    {
      name: "Mexican Turkey Roll-Ups",
      category: categories[3]._id,
      description:
        "This is the perfect recipe when you're hungry for a dish with Mexican flavor and want to use turkey. These roll-ups are fun and so tasty, even kids like them.",
      image: "MexicanTurkeyRollUps.JPG",
      price: 4.99
    },
    {
      name: "Chicken Stir-Fry Sheet Pan Meal",
      category: categories[3]._id,
      description:
        "When you need an easy chicken dinner the whole family will love, it doesn't get much better than this Chicken Stir-Fry Sheet Pan Meal. And this recipe is deliciously low in carbs!",
      image: "ChickenStirFrys.JPG",
      price: 4.99
    },
    {
      name: "Chocolate Chip Mug Cake",
      category: categories[4]._id,
      description:
        "This fluffy, warm chocolate chip mug cake bakes in the microwave and has all the decadence you want from a dessert in a single serving! With just a few ingredients, this mug cake whips up in mere minutes and will totally satisfy your chocolatey dessert cravings!",
      image: "chocolate-chip-mug-cake.jpg",
      price: 2.99
    },
    {
      name: "Chocolate Mug Cake",
      category: categories[4]._id,
      description:
        "This easy chocolate mug cake is moist, fluffy, and makes a wonderful dessert for 1 (that means no sharing)! This cake requires no eggs, and it's so simple you just combine the ingredients and pop it in the microwave for a couple of minutes!",
      image: "chocolate-mug-cake.jpg",
      price: 2.99
    },
    {
      name: "Coffee Cake Mug Cake",
      category: categories[4]._id,
      description:
        "This moist and fluffy coffee cake mug cake is an easy single-serving dessert that can be made in your microwave in just 2 minutes! It is a deliciously fluffy cinnamon cake with a cinnamon crumb topping, and it's exactly what you need when those dessert cravings strike!",
      image: "coffee-cake-mug-cake.jpg",
      price: 2.99
    },
    {
      name: "Vanilla Mug Cake",
      category: categories[4]._id,
      description:
        "This is the perfect recipe for hungry childern, this is a dish with Mexican flavor and want to use turkey. These roll-ups are fun and so tasty, even kids like them. It is a different use for leftover turkey.",
      image: "vanilla-mug-cake.jpg",
      price: 2.99
    }
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});

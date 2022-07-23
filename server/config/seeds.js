const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'All Recipes' },
    { name: 'Gluten-Free' },
    { name: 'Vegetarian' },
    { name: 'Kid-Approved' },
   ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Asparagus Shrimp Pasta',
      description:
        'To keep it light, I load it up with lean protein such as shrimp and lots of vegetables!',
      image: 'AsparagusShrimpPasta.JPG',
      category: categories[0]._id,
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Hawaiian Pork Chops',
      description:
        'This is so easy, tastes just like Hawaiian pizza, and I usually have all ingredients on hand.',
      image: 'HawaiianPorkChop.JPG',
      category: categories[0]._id,
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Ground Chicken Tacos with Poblanos',
      category: categories[1]._id,
      description:
        'These 20 minute ground chicken tacos with poblano peppers come together so fast for an easy healthy dinner recipe. So whether you are using it as a family-friendly weeknight dinner recipe or a festive Taco Tuesday, you will want to keep this recipe in your back pocket!',
      image: 'GroundChickenTaco.JPG',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Crispy Mongolian Beef',
      category: categories[1]._id,
      description:
        'This Mongolian Beef recipe is super easy to make and uses simple, readily available ingredients! Whip this up in under 20 minutes and have the perfect mid-week dinner meal!',
      image: 'CrispyMongolianBeef.JPG',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Chicken Bajane',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'chicken-bajane-gf.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Gluten Free Pizza',
      category: categories[2]._id,
      description:
        'The best simple recipe for gluten free pizza dough that anyone can, and should, make is here. Even if you never made homemade pizza before, we are bringing back the chewy, crisp-edged pizza you remember!',
      image: 'gluten-free-pizza.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Pan Fried Catfish',
      category: categories[2]._id,
      description:
        'This recipe for gluten-free beer-battered fried fish produces a crisp, light, and golden end result without the gluten. .',
      image: 'pan-fried-catfish-with-cajun-tartar-sauce-gf.png',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Tomato Basil Sausage Pasta',
      category: categories[3]._id,
      description:
        'Go from stovetop to dinner table in just 30 minutes with my satisfyingly simple and delicious Gluten Free Sausage, Tomato, and Mozzarella Pasta. Featuring fresh tomatoes, mozzarella, spicy and sweet Italian sausage, and a few pantry staples this recipe is a home run for weeknight meals.',
      image: 'tomato-basil-sausage-pasta-gf.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Greek Quinoa Salad',
      category: categories[4]._id,
      description: 'This healthy Greek Quinoa Salad is an easy make-ahead vegetarian side dish that is ready to rock your plate!',
      image: 'GreekQuinoaSalad.JPG',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Rainbow Veggie Wrap',
      category: categories[4]._id,
      description:
        'There is definitely a sushi vibe to these kid-friendly wraps, which are stuffed with vegetables, cheese and hummus and then rolled and sliced. Serve them with store-bought green goddess, a creamy herb-filled dressing, to take it up a notch with ease.',
      image: 'RainbowVeggieWrap.JPG',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Vegan Pesto Zoodles',
      category: categories[4]._id,
      description:
        'Zucchini noodles with pesto are delicious low-carb keto pesto pasta made of spiralized zucchini and cooked in a creamy almond milk pesto sauce.',
      image: 'VeganPestoZoodles.JPG',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Ravioli Casserole',
      category: categories[4]._id,
      description:
        'The whole family will love the fun, cheesy flavor of this ravioli casserole. This like lasagna—without all the fuss! Timesaving ingredients such as prepared spaghetti sauce and frozen ravioli make it a cinch to fix. Children can help you assemble this one.',
      image: 'RavioliCarrerole.JPG',
      price: 4.99,
      quantity: 100
    }
   {
    name: 'Tangy Sweet and Sour Meatballs',
    category: categories[4]._id,
    description:
      'A fabulous sauce, green pepper and pineapple chunks transform premade meatballs into something special. Serving them over rice makes for a satisfying main dish.',
    image: 'TangySweetandSoutMeatballs.JPG',
    price: 4.99,
    quantity: 100
  }
{
  name: 'Mexican Turkey Roll-Ups',
  category: categories[4]._id,
  description:
    'This is the perfect recipe for hungry childern, this is a dish with Mexican flavor and want to use turkey. These roll-ups are fun and so tasty, even kids like them. It is a different use for leftover turkey.',
  image: 'MexicanTurkeyRollUps.JPG',
  price: 4.99,
  quantity: 100
}
{
  name: 'Chicken Stir-Fry Sheet Pan Meal',
  category: categories[4]._id,
  description:
    'When you need an easy chicken dinner the whole family will love, it does not get much better than this Chicken Stir-Fry Sheet Pan Meal. And this recipe is deliciously low in carbs!',
  image: 'ChickenStirFry.JPG',
  price: 4.99,
  quantity: 100
}
]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

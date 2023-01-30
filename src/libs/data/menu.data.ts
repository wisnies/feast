import { IMenu } from '../interfaces/Menu.interface';

export const menu: IMenu = {
  categories: [
    {
      name: 'starters',
      items: [
        {
          title: 'Flash Fried Brussel Sprouts',
          info: 'With parmesan cheese',
          price: 12,
        },
        {
          title: 'Onion Rings',
          info: 'Hoops of onion, battered and fried to perfection',
          price: 8,
        },
        {
          title: 'Southern-style Breaded Okra',
          info: 'Crisp and delicious – a southern classic',
          price: 10,
        },
        {
          title: 'Mozzarella Sticks',
          info: 'Warm, stringy and delicious. Served with marinara sauce',
          price: 11,
        },
        {
          title: 'Fried Pickles',
          info: 'Served with a creamy horseradish sauce',
          price: 9,
        },
      ],
    },
    {
      name: 'salads',
      items: [
        {
          title: 'Grilled Chicken',
          info: '',
          price: 15,
        },
        {
          title: 'Charred Livers',
          info: '',
          price: 13,
        },
        {
          title: 'Vegetarian',
          info: '',
          price: 20,
        },
      ],
    },
    {
      name: 'sandwiches',
      description: 'All sandwiches served with one side.',
      items: [
        {
          title: 'Sliced or Pulled Pork Sandwich',
          info: 'Served on a fresh toasted bun',
          price: 15,
        },
        {
          title: 'Smoked Turkey Sandwich',
          info: 'Sliced and piled high on a fresh toasted bun',
          price: 16,
        },
        {
          title: 'Sloppy Joe Sandwich',
          info: 'Our famous special recipe sauce mixed with our sweet and smoky pulled pork',
          price: 18,
        },
        {
          title: 'Smokehouse Bacon Burger',
          info: '8 oz. Angus beef smothered with cheddar cheese and topped with caramelized onions, crisp applewood smoked bacon, and an onion ring served on a kaiser roll with chipotle mayo',
          price: 22,
        },
        {
          title: 'Pa’s BBQ Burger',
          info: 'Topped with slow smoked pulled pork, caramelized onions, cheddar cheese and sweet BBQ sauce',
          price: 28,
        },
        {
          title: '1/4lb All Beef Hot Dog',
          info: 'A classic Sabrett all-beef dog chargrilled to perfection',
          price: 11,
        },
      ],
    },
    {
      name: 'lunch platters',
      description:
        'All lunch platters are served with your choice of french fries, baked potato, sweet potato or broccoli.',
      items: [
        {
          title: 'Smoked Quarter Chicken',
          info: 'White or dark meat seasoned with our secret recipe rub and slow smoked over an oak fire',
          price: 25,
        },
        {
          title: 'Chargrilled Franks and Beans',
          info: 'Two 1/4 pound all-beef franks, chargrilled and served with a double portion of our awesome baked beans',
          price: 27,
        },
        {
          title: 'Chicken Wings',
          info: 'Six wings served mild, medium or hot with celery and bleu cheese or ranch dressing',
          price: 19,
        },
        {
          title: 'BBQ Beef Brisket',
          info: 'Slow smoked for 14 hours',
          price: 30,
        },
      ],
    },
    {
      name: 'dinners',
      description:
        'All dinners are served with coleslaw or baked beans, garlic toast and your choice of french fries, baked potato, sweet potato or broccoli.',
      items: [
        {
          title: 'Choice Angus Ribeye (14oz)',
          info: 'Lightly seasoned and charred to perfection',
          price: 30,
        },
        {
          title: 'Baby Back Ribs Combo',
          info: 'A half rack of our famous ribs with your choice of a quarter chicken or pork (Extra charge for brisket)',
          price: 35,
        },
        {
          title: 'The Wagon (for four)',
          info: 'Experience our love affair with barbecue four ways: slow smoked chicken, tasty spare ribs, tender brisket and sweet and smoky pork - Served with corn on the cobb (Swap out the spare ribs for baby backs for an extra charge)',
          price: 90,
        },
        {
          title: 'Tail Gate (for four)',
          info: 'Sweet, smoky spare ribs and eight pieces of BBQ chicken are even better when you have someone to share with! - Served with corn on the cobb (Swap out the spare ribs for baby backs for an extra charge)',
          price: 97,
        },
        {
          title: 'Pulled or Sliced Pork',
          info: 'Satisfy your BBQ cravings!',
          price: 27,
        },
        {
          title: 'BBQ Beef Brisket',
          info: 'Slow smoked',
          price: 33,
        },
      ],
    },
    {
      name: 'sides',
      items: [
        {
          title: 'Baked Beans',
          info: 'Homemade with our secret recipe',
          price: 2,
        },
        {
          title: 'Coleslaw',
          info: 'Sweet, tangy and made from scratch',
          price: 2,
        },
        {
          title: 'Potato Salad',
          info: 'Made fresh from Nana’s recipe',
          price: 3,
        },
        {
          title: 'Collard Greens',
          info: 'Soulful and delicious',
          price: 4,
        },
        {
          title: 'Corn on the Cob',
          info: 'Fresh, sweet and hot',
          price: 2,
        },
        {
          title: 'Fried Corn on the Cob',
          info: 'A crispy and light alternative',
          price: 3,
        },
        {
          title: 'Garlic Toast',
          info: 'Three pieces served warm',
          price: 2,
        },
        {
          title: 'Broccoli',
          info: 'Fresh and steamed until tender',
          price: 3,
        },
      ],
    },
    {
      name: 'desserts',
      items: [
        {
          title: 'Homemade Fruit Cobbler A la mode',
          info: 'Topped with vanilla ice cream and whipped cream',
          price: 12,
        },
        {
          title: 'Key Lime Pie',
          info: 'Our home made, light and creamy key lime pie in a graham cracker crust',
          price: 13,
        },
        {
          title: 'Oreo Cookie Cake',
          info: 'A yummy chocolate dessert with a cream filling served in an Oreo crust',
          price: 16,
        },
      ],
    },
  ],
  description:
    'Adipisicing elit. Laudantium animi, minima vel dicta dolorem iusto accusamus ad, voluptates veritatis odio neque itaque quae ex numquam! Quos repellendus iste laborum accusantium facere dolorem molestias at natus corporis a modi, adipisci iusto.',
};

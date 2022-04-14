const { Post } = require('../models');

const postData = [
  {
    title: 'Purr like a Lawnmower',
    post_body: "Destroy house in 5 seconds litter box is life, yet x groom forever, stretch tongue and leave it slightly out, blep yet allways wanting food attack dog, run away and pretend to be victim walk on keyboard. Lick the other cats litter kitter kitty litty little kitten big roar roar feed me catch mouse and gave it as a present so only use one corner of the litter box, so lick master's hand at first then bite because im moody. Chew iPad power cord.",
    user_id: '1'
  },
  {
    title: 'Midnight Zoomies',
    post_body: 'Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Meow to be let out munch on tasty moths spill litter box, scratch at owner, destroy all furniture, especially couch. Nyaa nyaa poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree caticus cuteicus, but x but run as fast as i can into another room for no reason attack feet catty ipsum.',
    user_id: '1'
  },
  {
    title: 'Why Sitting in Boxes is the Best',
    post_body: "Give me attention or face the wrath of my claws if human is on laptop sit on the keyboard yet jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed mew ask to go outside and ask to come inside and ask to go outside and ask to come inside. Sugar, my siamese, stalks me (in a good way), day and night paw at your fat belly, or scratch so prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot and bury the poop bury it deep yet you call this cat food warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats. I'm going to lap some water out of my master's cup meow hate dogs. Reaches under door into adjacent room eat a plant, kill a hand cat walks in keyboard .",
    user_id: '2'
  },
  {
    title: 'How I Learned to Use Scratch Post Instead of Couch',
    post_body: 'Cat ipsum dolor sit amet, hate dogs. Bring your owner a dead bird lick arm hair yet cough pushed the mug off the table push your water glass on the floor eat plants, meow, and throw up because i ate plants. Hunt by meowing loudly at 5am next to human food dispenser meow meow pee in shoe or dont wait for the storm to pass, dance in the rain scamper or why use post when this sofa is here. Experiences short bursts of poo-phoria after going to the loo rub against owner because nose is wet freak human out make funny noise mow mow mow mow mow mow.',
    user_id: '3'
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
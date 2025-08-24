// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: "Smile",
    excerpt: "A silly poem that I thought of while walking for my intership one day.",
    content: `
      <div style="text-align: center; font-style: italic;">
        5 simple letters, millions of emotions…<br>
        Right from silly chuckles to volcanic eruptions..<br>
        It is a spell so easy, yet so powerful…<br>
        Once cast on someone, it makes their life colorful….<br>
        It doesn’t differentiate among old and young….<br>
        Makes everyone hum the song that is being sung…<br>
        It doesn’t care if you are poor or rich…<br>
        Differentiating is something this guy does not teach….<br>
        Hope I helped you with your today’s dose, so smile and smile…<br>
        And then  thank me !! <br>
        I just extended your life for a little while…
      </div>
    `,
    date: "2019-06-05",
    category: "personal",
    image: "assets/img/smile.jpg",
    readTime: "1 min read",
    tags: ["personal", "poem"]
  },
    {
    id: 2,
    title: "Titanic",
    excerpt: "Love is a beautiful blend of these small small moments. I am sure you all must have felt it. So here is a small poem where I tried to give justice to these feelings. Hope you enjoy it…",
    content: `
      <div style="text-align: center; font-style: italic;">
        I look into your eyes…
        You into mine….
        We smile, we know…
        I end the moment by grabbing your phone..
        You always get annoyed but somehow let me have it..
        You know its not about the trust…
        It’s about the silly things that retains the thirst..
        The thirst of staying together..
        The thirst of enjoying together..
        I let you hit me, It never hurts..
        No matter how hard you try..
        It just never does..
        These things keep the friction..
        These things keep us afloat..
        Afterall, I am “Jack” and you are my “Rose”..
        And we will make sure that,
        our titanic never leaves its course…!!!
      </div>
    `,
    date: "2019-12-22",
    category: "personal",
    image: "assets/img/titanic.jpg",
    readTime: "1 min read",
    tags: ["personal", "poem"]
  },
  {
    id: 3,
    title: "Cluedo",
    excerpt: "What makes poems unique is that they are usually based on themes and experiences of the poet who writes it. The inspiration of writing a poem can strike at any point of time and in any situation. So here is a poem which I wrote while my friends were playing this amazing board game named “Cluedo”. As the name suggests, this is a hybrid of Ludo and a murder mystery where in a guy gets killed and there are suspects and weapons and places where the potential murder would have happened. I was so intrigued by the concept that rather than playing it I decided to express my thoughts through a poem. Hope you like it!!!",
    content: `
      <div style="text-align: center; font-style: italic;">
        It was a beautiful day all bright and sunny
        However, an ominous wind caught the Tudor’s as Mrs black screamed
        “Oh my God? Wake up? Honey?”
        And the matter unfolded with the murder of Dr Black… 
        Surprising everyone with 4 suspects, 4 weapons, 5 rooms and a broken pact…
        Mrs scarlet with her taser ? or colonel mustard with his cane… 
        Was it Mrs white with a candle stand ? or professor plum with a bane.. ?
        The PI looked into the kitchen, the study and the different halls. 
        Not leaving the lounge and even the room reserved for balls.
        And so the game began with a chat and some questions… 
        Everyone cautiously addressing them giving less to devise any equations… 
        The more the detective dug deep, the more it muddled him
        Was Mrs Scarlet at the site ?or did she really go for a swim? 
        The harder he tried the difficult it was…
        So was the mystery, that even after all these years he still doesn’t know the cause??? 
      </div>
    `,
    date: "2019-12-31",
    category: "personal",
    image: "assets/img/cluedo.jpg",
    readTime: "1 min read",
    tags: ["personal", "poem"]
  }
];

// Function to get all blog posts
function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get a specific blog post by ID
function getBlogPostById(id) {
  return blogPosts.find(post => post.id === parseInt(id));
}

// Function to get recent blog posts (for homepage)
function getRecentBlogPosts(limit = 3) {
  return getAllBlogPosts().slice(0, limit);
}

// Function to get blog posts by category
function getBlogPostsByCategory(category) {
  return getAllBlogPosts().filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Function to search blog posts
function searchBlogPosts(query) {
  const searchTerm = query.toLowerCase();
  return getAllBlogPosts().filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

const sampleMovies = [
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        genres: "Crime, Drama",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        duration: 154, // duración en minutos
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
    },
    {
        name: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        genres: "Action, Sci-Fi",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        duration: 136, // duración en minutos
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    },
    {
        name: "Forrest Gump",
        director: "Robert Zemeckis",
        genres: "Drama, Romance",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        duration: 142, // duración en minutos
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    },
    {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        genres: "Action, Adventure, Drama",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        duration: 178, // duración en minutos
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
    },
    {
        name: "Inglourious Basterds",
        director: "Quentin Tarantino",
        genres: "Adventure, Drama, War",
        description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        duration: 153, // duración en minutos
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg"
    },
    {
        name: "The Green Mile",
        director: "Frank Darabont",
        genres: "Crime, Drama, Fantasy",
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        duration: 189,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/velWPhVMQeQKcxggNEU8YmIo52R.jpg"
    },
    {
        name: "The Godfather: Part II",
        director: "Francis Ford Coppola",
        genres: "Crime, Drama",
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        duration: 202,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg"
    },
    {
        name: "Schindler's List",
        director: "Steven Spielberg",
        genres: "Biography, Drama, History",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        duration: 195,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
    },
    {
        name: "The Lion King",
        director: "Roger Allers, Rob Minkoff",
        genres: "Animation, Adventure, Drama",
        description: "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
        duration: 89,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
    },
    {
        name: "The Dark Knight",
        director: "Christopher Nolan",
        genres: "Action, Crime, Drama",
        description: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        duration: 152,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        name: "Inception",
        director: "Christopher Nolan",
        genres: "Action, Adventure, Science Fiction",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        duration: 148,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
    },
    {
        name: "Toy Story",
        director: "John Lasseter",
        genres: "Animation, Adventure, Comedy",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        duration: 81,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
    },
    {
        name: "The Godfather",
        director: "Francis Ford Coppola",
        genres: "Crime, Drama",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        duration: 175,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
        name: "Avatar",
        director: "James Cameron",
        genres: "Action, Adventure, Fantasy",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        duration: 162,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg"
    },
    {
        name: "Interstellar",
        director: "Christopher Nolan",
        genres: "Adventure, Drama, Sci-Fi",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        duration: 169,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        name: "Ratatouille",
        director: "Brad Bird",
        genres: "Animation, Comedy, Family",
        description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        duration: 111,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/y89kFMNYXNKMdlZjR2yg7nQtcQH.jpg"
    },
    {
        name: "Amélie",
        director: "Jean-Pierre Jeunet",
        genres: "Comedy, Romance",
        description: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        duration: 122,
        country: "France",
        poster: "https://image.tmdb.org/t/p/original/2TeJfUZMGolfDdW6DKhfIWqvq8y.jpg"
    },
    {
        name: "The Shawshank Redemption",
        director: "Frank Darabont",
        genres: "Drama",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        duration: 142,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
    {
        name: "Fight Club",
        director: "David Fincher",
        genres: "Drama",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        duration: 139,
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"
    },
    {
        name: "The Silence of the Lambs",
        director: "Jonathan Demme",
        genres: "Crime, Drama, Thriller",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        duration: 118,
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg"
    },
    {
        name: "Goodfellas",
        director: "Martin Scorsese",
        genres: "Biography, Crime, Drama",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        duration: 146,
        country: "United States",
        poster: "https://cdn.pixabay.com/photo/2015/07/10/17/10/stripes-839866_960_720.jpg"
    },
    {
        name: "The Departed",
        director: "Martin Scorsese",
        genres: "Crime, Drama, Thriller",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        duration: 151,
        country: "United States",
        poster: "https://cdn.pixabay.com/photo/2018/02/21/11/57/paris-3178817_960_720.jpg"
    },
    {
        name: "City of God",
        director: "Fernando Meirelles, Kátia Lund",
        genres: "Crime, Drama",
        description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        duration: 130,
        country: "Brazil",
        poster: "https://cdn.pixabay.com/photo/2015/05/15/14/21/architecture-768432_960_720.jpg"
    },
    {
        name: "The Godfather: Part III",
        director: "Francis Ford Coppola",
        genres: "Crime, Drama",
        description: "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don Michael Corleone seeks to avow for his sins, while taking a young protégé under his wing.",
        duration: 162,
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Godfather_Part_III.jpg"
    },
    {
        name: "The Shawshank Redemption",
        director: "Frank Darabont",
        genres: "Drama",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        duration: 142,
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
    },
    {
        name: "Pirates of the Caribbean: The Curse of the Black Pearl",
        director: "Gore Verbinski",
        genres: "Action, Adventure, Fantasy",
        description: "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
        duration: 143,
        country: "United States",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Pirates_of_the_Caribbean_poster.jpg"
    }
];

module.exports = sampleMovies;

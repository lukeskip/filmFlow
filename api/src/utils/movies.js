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
        poster: "https://image.tmdb.org/t/p/original/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg"
    },
    {
        name: "Forrest Gump",
        director: "Robert Zemeckis",
        genres: "Drama, Romance",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        duration: 142, // duración en minutos
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg"
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
        poster: "https://image.tmdb.org/t/p/original/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg"
    },
    {
        name: "The Silence of the Lambs",
        director: "Jonathan Demme",
        genres: "Crime, Drama, Thriller",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        duration: 118,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/9rjiflzhKM9gt3l7P0RRO4KGWUi.jpg"
    },
    {
        name: "The Shining",
        director: "Stanley Kubrick",
        genres: "Drama, Horror",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        duration: 146,
        country: "United Kingdom",
        poster: "https://image.tmdb.org/t/p/original/9fgh3Ns1iRzlQNYuJyK0ARQZmFc.jpg"
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
        name: "The Departed",
        director: "Martin Scorsese",
        genres: "Crime, Drama, Thriller",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        duration: 151,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/tGLO9zw5ZtCeyyEWgbYGgsFxC6i.jpg"
    },
    {
        name: "Goodfellas",
        director: "Martin Scorsese",
        genres: "Biography, Crime, Drama",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        duration: 145,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/4G8f8zpx2jhV42Lj9JfGHlVrKpz.jpg"
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
        name: "The Usual Suspects",
        director: "Bryan Singer",
        genres: "Crime, Drama, Mystery",
        description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        duration: 106,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg"
    },
    {
        name: "The Prestige",
        director: "Christopher Nolan",
        genres: "Drama, Mystery, Sci-Fi",
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        duration: 130,
        country: "United Kingdom",
        poster: "https://image.tmdb.org/t/p/original/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg"
    },
    {
        name: "American History X",
        director: "Tony Kaye",
        genres: "Drama",
        description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
        duration: 119,
        country: "United States",
        poster: "https://image.tmdb.org/t/p/original/fXepRAYOx1qC3wju7XdDGx60775.jpg"
    },
];

module.exports = sampleMovies;

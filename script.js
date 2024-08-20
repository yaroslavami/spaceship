// Get elements by their IDs
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var main = document.getElementById("info");
var footer = document.getElementById("foot");

// Array of card objects
const cards = [
    {
        id: 'el1',
        image: './images/NewWorld.png',
        alt: 'Image representing New World',
        title: 'New World',
        description: 'Explore the wonders of an uncharted realm, where possibilities are endless and discoveries await at every turn.',
        news: 'Breaking News: A new world has been discovered, rich with resources and possibly habitable! The scientific community is buzzing with excitement as this discovery could potentially open up a new frontier for humanity.'
    },
    {
        id: 'el2',
        image: './images/SunSystem.png',
        alt: 'Image representing Sun System',
        title: 'Sun System',
        description: 'Delve into the mysteries of our solar system and learn about the brilliant celestial bodies that orbit around the sun.',
        news: 'Hot Update: Astronomers have uncovered new insights into the dynamics of our solar system, with surprising revelations about the potential for life on distant moons.'
    },
    {
        id: 'el3',
        image: './images/Earth.png',
        alt: 'Image representing Earth',
        title: 'Earth',
        description: 'Discover the beauty and diversity of our home planet, from stunning landscapes to the fascinating life that inhabits it.',
        news: 'Earth Day Special: Scientists have issued a new report highlighting the urgent need for global conservation efforts to protect Earth\'s biodiversity amidst rising environmental threats.'
    },
    {
        id: 'el4',
        image: './images/RedPlanet.png',
        alt: 'Image representing Red Planet',
        title: 'Red Planet',
        description: 'Embark on a journey to the fourth planet from the sun, Mars, and uncover its unique characteristics and potential for exploration.',
        news: 'Mars Mission: Groundbreaking discoveries on Mars have revealed signs of ancient water flows, bolstering hopes for finding past life on the Red Planet!'
    },
    {
        id: 'el5',
        image: './images/NewStars.png',
        alt: 'Image representing New Stars',
        title: 'New Stars',
        description: 'Marvel at the celestial spectacle as new stars light up the cosmic expanse, contributing to the vastness of our universe.',
        news: 'Cosmic Spectacle: Astronomers have captured stunning images of newly formed stars in distant galaxies, shedding light on the birth of stars and the expansion of the universe.'
    },
    {
        id: 'el6',
        image: './images/LiningUp.png',
        alt: 'Image representing Lining Up',
        title: 'Lining Up',
        description: 'Witness celestial alignments and planetary events that captivate the imagination, showcasing the cosmic dance of heavenly bodies.',
        news: 'Celestial Event: A rare planetary alignment is set to occur this week, offering a once-in-a-lifetime opportunity for stargazers to witness the cosmic ballet of planets!'
    },
    {
        id: 'el7',
        image: './images/GalacticVoyage.png',
        alt: 'Image representing Galactic Voyage',
        title: 'Galactic Voyage',
        description: 'Embark on a journey through the vast galaxy, discovering new planets, stars, and the wonders of the cosmos.',
        news: 'Voyage Beyond: The first-ever manned mission to explore the outer reaches of our galaxy has launched, marking a new era in space exploration!'
    },
    {
        id: 'el8',
        image: './images/BlackHole.png',
        alt: 'Image representing Black Hole',
        title: 'Black Hole',
        description: 'Dive into the mysteries of black holes, where gravity is so strong that nothing can escape its pull.',
        news: 'Black Hole Breakthrough: Scientists have detected mysterious signals emanating from a black hole, sparking debates over the possibility of new physics beyond current understanding.'
    },
    {
        id: 'el9',
        image: './images/Nebula.png',
        alt: 'Image representing Nebula',
        title: 'Nebula',
        description: 'Marvel at the stunning beauty of nebulae, vast clouds of gas and dust that create the most breathtaking sights in the universe.',
        news: 'Nebula Wonders: New images of nebulae reveal the intricate and colorful details of these stellar nurseries, where new stars are born in the vastness of space.'
    },
    {
        id: 'el10',
        image: './images/MeteorShower.png',
        alt: 'Image representing Meteor Shower',
        title: 'Meteor Shower',
        description: 'Experience the awe-inspiring sight of meteors streaking across the night sky in a dazzling display of light.',
        news: 'Spectacular Show: This year’s meteor shower is expected to be the most vibrant in decades, with thousands of meteors lighting up the sky in a dazzling display of nature’s fireworks.'
    },
    {
        id: 'el11',
        image: './images/BlackMatter.png',
        alt: 'Image representing Dark Matter',
        title: 'Dark Matter',
        description: 'Delve into the enigmatic world of dark matter, the unseen force that makes up much of the universe.',
        news: 'Dark Matter Mystery: Groundbreaking research suggests that dark matter might interact with itself in previously unknown ways, potentially rewriting our understanding of the universe.'
    }
];

// Function to handle video play/pause and toggle visibility of main content and footer
function myFunction() {
    if (video.paused) {
        video.style.display = 'block';
        main.style.display = 'none';
        footer.style.display = 'none';
        video.play();
        btn.innerHTML = "View news";
    } else {
        video.pause();
        btn.innerHTML = "Watch stars";
        video.style.display = 'none';
        main.style.display = 'block';
        footer.style.display = 'flex';
    }
}

const newsContainer = document.getElementById('news');

// Dynamically generate and append cards to the news container
cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'post';
    cardDiv.id = card.id; // Add ID to the card

    cardDiv.innerHTML = `
        <img class="image" src="${card.image}" alt="${card.alt}">
        <div class="text">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <div class="news-content" style="display: none;">
                <h3>News:</h3>
                <p>${card.news}</p>
                <button class="close-btn">Close</button>
            </div>
        </div>
        `;

    cardDiv.addEventListener('click', function() {
        showNews(card.id);
    });

    cardDiv.querySelector('.close-btn').addEventListener('click', function(event) {
        event.stopPropagation();
        hideNews(card.id);
    });
    
    newsContainer.appendChild(cardDiv);
});

// Function to show news for a specific card
function showNews(cardId) {
    document.querySelectorAll('.news-content').forEach(content => {
        content.style.display = 'none';
    });
    const card = document.getElementById(cardId);
    if (card) {
        const newsContent = card.querySelector('.news-content');
        if (newsContent) {
            newsContent.style.display = 'block';
        };
    };
};

// Function to hide news content
function hideNews(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        const newsContent = card.querySelector('.news-content');
        if (newsContent) {
            newsContent.style.display = 'none';
        };
    };
};


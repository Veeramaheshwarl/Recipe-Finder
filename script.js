const recipes = [
    {
        name: "Masala Dosa",
        image: "https://i.imgur.com/V0Z8zDk.jpg",
        intro: "Masala Dosa is a famous South Indian dish made with a crispy rice and lentil crepe filled with a flavorful potato masala. Perfect for breakfast or dinner, this dish is loved for its crunchy exterior and soft spicy filling.",
        ingredients: [
            "2 cups dosa batter",
            "3 boiled potatoes",
            "1 onion (sliced)",
            "1 tsp mustard seeds",
            "1/2 tsp turmeric",
            "2 green chilies (chopped)",
            "Curry leaves",
            "Oil & salt"
        ],
        instructions: `
1. Heat oil in a pan, add mustard seeds, chilies, and curry leaves.  
2. Add sliced onions and sauté until golden.  
3. Add turmeric and mashed potatoes; mix well with salt.  
4. Heat a dosa tawa, pour batter, and spread into a thin circle.  
5. Add potato masala in the center and fold the dosa.  
6. Serve hot with coconut chutney and sambar.
        `
    },

    {
        name: "Idli & Sambar",
        image: "https://i.imgur.com/N9uYjHr.jpg",
        intro: "Idli with Sambar is a classic South Indian breakfast. Idlis are soft steamed rice cakes, while sambar is a tangy lentil-based vegetable stew packed with nutrients and flavor.",
        ingredients: [
            "2 cups idli batter",
            "1 cup toor dal",
            "1 tomato",
            "1 onion",
            "Mixed vegetables (carrot, drumstick)",
            "Tamarind",
            "Sambar powder",
            "Mustard seeds"
        ],
        instructions: `
1. Steam idlis using idli molds for 10–12 minutes until they rise and become soft.  
2. Cook toor dal until soft and mushy.  
3. In a pot, heat oil and sauté onions, tomatoes, and veggies.  
4. Add sambar powder, salt, and cooked dal.  
5. Add tamarind water and simmer for 10 minutes.  
6. Serve hot idlis with freshly made sambar.
        `
    },

    {
        name: "Chicken Biryani",
        image: "https://i.imgur.com/SHt2FjF.jpg",
        intro: "Chicken Biryani is a royal Mughlai-inspired dish made with aromatic basmati rice, tender chicken, rich spices, and saffron. It’s a festive favorite across India and perfect for lunch or dinner.",
        ingredients: [
            "2 cups basmati rice",
            "500g chicken",
            "2 onions (fried)",
            "1/2 cup yogurt",
            "Biryani masala",
            "Whole spices",
            "Saffron milk",
            "Ghee"
        ],
        instructions: `
1. Marinate chicken with yogurt, biryani masala, and spices for 1 hour.  
2. Cook basmati rice until 80% done (separate grains).  
3. In a pot, heat ghee and layer marinated chicken at the bottom.  
4. Add a layer of rice, then fried onions, saffron milk, and ghee.  
5. Repeat layers and seal the pot tightly.  
6. Cook on low heat (dum) for 25–30 minutes.  
7. Serve hot with raita or gravy.
        `
    },

    {
        name: "Paneer Butter Masala",
        image: "https://i.imgur.com/v79C1uQ.jpg",
        intro: "Paneer Butter Masala is a creamy, mildly spicy North Indian curry made with soft paneer cubes cooked in a rich tomato & butter gravy. It's a restaurant-style favorite served with naan or roti.",
        ingredients: [
            "200g paneer",
            "4 tomatoes",
            "2 tbsp butter",
            "Fresh cream",
            "Kasuri methi",
            "Ginger-garlic paste",
            "Red chili powder",
            "Garam masala"
        ],
        instructions: `
1. Blend tomatoes into a smooth puree.  
2. Heat butter and sauté ginger-garlic paste until aromatic.  
3. Add tomato puree and spices; cook until thick.  
4. Add cream and simmer the gravy.  
5. Add paneer cubes and cook for 5 minutes.  
6. Garnish with cream and serve hot with naan or chapati.
        `
    },

    {
        name: "Medu Vada",
        image: "https://i.imgur.com/mrzgqjV.jpg",
        intro: "Medu Vada is a crispy South Indian lentil doughnut made from urad dal. Crispy on the outside and soft inside, it's a perfect breakfast served with sambar and chutney.",
        ingredients: [
            "1 cup urad dal",
            "2 green chilies",
            "1 tsp black pepper",
            "Ginger (chopped)",
            "Curry leaves",
            "Salt",
            "Oil for frying"
        ],
        instructions: `
1. Soak urad dal for 4 hours and grind into a fluffy batter.  
2. Add chilies, ginger, pepper, curry leaves, and salt.  
3. Wet your hands, shape batter into small doughnuts.  
4. Deep fry until golden and crispy.  
5. Serve with coconut chutney and hot sambar.
        `
    }
];
container.innerHTML += `
    <div class="recipe-card">
        <img src="${r.image}">
        <h3>${r.name}</h3>
        <p class="intro">${r.intro}</p>
        <strong>Ingredients:</strong>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <p><strong>Instructions:</strong> ${r.instructions}</p>
    </div>
`;

//Your task is to return the names of all wishlisted presents that you might have gotten.

//Rules

//Possible values for size: “small”, “medium”, “large”

//Possible values for clatters: “no”, “a bit”, “yes”

//Possible values for weight: “light”, “medium”, “heavy”

//Don’t add any item more than once to the result

//The order of names in the output doesn’t matter

//It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

//Example:

//guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]

const wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

const presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];


function guessGifts(wishlist, presents) {
    let guess = [];

    for(let i = 0; i < wishlist.length; i++) {
        for(let j = 0; j < presents.length; j++) {
            if(wishlist[i].clatters === presents[j].clatters && 
                wishlist[i].size === presents[j].size &&
                wishlist[i].weight === presents[j].weight) {
                    guess.push(wishlist[i].name);
                }
        }
    }

    return guess;
}
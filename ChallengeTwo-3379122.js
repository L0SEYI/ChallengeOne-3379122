class SearchSuggestionSystem {
    constructor(products) {
        // Sort products lexicographically
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        const result = [];
        let prefix = '';

        for (let i = 0; i < searchWord.length; i++) {
            prefix += searchWord[i];
            const suggestions = [];

            for (let product of this.products) {
                if (product.startsWith(prefix)) {
                    suggestions.push(product);
                    if (suggestions.length === 3) break; // Only 3 suggestions
                }
            }

            result.push(suggestions);
        }

        return result;
    }
}
const system = new SearchSuggestionSystem(["mobile","mouse","moneypot","monitor","mousepad"]);
const suggestions = system.getSuggestions("mouse");

console.log(suggestions);

/*
[
  ["mobile","moneypot","monitor"],
  ["mobile","moneypot","monitor"],
  ["mouse","mousepad"],
  ["mouse","mousepad"],
  ["mouse","mousepad"]
]
*/

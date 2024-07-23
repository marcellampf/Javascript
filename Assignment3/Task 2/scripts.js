document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    orderButton.addEventListener('click', orderSmoothie);

    class Smoothie {
        constructor(name, size, ingredients, sweetener, instructions) {
            this.name = name;
            this.size = size;
            this.ingredients = ingredients;
            this.sweetener = sweetener;
            this.instructions = instructions;
        }

        display() {
            return `
                <h2>Order Summary</h2>
                <p><strong>Name:</strong> ${this.name}</p>
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
                <p><strong>Sweetener:</strong> ${this.sweetener}</p>
                <p><strong>Instructions:</strong> ${this.instructions}</p>
            `;
        }
    }

    function orderSmoothie() {
        const name = document.getElementById('name').value;
        const size = document.getElementById('size').value;
        const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(ing => ing.value);
        const sweetener = document.getElementById('sweetener').value;
        const instructions = document.getElementById('instructions').value;

        if (name && size && ingredients.length > 0 && sweetener) {
            const smoothie = new Smoothie(name, size, ingredients, sweetener, instructions);
            document.getElementById('order-summary').innerHTML = smoothie.display();
        } else {
            alert('Please fill out all required fields.');
        }
    }
});

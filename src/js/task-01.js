'use strict'
const elementItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${elementItem.length}`);



const categoriesArrey = document.querySelectorAll('.item');
categoriesArrey.forEach(nameCategories => {
    const nameCategoriesArrey = nameCategories.querySelectorAll(`h2`);
    console.log(`Category: ${nameCategoriesArrey[0].textContent}`);
    
    const arrayCategoriesObject = nameCategories.querySelectorAll(`ul li`);
    const lengthElementCategoriesObject = arrayCategoriesObject.length;
    console.log(`Elements: ${lengthElementCategoriesObject}`);
    
    
});

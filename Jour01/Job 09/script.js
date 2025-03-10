function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        
        return numbers.sort((a, b) => b - a);
    } else {
        throw new Error("L'ordre doit être 'asc' ou 'desc'.");
    }
}
let nombres = [10, 5, 80, 3, 20];
console.log(tri(nombres, "asc"));  
console.log(tri(nombres, "desc")); 
const HomeInventoryDatabase = ???
const inventoryEl = ???

// Loop over keys in the database
for (let key in HomeInventoryDatabase) {
    // Get a reference to the array of objects
    const currentType = ???
    
    // Loop over the array of objects
    for (var i = 0; i < ???.length; i++) {
        // Current item in the array
        var item = ???

        // Build a string to insert into the DOM
        inventoryEl.innerHTML += `
        <section>
            <h2>${}</h2>
            <div>${}</div>
            <div>${}</div>
        </section>
        `
    }
}




const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBook = JSON.parse(storedBookSTR);
        return storedBook;

    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("This book already exists");
    } else {
        storedBookData.push(id);

        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }
}

export { addToStoredDB };
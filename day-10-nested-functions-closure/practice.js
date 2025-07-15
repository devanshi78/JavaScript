let str = 'name';
const firstname = () => {
    let str = 'parekh';
    const secondname = () => {
        let str = 'devanshi';
        console.log(`secondname : ${str}`)
    }
    secondname();
    console.log(`firstname : ${str}`);
}
firstname();
console.log(`name : ${str}`);
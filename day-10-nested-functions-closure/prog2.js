let num = 20;
const mainfunc = () => {
    let num = 40;
    const innerfunc = () => {
        let num = 60;
        const subfunc = () => {
            let num = 80;
            console.log(`sub ${num}`)
        }
        subfunc();
        console.log(`inner ${num}`)
    }
    innerfunc();
    console.log(`main ${num}`)
}
console.log(`outter ${num}`);
mainfunc();
process.argv.splice(2,process.argv.length)
    .forEach((el) => {
        setTimeout( () => console.log(Number(el)),1000*el);
    });
    
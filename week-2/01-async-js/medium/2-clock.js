setInterval(() => {
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const ampm = hrs > 12 ? `PM` : `AM`;
    console.log(`${hrs}:${mins}::${secs} ${ampm}`);
}, 1000)
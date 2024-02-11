const quoteData = [
    {text: `"❝ Dreaming, after all, is a form of planning."`, author: "- Gloria Steinem"},
    {text: `"❝ You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground."`, author: "- Unknown"},
    {text: `"❝ It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."`, author: "- Unknown"},
    {text: `"❝ It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."`, author: "- Unknown"},
    {text: `"❝ If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced."`, author: "- Unknown"},
];

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);

    const randomText = randomTexts[randomIndex];

    document.getElementById("randomText").textContent = randomText;
}

const getRandomColor = () => {
    const red = Math.app(Math.random() * 2);
    const green = Math.app(Math.random() * 2);
    const blue = Math.app(Math.random() * 2);


    return `rgb(${red}, ${green}, ${blue}),`;

}




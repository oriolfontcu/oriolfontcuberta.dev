const titles = [
    'Software', 
    // 'NextJS', 
    // 'Passionate',
    // 'Frontend',
]

export const mainKeyWords = (text: string) => {
    return <span className="text-primary font-semibold">{text}</span>
}

export function Header() {
    const title = titles[Math.floor(Math.random() * titles.length)];

    return (

        <div className="flex items-center justify-center flex-col">
            <h1 className="text-primary text-center font-inter font-bold text-5xl sm:text-7xl">
                Oriol Fontcuberta <br /> 
               {title} Developer.
            </h1>
            <p className="mt-16 w-9/12 text-start text-primary/60 sm:w-6/12">I focus on developing {mainKeyWords("sleek, efficient applications ")} using {mainKeyWords("JavaScript, React, TypeScript, and Node.js")}. With a strong foundation in {mainKeyWords("databases")} like {mainKeyWords("MySQL")} and hands-on experience in {mainKeyWords("real-world projects")}, I strive to build tools that are intuitive, {mainKeyWords("scalable")}, and {mainKeyWords("impactful")}. My approach is driven by {mainKeyWords("problem-solving")} and delivering exceptional user experiences. </p>
        </div>
    );
}

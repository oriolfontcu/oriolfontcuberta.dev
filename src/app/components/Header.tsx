const titles = [
    'Software', 
    'NextJS', 
    'Passionate',
    'Frontend',
]

export function Header() {
    const title = titles[Math.floor(Math.random() * titles.length)];

    return (
        <div className="flex items-center justify-center text-center font-inter font-bold text-7xl">
            <h1 className="text-primary">
                Oriol Fontcuberta <br /> 
                <span className="text-muted-foreground">{title} </span>
                Developer
            </h1>
        </div>
    );
}

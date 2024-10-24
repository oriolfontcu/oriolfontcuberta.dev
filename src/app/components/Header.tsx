import TypingAnimation from "@/components/ui/typing-animation";

const titles = [
    'Software', 
    // 'NextJS', 
    // 'Passionate',
    // 'Frontend',
]

export function Header() {
    const title = titles[Math.floor(Math.random() * titles.length)];

    const titleMargin = () => {
        if ( title.length === 8 ) {
            return "550px"
        } else if ( title.length === 6 ){
            return "450px"
        } else if ( title.length === 10 ){
            return "660px"
        }
    }

    return (
        <div className="h-screen flex items-center justify-center text-center font-inter font-bold text-9xl">
            <h1 className="text-primary">
                Oriol Fontcuberta <br /> 
                <div className="flex items-center justify-center">
                    <span className="inline-block" style={{ minWidth: titleMargin() }}>
                        <TypingAnimation 
                            className="bg-gradient-to-b from-blue-800 to-red-600 bg-clip-text text-transparent"
                            text={title}
                        />
                    </span>
                    <span className="ml-4">
                        Developer
                    </span>
                </div>
            </h1>
        </div>
    );
}

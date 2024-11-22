import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <div className="w-8/12">
            <Separator orientation="horizontal"/>
            <div className="mt-4 flex flex-col items-end">
                <p>Oriol Fontcuberta.</p>
            </div>
        </div>
    )
}
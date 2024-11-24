import { Download } from "lucide-react";

export function DownloadCV() {
  return (
    <div>
      <a
        href="/CV.pdf" // Ruta relativa desde la carpeta `public`
        className="flex items-center text-white"
      >
        <Download className="mr-2" size={16} />
      </a>
    </div>
  );
}

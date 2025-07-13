import { House, Trash, MessageSquareWarning } from 'lucide-react';


export default function Home() {
  console.log("this is test print.");
  return (
    <div>
      <div className="relative mx-4 mb-6 flex items-center justify-between gap-6 pt-2">
        <div className="absolute inset-0 flex justify-center md:static">
          <a href="https://qiita.com/sakurada8514/items/34263891e4b19e8b976b">
            <House />
          </a>
        </div>
      </div>

      <div className="flex justify-center text-center text-xs bg-red text-black  absolute inset-x-0 bottom-0 h-10">
        <div className="flex items-center gap-2">
            <Trash />
            <MessageSquareWarning />
        </div>
      </div>

      
     </div>
     

  );
}

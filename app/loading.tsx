import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-full">
      <Loader2 className="h-16 w-16 animate-spin transition-all text-mood-primary" />
    </main>
  );
}

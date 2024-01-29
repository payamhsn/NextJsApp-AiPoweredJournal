import { prisma } from "@/util/db";
import Link from "next/link";

const JournalPage = async () => {
  return (
    <div className="px-6 py-8 bg-zinc-100/50 h-full">
      <h1 className="text-4xl mb-12">Journals</h1>
      <div className="my-8"></div>
      <div className="grid grid-cols-3 gap-4">hello</div>
    </div>
  );
};

export default JournalPage;

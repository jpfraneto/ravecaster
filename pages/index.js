import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [fid, setFid] = useState("");

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/ravecaster.png')" }}
    >
      <h1
        className="text-6xl font-bold text-white mb-8"
        style={{ fontFamily: "Monoton" }}
      >
        RAVECASTER
      </h1>
      <input
        type="text"
        value={fid}
        onChange={(e) => setFid(e.target.value)}
        placeholder="Enter FID"
        className="text-black p-4 rounded-md mb-4"
        style={{ fontFamily: "Monoton" }}
      />
      <Link
        className="text-white text-xl"
        style={{ fontFamily: "Monoton" }}
        href={`/user/${encodeURIComponent(fid)}`}
      >
        go to user page
      </Link>
    </div>
  );
}

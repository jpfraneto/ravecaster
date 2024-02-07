import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [fid, setFid] = useState("");
  const [showButton, setShowButton] = useState(false);

  const handleInputChange = (e) => {
    setFid(e.target.value);
    if (e.target.value.length > 0 && !showButton) {
      setShowButton(true);
    } else if (e.target.value.length === 0 && showButton) {
      setShowButton(false);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/ravecaster.png')" }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1
        className="font-bold text-white mb-8 absolute top-0 left-0 ravecaster-1"
        style={{ fontFamily: "Monoton" }}
      >
        RAVECASTER
      </h1>
      <h1
        className="font-bold text-white mb-8 absolute top-0 left-0 ravecaster-2"
        style={{ fontFamily: "Monoton" }}
      >
        RAVECASTER
      </h1>
      <h1
        className="font-bold text-white mb-8 absolute top-0 left-0 ravecaster-3"
        style={{ fontFamily: "Monoton" }}
      >
        RAVECASTER
      </h1>

      <input
        type="text"
        value={fid}
        onChange={handleInputChange}
        placeholder="Enter FID"
        className="text-black p-4 rounded-md mb-4"
        style={{ fontFamily: "Monoton" }}
      />
      {showButton && (
        <Link
          className={`text-white text-xl mt-4 p-2 rounded bg-blue-500 hover:bg-blue-700 transition duration-300 ${
            showButton ? "fade-in" : "hidden"
          }`}
          style={{ fontFamily: "Monoton" }}
          href={`/user/${encodeURIComponent(fid)}`}
        >
          go to {fid}
        </Link>
      )}
    </div>
  );
}

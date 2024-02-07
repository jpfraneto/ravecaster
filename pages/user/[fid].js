import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const UserByFid = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [userAddedPieces, setUserAddedPieces] = useState([]);
  const [userLikedPieces, setUserLikedPieces] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      console.log("the params are: ", params);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ROUTE}/farcaster/get-user-data-em/${params.fid}`
      );
      console.log("the response is: ", response);
      setUserAddedPieces(response.data.submittedRecommendations);
      setUserLikedPieces(response.data.likedRecommendations);
      setLoading(false);
    };
    if (params && params.fid) {
      fetchUserData();
    }
  }, [params]);
  if (loading) {
    return <p>loading</p>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <h1 className="text-white text-7xl">{params.fid}</h1>
      {userAddedPieces && (
        <div>
          <h2>user added recommendations</h2>
          {userAddedPieces.map((x, i) => {
            return (
              <div key={i}>
                <a
                  target="_blank"
                  href={x.link}
                  className="ml-auto hover:text-red-200"
                >
                  {x.link}
                </a>
              </div>
            );
          })}
        </div>
      )}
      {userLikedPieces && (
        <div>
          <h2>user liked recommendations</h2>
          {userLikedPieces.map((x, i) => {
            return (
              <div key={i}>
                <a
                  target="_blank"
                  href={x.link}
                  className="ml-auto hover:text-red-200"
                >
                  {x.link}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserByFid;

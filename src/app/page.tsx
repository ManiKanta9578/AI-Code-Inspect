"use client";
import React, { useState } from 'react'
import Editor from '@/components/Editor'
import Review from '@/components/Review'
import Loader from '@/components/Loader';

const Home = () => {
  const [review, setReview] = useState("### Review will be done here");
  const [loading, setLoading] = useState<"idle" | "Generating" | "Generated">("idle");

  let isGenerating = loading === "Generating";

  const handleGenerateReview = (code: string) => {
    setLoading("Generating");
    fetch("http://localhost:5000/api/v1/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReview(data.review);
        setLoading("idle");
      })
  };

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden'>
      <Editor handleGenerateReview={handleGenerateReview} />
      <Review  review={review} isGenerating={isGenerating} />
      {isGenerating && <Loader />}
    </div>
  )
}

export default Home
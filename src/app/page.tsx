"use client";
import React, { useState } from 'react'
import Editor from '@/components/Editor'
import Review from '@/components/Review'

const Home = () => {

  const [review, setReview] = useState("### Review will be done here");
  const [loading, setLoading] = useState<"idle" | "Generating" | "Generated">("idle");

  let isGenerating = loading === "Generating";

  const handleGenerateReview = async (code: string) => {
    setLoading("Generating");

    try {
      const response = await fetch("http://localhost:5000/api/v1/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ code }),
      })

      let res = await response.json()

      setReview(res.data[0].review);
      setLoading("idle");

    } catch (error) {
      console.log(error);
      setLoading("idle");
    }
  };

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden'>
      <Editor handleGenerateReview={handleGenerateReview} />
      <Review review={review} isGenerating={isGenerating} />
    </div>
  )
}

export default Home
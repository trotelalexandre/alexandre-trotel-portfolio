"use client";
import "client-only";

import React from "react";
import useQuatio from "@/hooks/games/quatio/useQuatio";
import QuatioCard from "./QuatioCard";
import ScoreCard from "./ScoreCard";

export default function Quatio() {
  const {
    difficulty,
    setDifficulty,
    unknowns,
    setUnknowns,
    equationData,
    userAnswer,
    setUserAnswer,
    feedback,
    isCorrect,
    checkAnswer,
    handleKeyPress,
    progressValueRef,
    currentScore,
    highestScore,
    currentStreak,
    highestStreak,
  } = useQuatio();

  const stats = {
    scores: {
      title: "Score",
      values: [
        {
          label: "Current Score",
          value: currentScore,
        },
        {
          label: "Highest Score",
          value: highestScore,
        },
      ],
    },
    streaks: {
      title: "Streak",
      values: [
        {
          label: "Current Streak",
          value: currentStreak,
        },
        {
          label: "Highest Streak",
          value: highestStreak,
        },
      ],
    },
  };
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <QuatioCard
        {...{
          difficulty,
          setDifficulty,
          unknowns,
          setUnknowns,
          equationData,
          userAnswer,
          setUserAnswer,
          feedback,
          isCorrect,
          checkAnswer,
          handleKeyPress,
          progressValueRef,
        }}
      />
      <ScoreCard {...{ stats }} />
    </div>
  );
}

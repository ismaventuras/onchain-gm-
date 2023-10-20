'use client'
import { useEffect, useState } from 'react';

export function CountGm() {
  // State to store the visit count
  const [visitCount, setVisitCount] = useState(0);

  // Function to update the visit count in localStorage
  const updateVisitCount = () => {
    const currentCount = parseInt(localStorage.getItem('visitCount') ?? "0");
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', String(newCount));
    setVisitCount(newCount);
  };

  useEffect(() => {
    // When the component mounts, update the visit count and retrieve it from localStorage
    updateVisitCount();
  }, []);

  return (
      <p>You have been GM🍉&apos;d {visitCount} times.</p>
  );
}
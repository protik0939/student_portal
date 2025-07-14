'use client'
import React, { useEffect, useRef } from 'react';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarController,
} from 'chart.js';

// Register required components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);


export default function ResultBarGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Fall 22', 'Spring 23', 'Fall 23', 'Spring 24', 'Fall 24', 'Spring 25'],
        datasets: [
          {
            label: 'CGPA',
            data: [3.71, 3.9, 3.46, 3.67, 3.43, 3.64],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className='w-1/2 pt-32' height="500px" />;
}

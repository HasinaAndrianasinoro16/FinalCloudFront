import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importer Chart depuis chart.js

const Courbe = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Créer un contexte de dessin 2D pour le graphique
    const ctx = chartRef.current.getContext('2d');

    // Définir les données du graphique
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Monthly Sales',
          backgroundColor: '#198754',
          borderColor: '#20c997',
          borderWidth: 1,
          hoverBackgroundColor: '#20c997',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: [65, 59, 80, 81, 56],
        },
      ],
    };

    // Définir les options du graphique
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Créer une nouvelle instance de graphique
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Nettoyer le graphique lors de la destruction du composant
    return () => myChart.destroy();
  }, []); // Exécuter cet effet uniquement au montage du composant

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default Courbe;

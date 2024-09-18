import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements AfterViewInit  {
  public chart: any;

  constructor() {
    // Register the Chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    // Initialize the chart after the view is initialized
    this.createLineChart();
  }

  createLineChart() {
    const canvas = document.getElementById('yearlyRecordsChart') as HTMLCanvasElement;
  
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Create gradients for a modern look
        const gradientFiction = ctx.createLinearGradient(0, 0, 0, 400);
        gradientFiction.addColorStop(0, 'rgba(255, 99, 132, 0.2)'); // 50% transparency
        gradientFiction.addColorStop(1, 'rgba(255, 99, 132, 0)');
  
        const gradientNonFiction = ctx.createLinearGradient(0, 0, 0, 400);
        gradientNonFiction.addColorStop(0, 'rgba(54, 162, 235, 0.2)'); // 50% transparency
        gradientNonFiction.addColorStop(1, 'rgba(54, 162, 235, 0)');
  
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Fiction',
                data: [50, 60, 70, 65, 55, 70, 60, 85, 70, 90, 75, 95],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: gradientFiction,
                borderWidth: 5,  // Thicker line
                fill: true,
                pointBorderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 7,
                tension: 0.4,  // Curved line
              },
              {
                label: 'Non-Fiction',
                data: [40, 50, 55, 60, 45, 80, 65, 70, 75, 80, 85, 90],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: gradientNonFiction,
                borderWidth: 5,  // Thicker line
                fill: true,
                pointBorderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 7,
                tension: 0.4,  // Curved line
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false, // Disables the legend
                position: 'top',
                labels: {
                  font: {
                    size: 14,
                    family: 'Arial',
                    weight: 'bold',
                  },
                  color: '#666',
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return context.dataset.label + ': ' + context.raw;
                  },
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
              y: {
                min: 0,
                max: 100,
                ticks: {
                  stepSize: 20,
                },
                grid: {
                  color: 'rgba(200, 200, 200, 0.2)',
                },
              },
            },
            animations: {
              tension: {
                duration: 1000,
                easing: 'easeInOutSine',
                from: 0.5,
                to: 0.4,
                loop: true,
              },
            },
          },
        });
      } else {
        console.error("Failed to get 2D context.");
      }
    } else {
      console.error("Canvas element not found.");
    }
  }

}

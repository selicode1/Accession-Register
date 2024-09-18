import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements AfterViewInit {
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
    const canvas = document.getElementById('yearlyBarChart') as HTMLCanvasElement;
  
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
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Fiction',
                data: [100, 150, 250, 200, 180, 300],
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 0,
                barThickness: 8,
              },
              {
                label: 'Non-Fiction',
                data: [120, 80, 120, 233, 170, 400],
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 0,
                barThickness: 8,
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
                max: 400,
                ticks: {
                  stepSize: 100,
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

import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements AfterViewInit {
  public chart: any;

  constructor() {
    // Register the Chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createDoughnutChart();
  }

  createDoughnutChart() {
    const canvas = document.getElementById('DonutChart') as HTMLCanvasElement;
  
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'doughnut', // Change to doughnut
          data: {
            labels: ['Fiction', 'Non-Fiction'],
            datasets: [
              {
                data: [40, 60], // Fiction with 40%, Non-Fiction with 60%
                backgroundColor: ['#FF6384', '#36A2EB'], // Colors for the sections
                hoverBackgroundColor: ['#FF6384', '#36A2EB'], // Colors on hover
                borderWidth: 1
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  font: {
                    size: 14,
                  },
                  color: '#000',
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return context.label + ': ' + context.raw + '%';
                  },
                },
              },
            },
            cutout: '70%'  // Adjust this value to change the thickness
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

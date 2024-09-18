import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-single-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './single-donut-chart.component.html',
  styleUrl: './single-donut-chart.component.scss'
})
export class SingleDonutChartComponent implements AfterViewInit {
  public chart: any;

  constructor() {
    // Register the Chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    // Initialize the chart after the view is initialized
    this.createDonutCharts();
  }
  
  

  createDonutCharts() {
    // Create donut chart for Fiction
    const fictionCanvas = document.getElementById('fictionDonut') as HTMLCanvasElement;
    if (fictionCanvas) {
      const fictionCtx = fictionCanvas.getContext('2d');
      if (fictionCtx) {
        this.chart = new Chart(fictionCtx, {
          type: 'doughnut',
          data: {
            labels: ['Fiction', 'Other'],
            datasets: [
              {
                label: 'Fiction',
                data: [70, 30], // 70% Fiction, 30% Other
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(200, 200, 200, 0.2)'],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
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
                    return context.dataset.label + ': ' + context.raw + '%';
                  },
                },
              },
            },
            cutout: '70%'  // Adjust this value to change the thickness
          },
        });
      } else {
        console.error("Failed to get 2D context for Fiction donut.");
      }
    } else {
      console.error("Fiction donut canvas element not found.");
    }
  }
}

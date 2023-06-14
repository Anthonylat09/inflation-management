import ReactApexChart from 'react-apexcharts'
export default function PieChartUtils(props){
    const options = {
        chart: {
            width: 500,
            type: 'pie',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
            }
        }]
    }
    return(
        <div>
            <ReactApexChart series={props.series} type="pie" width={500} options={options}/>
        </div>
    );
}

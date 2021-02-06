import { Column, Row } from '../components/styled/layout';
import { Card } from "rendition";
import Chart from '../components/charts';
import { useEffect, createElement, Fragment } from 'react';
import styled from 'styled-components';
import { ChartDataEffect } from '../components/charts/index';
import { generateSerie } from '../extras/helpers';
import IssuesTable from './demo/issuesTable';
import { random } from 'lodash';

const columnHeight = "300px";

const CardStatsWrap = styled.div`
    & > *{
        margin: 0px 8.4px;
    }
`;

export default function DashboardPage(){
    const chartLabels = ["West U.S", "Noth Europe", "Asia", "India", "Singapur", "German", "Spain"];
    const initialData = {
        labels: chartLabels,
        series: [generateSerie(100,302,7)]
    };

    let idInterval: any;

    const updater: ChartDataEffect = (next) =>{
        idInterval = setInterval(()=>{
            next({
                labels: chartLabels,
                series: [[random(300,500)].concat(generateSerie(100,502,5).concat([random(100,500)]))]
            });
        }, 1020);
    }
    
    // mock data
    const Stats = [
        {
            title: 'Total Request',
            text: '288,000'
        },
        {
            title: 'Rate Second',
            text: '502'
        },
        {
            title: 'Used Space',
            text: '67 GB'
        },
        {
            title: 'Issues',
            text: '21'
        }
    ];

    // remove interval
    useEffect(() => () => clearInterval(idInterval), []);

    return createElement((styled(Row)`
        & > * {
            margin: 16px 0;
        }
    `), null,
        <Fragment>
            <Column height="168px">
            <CardStatsWrap>
            {Stats.map((elm, index) => (<Column  key={index} md={2.8} sm={2.8}>
                    <Card title={elm.title}>
                        <b>{elm.text}</b>
                    </Card>
                </Column>))}
            </CardStatsWrap>
            </Column>
            <Column height={columnHeight} >
                <Card title="Incoming Requests per Seconds">
                    <Chart effect={updater} data={initialData} type="line"></Chart>
                </Card>
            </Column>
            <Column height={columnHeight} md={5.9} sm={5.3}>
                <Card title="Issues Emitted">
                    <Chart data={initialData} type="line"></Chart>
                </Card>
            </Column>
            <Column height={columnHeight}>
                <Card title="Issues List">
                    <IssuesTable/>
                </Card>
            </Column>
        </Fragment>
    );
}
import styled from 'styled-components';
import { useEffect } from 'react';
import {uniqueId} from "lodash";
import chartList, { IChartistData } from "chartist";

export const ChartWrapper = styled.div`
    width: 100%;
    height: 200px;
    box-shadow: 8px 8px 12px transparent, -8px -8px 12px transparent;
`;

export type DataDispacther = (data: IChartistData) => void;

export type ChartDataEffect = (next: DataDispacther) => void;

export interface ChartProps{
    type: "line" | "bar" | "pie";
    data: IChartistData;
    effect?: ChartDataEffect;
}

export default function Chart(props: ChartProps) {
    const idElm = 'chart'+ uniqueId();
    useEffect(() =>{
        if(props.type === "line"){
             let ref = new chartList.Line('#'+idElm, props.data, {
                    lineSmooth: chartList.Interpolation.cardinal({
                      tension: 1,
                    }),
                    low: 0,
                    high: 1000, 
                    showPoint: true,
                    chartPadding: {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    }
                }
             );
             
             if(props.effect !== undefined){
                props.effect(data => ref.update(data));
             }
        }else{
            // not implemented
        }

        

    });
    return <ChartWrapper id={idElm}></ChartWrapper>;
}
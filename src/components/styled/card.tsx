import styled from 'styled-components';
import { ReactNode } from 'react';

export const CardWeapper = styled.div`
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  ${(props: CardProps) => !props.image ? " padding-bottom: 20px;" :'' }
  ${(props: CardProps) => props.width ? "width:"+props.width+";" :'' }
  ${(props: CardProps) => props.height ? "height:"+props.height+";" :'' }

/* On mouse-over, add a deeper shadow */
&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
 & > .container {
        padding: 2px 16px;
 }

 & > img{
    width: 100%;
 }
`;

export interface CardProps{
    className?: string;
    gradient?: boolean;
    width?: string;
    height?: string;
    image?: string;
    imageAlt?: string;
    children: ReactNode
}

export function Card(props: CardProps){
    return <CardWeapper className={props.className} gradient={props.gradient} width={props.width} height={props.height}>
      {props.image && <img src={props.image} alt={props.imageAlt} />}
      <div className="container">
        {props.children}
      </div>
  </CardWeapper>
}
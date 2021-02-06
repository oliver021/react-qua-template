import styled from 'styled-components';
import { StdProps } from '../../types/props';
import { Column } from '../styled';
import SidebarApp from './sidebar';


export const WrapperLayout = styled.div`
    padding: 0px;
    height:100vh;
    width: 100%;

    & > *{
        height: 100vh;
    }
`;

export const MainContent = styled.main`
    padding: 8px;
    height: 100vh;
    background-color: #f3f3f6;
    width: calc(100%) - 16px;
    overflow: auto;

    & > *{
         margin-top: 10px;
         margin-bottom: 10px;
    }
`;

export default function MasterLayout(props: StdProps){
    return <WrapperLayout>
            <Column bg="rgba(42, 151, 190, 0.91)" md={2.2} sm={2.2}>
                <SidebarApp/>
            </Column>
            <Column md={9.7} sm={9.7}>
                <MainContent>
                    {props.children}
                </MainContent>
            </Column>
    </WrapperLayout>
}
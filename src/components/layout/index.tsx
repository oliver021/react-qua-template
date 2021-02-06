import styled from 'styled-components';
import { StdProps } from '../../types/props';
import { Column } from '../styled';
import SidebarApp from './sidebar';


export const WrapperLayout = styled.div`
    padding: 0px;
    height: 100vh;
    width: 100%;

    & > *{
        height: 100vh;
    }
`;

export default function MasterLayout(props: StdProps){
    return <WrapperLayout>
            <Column bg="rgba(42, 151, 190, 0.91)" md={2.2} sm={2.2}>
                <SidebarApp/>
            </Column>
            <Column md={9.7} sm={9.7}>
                content here
            </Column>
    </WrapperLayout>
}
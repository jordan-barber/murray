import styled from "styled-components";

const Head = styled.header`
    width: 100%;
    height: 80px;
    padding: 8px;
    background-color: #ff323c;
    color: #ffffff;
`;

const H3 = styled.h3`
    margin-left: 64px;
    font-weight: 200;
`

export const Header = () => (
    <Head>
        <H3>UK Football Crime Statistics</H3>
    </Head>
)

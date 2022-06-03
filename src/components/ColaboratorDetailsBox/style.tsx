import styled from '@emotion/styled'

export const BoxContainer = styled.div`
    display: grid;
    align-items: start;
    width: 60vw;

    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin: 40px 0;

    @media (max-width: 700px) {
        width: 90vw;
    }

    .info-box {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        border-radius: 8px;
        white-space: nowrap;

        .title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #34423D;
            margin-bottom: 24px;
        }

        .cards-list {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            gap: 24px;

            @media (max-width: 1010px) {
                grid-template-columns: 1fr;
            }   
        }
    }
    .data {
        border: 1px solid #CAD6D1;
        width: 100%;
        padding: 20px 24px;
    }
    
`
export const DataContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 1010px) {
        grid-template-columns: 1fr;
    }  
        
`

export const AgentInitialInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;

    .agent-image {
        margin-right: 24px;
        height: 80px;
        width: 80px;
        img { 
            border-radius: 50%;
        }
    }
    .initial-info {
        display: flex;
        flex-direction: column;
        align-items: start;

        .name {
            color: #34423D;
            font-size: 18px;
            font-weight: 600;
        }
        .email {
            font-size: 14px;
            color: #587169;
            font-weight: 400;
        }
    }
`

export const InfoCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #F5FAF8;
    border: 2px solid #CAD6D1;
    padding: 16px;
    border-radius: 8px;

    .icon {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        margin-right: 8px;
        color: #465953;
        background-color: #CAD6D1;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-info-text {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .type {
        font-size: 12px;
        font-weight: 400;
        color: #587169;
    }
    .content {
        font-size: 14px;
        font-weight: 600;
        color: #587169;
    }
    
`
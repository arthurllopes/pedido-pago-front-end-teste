import styled from "@emotion/styled";

export const ListContainer = styled.div`

    .image {
        margin-right: 8px;
        width: 32px;
        height: 32px;
        img {
            border-radius: 50%;

        }
    }
    .bold-text {
        font-size: 12px;
        font-weight: 600;
        color: #587169;
        margin-bottom: 2px;
    }
    .initial-info {
        display: flex;
        align-items: start;
    }
    .inactive {
        filter: opacity(.6);
    }
    .info-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        width: 100%;
    }
    .info-item-box {
        width: 100%
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .text-info {
        font-size: 12px;
        font-weight: 400;
        color: #587169;
    }
`
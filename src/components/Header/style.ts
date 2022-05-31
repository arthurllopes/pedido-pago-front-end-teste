import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    height: 62px;
    padding: 0 38px;
`
export const UserContainer = styled.div`
    display: flex;
    align-items: center;

    padding-left: 32px;

    height: 100%;
    border-left: 1px solid #EAEFED;

    .username {
        font-size: 14px;
        font-weight: 600;
    }
    .description {
        font-size: 12px;
        font-weight: 400;
        color: #587169;
    }
`

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;

    background-color: #B5F1DD;
    color: #34423D;
    height: 32px;
    width: 32px;

    font-size: 14px;
    border-radius: 50%;
    padding: 9px;

    margin: 0 10px;

`
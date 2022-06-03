import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    background-color: white;
    height: 62px;
    padding: 0 38px;
    border-bottom: 1px solid #EAEFED;

    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    @media(max-width: 600px) {
        .header-content {
            flex-direction: row-reverse;
            width: 60%;
        }
    }
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

    @media(max-width: 600px) {
        border-left: none;
        padding-left: 0px;
        .user-box {
            display: none;
        }
    }
`

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
    margin-right: 10px;
    background-color: #B5F1DD;
    color: #34423D;
    height: 32px;
    width: 32px;

    font-size: 14px;
    border-radius: 50%;
    padding: 9px;

    @media(max-width: 600px) {
        margin: 0px;
    }

`
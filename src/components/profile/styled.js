import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 40px;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;

    h1 {
        font-size: 32px;
        font-weight: bold;
      }

      h3 {
        font-size: 18px;
        font-weight: bold;
      }

      h4 {
        font-size: 16px;
        font-weight: bold;
      }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-right: 8px;
        text-align: center;
      }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        margin-right: 8px;
    }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
   border-radius: 50%;
   width: 190px;
   margin: 8px 10px;
`;

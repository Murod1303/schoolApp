import styled from "styled-components";

export const Main = styled.main`
  background-color: #f4f8ff;
`;
export const Section = styled.section`
  padding: 130px 0 50px 0;
`
export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  padding: 10px 0;
  list-style: none;
  gap: 30px;
`;
export const Item = styled.li`
  width: 290px;
  /* border: 1.5px solid #1d2d5b52; */
  overflow: hidden;
  border-radius: 13px;
  background-color: #fff;
  -webkit-box-shadow: 0px 2px 14px 1px rgba(15, 15, 15, 0.4);
  -moz-box-shadow: 0px 2px 14px 1px rgba(15, 15, 15, 0.4);
  box-shadow: 0px 2px 14px 1px rgba(15, 15, 15, 0.4);
  transition: box-shadow 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;
export const Image = styled.img`
  display: block;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  gap: 10px;
  padding: 20px 16px;
  background-color: #1d2d5b;
`;
export const Position = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  margin-bottom: 10px;
  color: #fff;
`;
export const Strong = styled.strong`
  color: #fff;
`;
export const LinkTo = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
`;

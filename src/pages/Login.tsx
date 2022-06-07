import styled from 'styled-components';

import LoginImage from '@/assets/LoginImage.png';
import { Button, Input } from '@/components';
import { theme } from '@/style';

const Test = () => {
  alert('test');
};

export const Login = () => {
  return (
    <Page>
      <StyledLogin>
        <StyledLoginImage src={LoginImage} width="500" height="449.4" alt="LoginImage" />
        <StyledLoginForm>
          <StyledHelloMent>
            반가워요!
            <br />
            함께 일정 관리해요 :)
          </StyledHelloMent>
          <Input
            role="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            marginTop="40px"
          ></Input>
          <Input role="password" type="password" placeholder="비밀번호를 입력해주세요"></Input>
          <StyledAutoLoginAndFindPw>
            <StyledCheckBox type="checkbox" />
            자동로그인
            <StyledFindPass>비밀번호 찾기</StyledFindPass>
          </StyledAutoLoginAndFindPw>
          <Button onClick={Test} marginTop="60px" fontSize={theme.fonts.SubHead1} title="haha!">
            로그인
          </Button>
          <StyledFirstUserWapper>
            <StyledFirstUserLine />
            <StyledFirstUserMent>처음이신가요?</StyledFirstUserMent>
          </StyledFirstUserWapper>
          <Button
            onClick={Test}
            color="#5086FF"
            background="#EAF0FF"
            fontSize={theme.fonts.SubHead1}
          >
            회원가입
          </Button>
        </StyledLoginForm>
      </StyledLogin>
    </Page>
  );
};

const Page = styled.div`
  margin: auto;
  width: 1120px;
  position: relative;
  height: 100vh;
`;

const StyledLogin = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledLoginImage = styled.img`
  margin: auto;
  position: relative;
  display: inline-block;
`;

const StyledLoginForm = styled.div`
  width: 353px;
  height: 501px;
  position: absolute;
  display: inline-block;
  margin-left: 100px;
`;

const StyledHelloMent = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  color: #17191c;
`;

const StyledAutoLoginAndFindPw = styled.div`
  margin-top: 12px;
  position: relative;
  font-size: 14px;
  line-height: 160%;
  font-weight: 500;
`;

const StyledCheckBox = styled.input`
  background: red;
  margin: 5px 8px 0px 2px;
  vertical-align: top;
`;

const StyledFindPass = styled.span`
  position: absolute;
  right: 0px;
  color: ${theme.colors.Gray400};
`;

const StyledFirstUserWapper = styled.div`
  height: 65px;
  line-height: 65px;
  position: relative;
`;

const StyledFirstUserLine = styled.div`
  width: 353px;
  height: 1px;
  position: absolute;
  top: 50%;
  background: ${theme.colors.Gray400};
`;

const StyledFirstUserMent = styled.span`
  background: white;
  color: ${theme.colors.Gray400};
  font-size: 14px;
  z-index: 2;
  position: absolute;
  left: 50%;
  padding: 0 15px;
  transform: translateX(-50%);
`;

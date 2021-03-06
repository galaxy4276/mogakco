import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';

import Button from '~/components/common/Button';

import * as S from './style';

// TODO: 로그인/로그아웃 컴포넌트 작은 모니터에서 버거로 변경

const Header = () => {
  // 임시로 작성한 state와 function
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClick = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <S.HeaderContainer>
      <Row justify="space-between">
        <Col flex="fit-content">
          <S.MainLogo />
        </Col>
        <Col flex="auto">
          {isLoggedIn ? (
            <S.ButtonsWrapper>
              <Link href="/">
                <S.UserIcon />
              </Link>
            </S.ButtonsWrapper>
          ) : (
            <S.ButtonsWrapper>
              <Button color="black" underline onClick={onClick}>
                로그인
              </Button>
              <Link href="/signup">
                <Button color="black" underline>
                  회원가입
                </Button>
              </Link>
            </S.ButtonsWrapper>
          )}
        </Col>
      </Row>
    </S.HeaderContainer>
  );
};

export default Header;

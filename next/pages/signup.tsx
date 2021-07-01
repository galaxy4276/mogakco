import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { END } from 'redux-saga';

import useSWR from 'swr';
import wrapper from '~/redux/store/configureStore';
import { verifyEmailRequest } from '~/redux/reducers/signup';
import CustomHead from '~/components/common/CustomHead';
import AuthContainer from '~/components/common/AuthContainer';
import ProgressBar from '~/components/signup/ProgressBar';
import Start from '~/components/signup/Start';
import RequiredInfo from '~/components/signup/RequiredInfo';
import OptionalInfo from '~/components/signup/OptionalInfo';
import End from '~/components/signup/End';

interface Props {
  isQuery: boolean;
}

const pageProps = {
  title: '회원가입 - Mogakco',
  description: 'Free online video chat for developers',
  url: '', // TODO: 도메인 정해지면 url에 추가하기
  locale: 'ko_KR',
};

const initialData = {
  isVerifyEmail: false,
  isSaveRequiredInfo: false,
  isSignUpDone: false,
};

const SIGN_UP_KEY = 'pages/signup';

const SignUp = ({ isQuery }: Props) => {
  const {
    data: { isSaveRequiredInfo, isSignUpDone, isVerifyEmail } = initialData,
    mutate: updateSignUp,
  } =
    useSWR<{
      isSaveRequiredInfo: boolean;
      isSignUpDone: boolean;
      isVerifyEmail: boolean;
    }>(SIGN_UP_KEY);

  const router = useRouter();

  // const verifyEmailDone = useTypedSelector(
  //   ({ signup }) => signup.verifyEmailDone,
  // );
  //
  // const saveRequiredInfoDone = useTypedSelector(
  //   ({ signup }) => signup.saveRequiredInfoDone,
  // );
  // const signUpDone = useTypedSelector(({ signup }) => signup.signUpDone);

  const fill = [isVerifyEmail, isSaveRequiredInfo, isSignUpDone];

  useEffect(() => {
    // 페이지 떠날 때 모든 state 초기화
    return () => {
      updateSignUp({
        isSaveRequiredInfo: false,
        isSignUpDone: false,
        isVerifyEmail: false,
      });
    };
  }, [updateSignUp]);

  useEffect(() => {
    // 이메일 링크를 타고 들어와 관련 쿼리가 주소창에 남아있다면, 해당 쿼리 clear
    if (isQuery) {
      router.replace('/signup');
    }
  }, [isQuery, router]);

  return (
    <>
      <CustomHead {...pageProps} />
      <AuthContainer progressBar={<ProgressBar fill={fill} />}>
        {!isVerifyEmail && <Start />}
        {isVerifyEmail && !isSaveRequiredInfo && <RequiredInfo />}
        {isSaveRequiredInfo && !isSignUpDone && <OptionalInfo />}
        {isSignUpDone && <End />}
      </AuthContainer>
    </>
  );
};

// 이메일 검증 링크를 타고 이 페이지로 들어와 관련 쿼리가 있다면,
// 해당 쿼리로 이후의 로직 실행
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ query, store }) => {
//     const { success, email: verifiedEmail } = query;
//     const isQuery = Boolean(success);
//
//     if (isQuery) {
//       if (success === 'true') {
//         store.dispatch(verifyEmailRequest(verifiedEmail));
//
//         store.dispatch(END);
//         await store.sagaTask?.toPromise();
//       }
//     }
//
//     return {
//       props: {
//         isQuery,
//       },
//     };
//   },
// );

export default connect((state) => state)(SignUp);

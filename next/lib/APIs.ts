import apiClient from './apiClient';
/**
 * @desc redux/sagas 디렉터리 구성 기준으로 작성됩니다.
 * 추후 API 개수가 많아지고 파일 크기가 늘어나면 디렉터리 단위로 분리 고려.
 */

// common/user
export const userAPIs = {
  // 로그인
  logInAPI: (data) => apiClient.post('/api/auth/login', data),
  // 로그아웃
  logOutAPI: () => apiClient.get('/api/auth/logout'),
};

// signup
export const signupAPIs = {
  // 검증 이메일 전송
  sendEmailAPI: (email) =>
    apiClient.post('/api/auth/send-token/before-register', { email }),
  // 이메일 검증에 성공시 나타나는 쿼리의 이메일에 대해 다시 한 번 검증
  verifyEmailAPI: (email) =>
    apiClient.get(`/api/auth/is-verified/before-register?email=${email}`),
  // 개발 분야 목록 불러오기
  loadSkillsAPI: () => apiClient.get(`/api/user/skills`),
  // 직업 목록 불러오기
  loadJobsAPI: () => apiClient.get(`/api/user/jobs`),
  // 회원가입
  signUpApI: (data) => apiClient.post('/api/auth', data),
};
import { define } from 'typeorm-seeding';
import UserJobEntity from '../models/entities/users-job.entity';

const jobData = [
  '학생',
  '웹 개발자',
  '서버 개발자',
  '연구원',
  '보안 솔루션 개발자',
  '보안 관제',
  '보안 솔루션 개발자',
  '대학원생',
  '기타',
];

const jobDataLength = jobData.length;
export default jobDataLength;

define(UserJobEntity, () => {
  const job = new UserJobEntity();

  if (jobData.length === 0) {
    return null;
  }

  const arrayIndex = Math.floor(Math.random() * jobData.length);
  const name = jobData[arrayIndex];
  jobData.splice(arrayIndex, 1);
  job.name = name;
  job.createdAt = new Date();
  job.updatedAt = new Date();
  return job;
});

import { User } from '../interface/User';

const mockLoggedInUser: User = {
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
  isSitter: true,
};

const mockOtherUser1: User = {
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
  isSitter: true,
};
const mockOtherUser2: User = {
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
  isSitter: true,
};
const mockOtherUser3: User = {
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
  isSitter: false,
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers };

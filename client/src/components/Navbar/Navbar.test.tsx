import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { mockLoggedInUser } from '../../mocks/mockUser';

describe('Navbar tests', () => {
  test('smoke test', () => {
    render(<Navbar loggedInUser={mockLoggedInUser} />);
  });

  test('loading snapshot test', () => {
    const { asFragment } = render(<Navbar loggedInUser={mockLoggedInUser} />);
    expect(asFragment).toMatchSnapshot();
  });
});

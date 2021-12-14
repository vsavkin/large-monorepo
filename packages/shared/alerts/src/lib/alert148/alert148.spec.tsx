import { render } from '@testing-library/react';

import Alert148 from './alert148';

describe('Alert148', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert148 />);
    expect(baseElement).toBeTruthy();
  });
});

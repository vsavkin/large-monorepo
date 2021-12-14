import { render } from '@testing-library/react';

import Alert159 from './alert159';

describe('Alert159', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert159 />);
    expect(baseElement).toBeTruthy();
  });
});

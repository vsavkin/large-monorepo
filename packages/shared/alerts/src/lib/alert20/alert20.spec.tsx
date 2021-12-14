import { render } from '@testing-library/react';

import Alert20 from './alert20';

describe('Alert20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert20 />);
    expect(baseElement).toBeTruthy();
  });
});

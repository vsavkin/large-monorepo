import { render } from '@testing-library/react';

import Alert235 from './alert235';

describe('Alert235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert235 />);
    expect(baseElement).toBeTruthy();
  });
});

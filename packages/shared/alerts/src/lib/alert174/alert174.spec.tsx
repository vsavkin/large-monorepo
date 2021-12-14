import { render } from '@testing-library/react';

import Alert174 from './alert174';

describe('Alert174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert174 />);
    expect(baseElement).toBeTruthy();
  });
});

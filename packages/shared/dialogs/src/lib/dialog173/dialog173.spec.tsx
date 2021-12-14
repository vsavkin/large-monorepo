import { render } from '@testing-library/react';

import Dialog173 from './dialog173';

describe('Dialog173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog173 />);
    expect(baseElement).toBeTruthy();
  });
});

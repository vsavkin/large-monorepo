import { render } from '@testing-library/react';

import Dialog248 from './dialog248';

describe('Dialog248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog248 />);
    expect(baseElement).toBeTruthy();
  });
});

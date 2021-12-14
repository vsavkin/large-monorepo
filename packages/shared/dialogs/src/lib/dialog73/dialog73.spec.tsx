import { render } from '@testing-library/react';

import Dialog73 from './dialog73';

describe('Dialog73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog73 />);
    expect(baseElement).toBeTruthy();
  });
});

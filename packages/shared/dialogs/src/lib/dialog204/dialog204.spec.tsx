import { render } from '@testing-library/react';

import Dialog204 from './dialog204';

describe('Dialog204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog204 />);
    expect(baseElement).toBeTruthy();
  });
});

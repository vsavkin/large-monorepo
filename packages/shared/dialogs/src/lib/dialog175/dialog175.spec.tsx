import { render } from '@testing-library/react';

import Dialog175 from './dialog175';

describe('Dialog175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog175 />);
    expect(baseElement).toBeTruthy();
  });
});

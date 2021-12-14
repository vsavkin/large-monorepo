import { render } from '@testing-library/react';

import Dialog225 from './dialog225';

describe('Dialog225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog225 />);
    expect(baseElement).toBeTruthy();
  });
});

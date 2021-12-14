import { render } from '@testing-library/react';

import Dialog151 from './dialog151';

describe('Dialog151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog151 />);
    expect(baseElement).toBeTruthy();
  });
});

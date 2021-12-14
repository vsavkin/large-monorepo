import { render } from '@testing-library/react';

import Dialog46 from './dialog46';

describe('Dialog46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog46 />);
    expect(baseElement).toBeTruthy();
  });
});

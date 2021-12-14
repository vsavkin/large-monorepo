import { render } from '@testing-library/react';

import Dialog27 from './dialog27';

describe('Dialog27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog27 />);
    expect(baseElement).toBeTruthy();
  });
});

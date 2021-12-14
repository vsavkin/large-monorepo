import { render } from '@testing-library/react';

import Dialog49 from './dialog49';

describe('Dialog49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog49 />);
    expect(baseElement).toBeTruthy();
  });
});

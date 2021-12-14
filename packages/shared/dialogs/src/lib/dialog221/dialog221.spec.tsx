import { render } from '@testing-library/react';

import Dialog221 from './dialog221';

describe('Dialog221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog221 />);
    expect(baseElement).toBeTruthy();
  });
});

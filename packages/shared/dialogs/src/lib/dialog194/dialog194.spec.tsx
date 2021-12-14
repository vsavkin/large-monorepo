import { render } from '@testing-library/react';

import Dialog194 from './dialog194';

describe('Dialog194', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog194 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog158 from './dialog158';

describe('Dialog158', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog158 />);
    expect(baseElement).toBeTruthy();
  });
});

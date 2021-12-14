import { render } from '@testing-library/react';

import Dialog26 from './dialog26';

describe('Dialog26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog26 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog245 from './dialog245';

describe('Dialog245', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog245 />);
    expect(baseElement).toBeTruthy();
  });
});

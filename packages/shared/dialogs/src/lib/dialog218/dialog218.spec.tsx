import { render } from '@testing-library/react';

import Dialog218 from './dialog218';

describe('Dialog218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog218 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog29 from './dialog29';

describe('Dialog29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog29 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog241 from './dialog241';

describe('Dialog241', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog241 />);
    expect(baseElement).toBeTruthy();
  });
});

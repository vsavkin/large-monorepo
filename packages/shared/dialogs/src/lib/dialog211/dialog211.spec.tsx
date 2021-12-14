import { render } from '@testing-library/react';

import Dialog211 from './dialog211';

describe('Dialog211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog211 />);
    expect(baseElement).toBeTruthy();
  });
});

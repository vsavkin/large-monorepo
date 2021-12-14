import { render } from '@testing-library/react';

import Dialog226 from './dialog226';

describe('Dialog226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog226 />);
    expect(baseElement).toBeTruthy();
  });
});

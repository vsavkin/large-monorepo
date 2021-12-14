import { render } from '@testing-library/react';

import Dialog237 from './dialog237';

describe('Dialog237', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog237 />);
    expect(baseElement).toBeTruthy();
  });
});

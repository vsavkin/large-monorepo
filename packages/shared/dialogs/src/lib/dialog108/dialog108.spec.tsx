import { render } from '@testing-library/react';

import Dialog108 from './dialog108';

describe('Dialog108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog108 />);
    expect(baseElement).toBeTruthy();
  });
});

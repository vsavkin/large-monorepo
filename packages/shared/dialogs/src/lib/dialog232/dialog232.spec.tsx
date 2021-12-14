import { render } from '@testing-library/react';

import Dialog232 from './dialog232';

describe('Dialog232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog232 />);
    expect(baseElement).toBeTruthy();
  });
});

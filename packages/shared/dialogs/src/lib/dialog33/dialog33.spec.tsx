import { render } from '@testing-library/react';

import Dialog33 from './dialog33';

describe('Dialog33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog33 />);
    expect(baseElement).toBeTruthy();
  });
});

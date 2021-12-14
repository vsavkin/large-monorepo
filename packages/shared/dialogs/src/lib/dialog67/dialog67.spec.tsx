import { render } from '@testing-library/react';

import Dialog67 from './dialog67';

describe('Dialog67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog67 />);
    expect(baseElement).toBeTruthy();
  });
});

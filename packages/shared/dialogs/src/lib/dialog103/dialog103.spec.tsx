import { render } from '@testing-library/react';

import Dialog103 from './dialog103';

describe('Dialog103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog103 />);
    expect(baseElement).toBeTruthy();
  });
});

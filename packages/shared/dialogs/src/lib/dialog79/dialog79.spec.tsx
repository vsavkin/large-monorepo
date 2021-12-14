import { render } from '@testing-library/react';

import Dialog79 from './dialog79';

describe('Dialog79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog79 />);
    expect(baseElement).toBeTruthy();
  });
});

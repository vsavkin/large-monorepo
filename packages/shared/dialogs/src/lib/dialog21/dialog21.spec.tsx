import { render } from '@testing-library/react';

import Dialog21 from './dialog21';

describe('Dialog21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog21 />);
    expect(baseElement).toBeTruthy();
  });
});

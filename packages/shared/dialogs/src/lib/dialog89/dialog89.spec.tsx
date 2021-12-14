import { render } from '@testing-library/react';

import Dialog89 from './dialog89';

describe('Dialog89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog89 />);
    expect(baseElement).toBeTruthy();
  });
});

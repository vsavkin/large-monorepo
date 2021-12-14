import { render } from '@testing-library/react';

import Dialog20 from './dialog20';

describe('Dialog20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog20 />);
    expect(baseElement).toBeTruthy();
  });
});

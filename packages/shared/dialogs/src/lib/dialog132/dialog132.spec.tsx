import { render } from '@testing-library/react';

import Dialog132 from './dialog132';

describe('Dialog132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog132 />);
    expect(baseElement).toBeTruthy();
  });
});

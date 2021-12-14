import { render } from '@testing-library/react';

import Dialog125 from './dialog125';

describe('Dialog125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog125 />);
    expect(baseElement).toBeTruthy();
  });
});

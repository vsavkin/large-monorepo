import { render } from '@testing-library/react';

import Dialog22 from './dialog22';

describe('Dialog22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog22 />);
    expect(baseElement).toBeTruthy();
  });
});

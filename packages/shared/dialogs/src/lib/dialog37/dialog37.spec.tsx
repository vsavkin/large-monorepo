import { render } from '@testing-library/react';

import Dialog37 from './dialog37';

describe('Dialog37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog37 />);
    expect(baseElement).toBeTruthy();
  });
});

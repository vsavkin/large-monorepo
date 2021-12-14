import { render } from '@testing-library/react';

import Dialog54 from './dialog54';

describe('Dialog54', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog54 />);
    expect(baseElement).toBeTruthy();
  });
});

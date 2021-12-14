import { render } from '@testing-library/react';

import Dialog217 from './dialog217';

describe('Dialog217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog217 />);
    expect(baseElement).toBeTruthy();
  });
});

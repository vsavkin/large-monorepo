import { render } from '@testing-library/react';

import Dialog109 from './dialog109';

describe('Dialog109', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog109 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog65 from './dialog65';

describe('Dialog65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog65 />);
    expect(baseElement).toBeTruthy();
  });
});

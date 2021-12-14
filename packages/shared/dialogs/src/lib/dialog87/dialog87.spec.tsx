import { render } from '@testing-library/react';

import Dialog87 from './dialog87';

describe('Dialog87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog87 />);
    expect(baseElement).toBeTruthy();
  });
});

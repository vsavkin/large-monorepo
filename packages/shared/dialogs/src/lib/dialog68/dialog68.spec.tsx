import { render } from '@testing-library/react';

import Dialog68 from './dialog68';

describe('Dialog68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog68 />);
    expect(baseElement).toBeTruthy();
  });
});

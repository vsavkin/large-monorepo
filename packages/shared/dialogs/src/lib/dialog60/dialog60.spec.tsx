import { render } from '@testing-library/react';

import Dialog60 from './dialog60';

describe('Dialog60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog60 />);
    expect(baseElement).toBeTruthy();
  });
});

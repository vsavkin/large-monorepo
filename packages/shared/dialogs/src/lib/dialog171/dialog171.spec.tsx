import { render } from '@testing-library/react';

import Dialog171 from './dialog171';

describe('Dialog171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog171 />);
    expect(baseElement).toBeTruthy();
  });
});

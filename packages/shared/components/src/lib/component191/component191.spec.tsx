import { render } from '@testing-library/react';

import Component191 from './component191';

describe('Component191', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component191 />);
    expect(baseElement).toBeTruthy();
  });
});

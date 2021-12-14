import { render } from '@testing-library/react';

import Component188 from './component188';

describe('Component188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component188 />);
    expect(baseElement).toBeTruthy();
  });
});

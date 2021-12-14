import { render } from '@testing-library/react';

import Component206 from './component206';

describe('Component206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component206 />);
    expect(baseElement).toBeTruthy();
  });
});

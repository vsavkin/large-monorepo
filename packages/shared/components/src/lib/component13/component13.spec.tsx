import { render } from '@testing-library/react';

import Component13 from './component13';

describe('Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component13 />);
    expect(baseElement).toBeTruthy();
  });
});

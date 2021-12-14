import { render } from '@testing-library/react';

import Component68 from './component68';

describe('Component68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component68 />);
    expect(baseElement).toBeTruthy();
  });
});

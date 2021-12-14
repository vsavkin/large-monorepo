import { render } from '@testing-library/react';

import Component183 from './component183';

describe('Component183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component183 />);
    expect(baseElement).toBeTruthy();
  });
});

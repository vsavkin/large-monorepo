import { render } from '@testing-library/react';

import Component24 from './component24';

describe('Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component24 />);
    expect(baseElement).toBeTruthy();
  });
});

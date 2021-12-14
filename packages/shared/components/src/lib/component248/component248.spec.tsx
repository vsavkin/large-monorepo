import { render } from '@testing-library/react';

import Component248 from './component248';

describe('Component248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component248 />);
    expect(baseElement).toBeTruthy();
  });
});

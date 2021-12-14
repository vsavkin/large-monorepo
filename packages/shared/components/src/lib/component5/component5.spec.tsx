import { render } from '@testing-library/react';

import Component5 from './component5';

describe('Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component5 />);
    expect(baseElement).toBeTruthy();
  });
});

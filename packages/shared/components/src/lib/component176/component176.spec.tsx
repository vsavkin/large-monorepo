import { render } from '@testing-library/react';

import Component176 from './component176';

describe('Component176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component176 />);
    expect(baseElement).toBeTruthy();
  });
});

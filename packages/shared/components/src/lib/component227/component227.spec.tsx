import { render } from '@testing-library/react';

import Component227 from './component227';

describe('Component227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component227 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component99 from './component99';

describe('Component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component99 />);
    expect(baseElement).toBeTruthy();
  });
});

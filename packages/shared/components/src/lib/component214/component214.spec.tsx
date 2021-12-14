import { render } from '@testing-library/react';

import Component214 from './component214';

describe('Component214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component214 />);
    expect(baseElement).toBeTruthy();
  });
});

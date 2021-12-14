import { render } from '@testing-library/react';

import Component163 from './component163';

describe('Component163', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component163 />);
    expect(baseElement).toBeTruthy();
  });
});

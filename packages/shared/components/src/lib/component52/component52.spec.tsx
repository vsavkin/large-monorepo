import { render } from '@testing-library/react';

import Component52 from './component52';

describe('Component52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component52 />);
    expect(baseElement).toBeTruthy();
  });
});

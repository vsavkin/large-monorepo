import { render } from '@testing-library/react';

import Component66 from './component66';

describe('Component66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component66 />);
    expect(baseElement).toBeTruthy();
  });
});

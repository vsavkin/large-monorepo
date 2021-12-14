import { render } from '@testing-library/react';

import Component219 from './component219';

describe('Component219', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component219 />);
    expect(baseElement).toBeTruthy();
  });
});

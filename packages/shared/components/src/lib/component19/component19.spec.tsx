import { render } from '@testing-library/react';

import Component19 from './component19';

describe('Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
